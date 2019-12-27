import { Injectable } from '@angular/core';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { Ringtone } from '../model/ringtone.model';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  alarmDistance: number;
  alarmVolume: number;
  alarmRingtone: Ringtone;
  defaultRingtone: Ringtone = {
    Name: 'Classic Alarm',
    Url:'assets/alarms/Classic Alarm.ogg'
  }

  constructor(private ringtone: NativeRingtones, private storage: NativeStorage) { }

  loadSettings(){
    this.storage.getItem('alarmVolume').then(volume => {
      this.alarmVolume = volume;
    }, err => {
      this.alarmVolume = 1;
    });
    this.storage.getItem('alarmRingtone').then(ringtone => {
      this.alarmRingtone = ringtone;
    }, err => {
      this.alarmRingtone = this.defaultRingtone;
    });
    this.storage.getItem('alarmDistance').then(distance => {
      this.alarmDistance = distance;
    }, err => {
      this.alarmDistance = 2;
    });
  }

  
  getAlarmVolume(): number{
    return this.alarmVolume;
  }

  setAlarmVolume(volume:number){
    this.alarmVolume = volume;
    this.storage.setItem('alarmVolume', this.alarmVolume);
  }

  getAlarmRingtone(): Ringtone{
    return this.alarmRingtone;
  }
  
  setAlarmRingtone(ringtone: Ringtone){
    this.alarmRingtone = ringtone;
    this.storage.setItem('alarmRingtone', ringtone);
  }

  getAlarmDistance(): number{
    return this.alarmDistance;
  }

  setAlarmDistance(distance: number){
    this.alarmDistance = distance;
    this.storage.setItem('alarmDistance', this.alarmDistance);
  }
  
  
}
