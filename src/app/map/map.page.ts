import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  Marker,
  Geocoder,
  GeocoderResult,
  GeocoderRequest,
  ILatLng,
  LatLng,
  HtmlInfoWindow
} from '@ionic-native/google-maps/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlarmService } from '../service/alarm.service';
import { PositionService } from '../service/position.service';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  private searchedPosition: GeocoderResult;
  private searchedPositionMarker: Marker;
  public map: GoogleMap;
  public inputLocation: string = '';
  public gpsIsOn: boolean;
  private mapInitialized: boolean = false;
  constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController, private storage: NativeStorage,
    private router: Router, private alarm: AlarmService, public position: PositionService, private location: Location, private http: HTTP) {
    }
    
    async ngOnInit() {
      await this.presentOpeningLoading();
      this.internetIsActive().then((isActive: boolean) =>{
        if(isActive){
          this.position.turnOnGPS().then((gpsIsOn: boolean) => {
            if (gpsIsOn) {
              this.loadMap();
              this.gpsIsOn = true;
            } else {
              this.loadingCtrl.dismiss();
              this.gpsIsOn = false;
            }
          }, err => {
            this.loadingCtrl.dismiss();
            this.gpsIsOn = false;
          });
        }else{
          this.loadingCtrl.dismiss();
          this.presentAlertNoConnection();
        }
      })      
    }
    
    async presentOpeningLoading() {
      return new Promise(async resolve => {
        const loading = await this.loadingCtrl.create({
          duration: 20000
        });
        await loading.present();
        resolve();
      })
    }
    
    internetIsActive(){
      return new Promise(resolve => {
        this.http.get('http://www.google.com/', { observe: 'response' }, {}).then(resp => {
        if (resp.status === 200 ) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, () => {
        resolve(false);
      });
    })      
  }
  
  loadMap() {
    let controls = {
      compass: false,
      myLocation: true,
      myLocationButton: false,
      mapToolbar: true
    }

    this.position.startingCameraPosition().then((startingCameraCoords: Geoposition) => {
      let latLng: LatLng = new LatLng(startingCameraCoords.coords.latitude, startingCameraCoords.coords.longitude);
      let mapOptions: GoogleMapOptions = {
        controls: controls,
        camera: {
          target: latLng,
          zoom: 15,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create('map_canvas', mapOptions);
      var inputStyle = document.getElementById('input').style;
      document.getElementById('search-wrapper').style.height = inputStyle.height;
      document.getElementById('icon').style.fontSize = inputStyle.fontSize;
      this.mapInitialized = true;
      this.loadingCtrl.dismiss();
    })
  }
  
  async presentAlertNoConnection() {
    const alert = await this.alertCtrl.create({
      header: 'No connection',
      message: '<span class="alert-message">Internet connection is needed to select a new destination. Without internet connection, only recent destinations can be selected.<span>',
      buttons: [
        {
          text: 'Retry',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.retry();
          }
        },
        {
          text: 'Select recent destination',
          handler: () => {
            this.location.back();
          }
        }
      ]
    });
    await alert.present();
  }
  
  retry(){
    if(this.mapInitialized){
      this.updateDestination()
    }else{
      this.ngOnInit();
    }
  }

  updateDestination() {
    this.internetIsActive().then(async (isActive:boolean) =>{
      if(isActive){
        await this.presentLoadingWithMessage('Pinpointing destination..');
        this.map.clear();
        await this.searchInputLocation();
        this.loadResultMarker();
        this.moveCameraToMarker();
        this.setDestinationOnMarkerTap();
        this.loadingCtrl.dismiss();
      }else{
        this.presentAlertNoConnection();
      }
    })
  }

  async presentLoadingWithMessage(message) {
    return new Promise(async resolve => {
      const loading = await this.loadingCtrl.create({
        message: message,
        duration: 10000
      });
      await loading.present();
      resolve();
    })
  }
  
  searchInputLocation() {
    let options: GeocoderRequest = {
      address: this.inputLocation
    };
    return new Promise(resolve => {
      Geocoder.geocode(options).then((results: GeocoderResult[]) => {
        this.searchedPosition = results[0];
        resolve();
      })
    })
  }
  
  loadResultMarker() {
    if (this.searchedPosition == undefined) {
      this.loadingCtrl.dismiss();
      this.searchNotFound();
    } else {
      this.searchedPositionMarker = this.map.addMarkerSync({
        title: this.searchedPosition.extra.featureName,
        snippet: 'Tap on the marker to set the destination',
        animation: 'DROP',
        position: {
          lat: this.searchedPosition.position.lat,
          lng: this.searchedPosition.position.lng
        }
      });

      this.searchedPositionMarker.showInfoWindow();
    }
  }
  
  async searchNotFound() {
    const alert = await this.alertCtrl.create({
      header: 'Destination not found',
      message: '<span class="alert-message">We were not able to find any destination for this search.</span>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
  
  moveCameraToMarker() {
    let cameraPos: CameraPosition<ILatLng> = {
      target: {
        lat: this.searchedPosition.position.lat,
        lng: this.searchedPosition.position.lng
      },
      zoom: 16
    }
    this.map.moveCamera(cameraPos);
  }
  
  setDestinationOnMarkerTap() {
    this.searchedPositionMarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.showDestinationConfirmationAlert();
    });
  }
  
  async showDestinationConfirmationAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Enable Alarm',
      message: '<span class="alert-message">Enable the alarm for ' + this.searchedPosition.extra.featureName + ' ?</span>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Enable',
          cssClass: 'accept',
          handler: () => {
            this.enableAlarm();
          }
        }
      ]
    });
    await alert.present();
  }
  
  async enableAlarm() {
    await this.presentLoadingWithMessage("Setting alarm..");
    this.updateDestinationHistory();
    this.position.setDestination(this.searchedPosition);
    this.alarm.start();
    this.loadingCtrl.dismiss();
    this.router.navigate(['/home']);
  }
  
  updateDestinationHistory() {
    this.storage.getItem('savedDestinations').then((savedDestinations: GeocoderResult[]) => {
      if (savedDestinations.length == 0) {
        savedDestinations.push(this.searchedPosition);
      } else {
        savedDestinations = this.checkDestinationHistory(savedDestinations);
      }
      this.storage.setItem('savedDestinations', savedDestinations);
    })
  }
  
  checkDestinationHistory(savedDestinations: GeocoderResult[]): GeocoderResult[] {
    let destinationFoundInHistory: boolean = false;
    let i = 0;
    while (!destinationFoundInHistory && i < savedDestinations.length) {
      if (this.checkIfSaved(savedDestinations[i])) {
        destinationFoundInHistory = true;
      } else {
        i += 1;
      }
    }
    if (!destinationFoundInHistory) {
      savedDestinations.push(this.searchedPosition);
    }
    return savedDestinations;
  }
  
  checkIfSaved(destination: GeocoderResult): boolean {
    if (destination.position.lat == this.searchedPosition.position.lat && destination.position.lng == this.searchedPosition.position.lng)
    return true;
    return false;
  }
  
  async reloadMap() {
    await this.presentOpeningLoading();
    this.position.turnOnGPS().then((gpsIsOn: boolean) => {
      if (gpsIsOn) {
        this.gpsIsOn = true;
        this.loadMap();
      } else {
        this.loadingCtrl.dismiss();
        this.gpsIsOn = false;
      }      
    }, err => {
      this.loadingCtrl.dismiss();
      this.gpsIsOn = false;
    });
  }
  
}