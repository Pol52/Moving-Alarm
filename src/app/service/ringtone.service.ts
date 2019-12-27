import { Injectable, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { File } from '@ionic-native/file/ngx';
import { Ringtone } from '../model/ringtone.model';
import { SettingsService } from './settings.service';
import { AudioManagement } from '@ionic-native/audio-management/ngx';

@Injectable({
  providedIn: 'root'
})
export class RingtoneService{
  
  private ringtonesList: Ringtone[] = [];
  private currentRingtone: string = "";
  private timeoutTime: number = 1000;
  private previewTimeout;
  private userAudioMode: AudioManagement.AudioMode;
  private maxVolume: number;
  private userVolume: number;
  
  constructor(private audio: NativeAudio, private file: File, private settings: SettingsService, private audioVolume: AudioManagement) { 
    audioVolume.getMaxVolume(AudioManagement.VolumeType.MUSIC).then(maxVolume => {
      this.maxVolume = maxVolume.maxVolume;
    })
  }
  
  
  loadRingtones(){
    this.file.listDir(this.file.applicationDirectory, 'www/assets/alarms').then(ringtonesList => {
      for(let ringtone of ringtonesList){
        this.addToList(ringtone);
      }      
    });
  }
  
  addToList(ringtone){
    let newRingtone: Ringtone = {
      Name: ringtone.name.split(".")[0],
      Url: ringtone.fullPath.split("www/")[1]
    }
    this.ringtonesList.push(newRingtone);
  }
  
  getRingtones(): Ringtone[]{
    return this.ringtonesList;
  }
  
  async playRingtonePreview(newRingtoneUrl){   
    if(this.currentRingtone == ""){
      this.playSelectedRingtoneWithTimeout(newRingtoneUrl);
    }else{
      await this.stopRingtone();
      this.playSelectedRingtoneWithTimeout(newRingtoneUrl);            
    }    
  }
  
  async playSelectedRingtoneWithTimeout(ringtoneUrl){
    this.currentRingtone = ringtoneUrl;  
    await this.playRingtone(ringtoneUrl);
    this.previewTimeout = setTimeout(()=>{    
      this.stopRingtone();
    }, this.timeoutTime);     
  }
  
  stopRingtone(){
    return new Promise(resolve => {
      if(this.currentRingtone != ""){
        this.audio.stop('ringtone');
        this.audioVolume.setAudioMode(this.userAudioMode);    
        this.audioVolume.setVolume(AudioManagement.VolumeType.RING, this.userVolume);
        if(this.previewTimeout){
          clearTimeout(this.previewTimeout);
        }
        this.currentRingtone = "";
        this.audio.unload('ringtone').then(() => {
          resolve();
        })
      }
    })        
  }
  
  async playRingtoneForAlarm(){
    if(this.currentRingtone == ""){
      let selectedRingtone: Ringtone = this.settings.getAlarmRingtone();      
      this.currentRingtone = selectedRingtone.Url;
      this.playRingtone(selectedRingtone.Url);   
      await this.getAudioModeAndVolume();
      this.audioVolume.setAudioMode(AudioManagement.AudioMode.NORMAL);    
      this.audioVolume.setVolume(AudioManagement.VolumeType.MUSIC, this.maxVolume);
    }
  }
  
  playRingtone(ringtoneUrl){    
    return new Promise(resolve => {
      this.audio.preloadComplex('ringtone', ringtoneUrl, this.settings.getAlarmVolume(), 1, 0).then(() => {
        this.audio.play('ringtone');
        this.audio.loop('ringtone');
        resolve();
      });
    })
  }
  
  getAudioModeAndVolume() {
    return new Promise(resolve => {
      this.audioVolume.getAudioMode().then((audioMode: AudioManagement.AudioModeReturn) => {
        this.userAudioMode = audioMode.audioMode;
        this.audioVolume.getVolume(AudioManagement.VolumeType.MUSIC).then(currentVolume => {
          this.userVolume = currentVolume.volume;
          resolve();
        },() => {
          this.userVolume = 5;
          resolve();
        })  
      }, () => {
        this.userVolume =AudioManagement.AudioMode.NORMAL;
        this.userVolume = 5;
        resolve();
      })
    })
  }
}






