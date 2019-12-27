import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GeocoderResult } from '@ionic-native/google-maps/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { PositionService } from '../service/position.service';
import { AlarmService } from '../service/alarm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-selector',
  templateUrl: './destination-selector.page.html',
  styleUrls: ['./destination-selector.page.scss'],
})
export class DestinationSelectorPage implements OnInit {
  
  savedDestinations: GeocoderResult[] = [];
  
  constructor(private storage: NativeStorage, private loadingCtrl: LoadingController, private position: PositionService, private alarm: AlarmService,
    private router: Router, private alertCtrl: AlertController) {
      
    }
    
    async ngOnInit() {
      await this.presentOpeningLoading();
      this.storage.getItem('savedDestinations').then(savedDestinations => {
        this.savedDestinations = savedDestinations;
        this.dismissLoading();
      }, err => {
        this.dismissLoading();
      })
    }
    
    async presentOpeningLoading() {
      return new Promise(async resolve => {
        const loading = await this.loadingCtrl.create({
          duration: 10000
        });
        await loading.present();
        resolve();
      })
    }
    
    dismissLoading(){
      this.loadingCtrl.dismiss();    
    }
    
    async showDestinationConfirmationAlert(destination:GeocoderResult){
      const alert = await this.alertCtrl.create({
        header: 'Enable Alarm',
        message: '<span class="alert-message">Enable the alarm for ' + destination.extra.featureName + ' ?</span>',
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
              this.enableAlarm(destination);
            }
          }
        ]
      });      
      await alert.present();
    }
    
    async enableAlarm(destination:GeocoderResult){
      await this.presentOpeningLoading();
      this.position.turnOnGPS().then((gpsIsOn)=> {
        if(gpsIsOn){
          this.position.setDestination(destination);
          this.alarm.start();
          this.dismissLoading();
          this.router.navigate(['/home']);
        }else{
          this.dismissLoading();
          this.showNoGPSAlert();         
        }        
      })      
    }
    
    async showNoGPSAlert(){
      const alert = await this.alertCtrl.create({
        header: 'GPS Disabled',
        message: '<span class="alert-message">GPS needs to be enabled to set a destination.</span>',
        buttons: [
          {
            text: 'Cancel',
            role:'cancel',
            handler: () => {
            }
          }
        ]
      });      
      await alert.present();
    }
    
    deleteRecentDestination(index){
      this.savedDestinations.splice(index,1);
      this.storage.setItem('savedDestinations', this.savedDestinations);
    }
    
  }
  
