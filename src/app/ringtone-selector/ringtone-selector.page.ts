import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';
import { Ringtone } from '../model/ringtone.model';
import { RingtoneService } from '../service/ringtone.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-ringtone-selector',
  templateUrl: './ringtone-selector.page.html',
  styleUrls: ['./ringtone-selector.page.scss'],
})
export class RingtoneSelectorPage implements OnInit {

  ringtonesList: Ringtone[] = [];
  selectedRingtone: Ringtone = null;
  selected:number = null;

  constructor(private settings: SettingsService, private ringtone: RingtoneService, private storage: NativeStorage) { }

  async ngOnInit() {
    this.ringtonesList = await this.ringtone.getRingtones();
    this.selectedRingtone = this.settings.getAlarmRingtone();
    this.ringtonesList.forEach((value, index) =>{
      if(value.Name == this.selectedRingtone.Name){
        this.selected = index;
      }  
    })
  }

  updateRingtone(ringtone: Ringtone, index){
    this.playRingtonePreview(ringtone.Url);
    this.selected = index;
    this.settings.setAlarmRingtone(ringtone);
  }
  playRingtonePreview(ringtoneUrl){
    this.ringtone.playRingtonePreview(ringtoneUrl);
  }

  ngOnDestroy(){ 
    this.storage.setItem('selectedRingtone', this.ringtonesList[this.selected]);
  }

}
