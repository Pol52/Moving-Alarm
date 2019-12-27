import { Component} from '@angular/core';
import { AlarmService } from '../service/alarm.service';
import { PositionService } from '../service/position.service';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  loading: boolean;
  alarmEnabled: boolean = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  tutorial: boolean = false;

  constructor(public alarm: AlarmService, public position: PositionService, private alertCtrl: AlertController, private storage: NativeStorage, public settings:SettingsService ) {
    this.storage.getItem('firstTime').then(() => {
      this.tutorial = false;
    }, err => {
      this.tutorial = true;
      this.storage.setItem('firstTime', false);
    })
  }

  endTutorial(){
    this.tutorial = false;
  }

  disableAlarm(){
    if(this.alarm.isRinging()){
      this.stopAlarm();
    }else{
      this.showPreemptiveAlarmDisabling();
    }
  }
  

  async showPreemptiveAlarmDisabling(){
    const alert = await this.alertCtrl.create({
      header: 'Alarm Disable',
      message: '<span class="alert-message">Disable the alarm?</span>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Yes',
          cssClass: 'accept',
          handler: () => {
            this.stopAlarm();
          }
        }
      ]
    });
    
    await alert.present();
  }

  stopAlarm(){
    this.alarmEnabled=false;
    this.alarm.stop();
  }



}
