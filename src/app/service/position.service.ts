import { Injectable } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs'; 
import { GeocoderResult } from '@ionic-native/google-maps/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
  BackgroundGeolocationEvents
} from "@ionic-native/background-geolocation/ngx";
import { SettingsService } from './settings.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation, Geoposition }  from  '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private updateSubscription: Subscription;
  public activeDestination:GeocoderResult = null;
  public nearDestination$ = new Subject<any>();
  private position:BackgroundGeolocationResponse = null;
  public distance: number = -1;
  public speed: number = 0;
  private positionUpdateRate: number = 5000;
  public gpsPermissionAvailable = false;
  constructor(private backgroundGeolocation: BackgroundGeolocation, private settings: SettingsService, private permissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy, private geolocation:Geolocation) { }

    checkGPSPermission(){
      this.permissions.checkPermission(this.permissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
        if(!result.hasPermission){
          this.requestGPSPermission();
        }else{
          this.gpsPermissionAvailable = true;
        }
      }, () => {
        this.gpsPermissionAvailable = false;
      })
    }

    requestGPSPermission(){
      this.locationAccuracy.canRequest().then((canRequest: boolean) =>{
        if(canRequest){
          this.gpsPermissionAvailable = true;
        }else{
          this.permissions.requestPermission(this.permissions.PERMISSION.ACCESS_COARSE_LOCATION).then(() => {
            this.gpsPermissionAvailable = true;
          }, () => {
            this.gpsPermissionAvailable = false;
          })
        }
      })
    }

    turnOnGPS(){
      return new Promise(resolve => {
        if(this.gpsPermissionAvailable){
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            this.gpsPermissionAvailable = true;
            resolve(true);
          }, () =>{
            resolve(false);
          })
        }else{
          resolve(false);
        }
      })
    }

    startingCameraPosition(){
      return new Promise(resolve =>{
        this.geolocation.getCurrentPosition().then((startingPosition:Geoposition) =>{
          resolve(startingPosition);
        })
      })
    }

    public setDestination(destination: GeocoderResult){
      this.activeDestination = destination;
      this.startPositionUpdate();
    }

    private startPositionUpdate(){
      this.backgroundGeolocation.getCurrentLocation().then((location: BackgroundGeolocationResponse) =>{
        this.position = location;
        let source = interval(this.positionUpdateRate);
        this.updateSubscription = source.subscribe(() => {
          this.checkUpdatedDistance();
        })
      })
    }

    private async checkUpdatedDistance(){
      await this.updatePosition();
      if(this.nearDestination()){
        this.notifyAlarm();
      }
    }

    private updatePosition(){
      return new Promise(resolve => {
        this.configureGeolocation().then(() => {
          this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
            this.position = location;
            this.speed = this.position.speed * 3.6;
            this.backgroundGeolocation.finish();
          });
        });
        this.backgroundGeolocation.start();
        resolve();
      })
    }

    configureGeolocation(){
      const config: BackgroundGeolocationConfig = {
        notificationTitle:"Moving Alarm",
        notificationText:"Moving Alarm is tracking your position",
        desiredAccuracy: 10,
        stationaryRadius: 0,
        distanceFilter: 0,
        debug: false, //  enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: true // enable this to clear background location settings when the app terminates
      };
      return this.backgroundGeolocation.configure(config);
    }

    private nearDestination(){
      if(this.activeDestination != null && this.position != null){
        if ((this.activeDestination.position.lat == this.position.latitude) && (this.activeDestination.position.lng == this.position.longitude)) {
          return true;
        }
        else {
          this.computeDistance(this.position);
          if(this.distance < this.settings.getAlarmDistance()){
            return true;
          }else{
            this.updateRefreshTime(this.distance);
            return false;
          }
        }
      }
    }

    computeDistance(position:BackgroundGeolocationResponse){
      var radlat1 = Math.PI * this.activeDestination.position.lat/180;
      var radlat2 = Math.PI * position.latitude/180;
      var theta = this.activeDestination.position.lng-position.longitude;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515 * 1.609344;
      this.distance = dist;
    }

    updateRefreshTime(distance: number){
      let positionRefreshTime = 20000 + (distance*distance*100);
      this.positionUpdateRate = positionRefreshTime;
      this.updateSubscription.unsubscribe();
      let source = interval(this.positionUpdateRate);
      this.updateSubscription = source.subscribe(() => {
        this.checkUpdatedDistance();
      })
    }

    private notifyAlarm() {
      this.nearDestination$.next(true);
    }

    public checkNearDestination(): Observable<any> {
      return this.nearDestination$.asObservable();
    }

    public stopPositionUpdate(){
      this.updateSubscription.unsubscribe();
      this.activeDestination = null;
      this.backgroundGeolocation.stop();
    }
  }
