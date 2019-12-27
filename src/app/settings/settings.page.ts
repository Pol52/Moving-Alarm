import { Component } from '@angular/core';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  
  alarmVolume: number;
  alarmDistance: number;
  
  constructor(public settings: SettingsService) { 
    this.alarmVolume = this.settings.getAlarmVolume();
    this.alarmDistance = this.settings.getAlarmDistance();
  }
  
  updateAlarmVolume(){
    this.settings.setAlarmVolume(this.alarmVolume);
  }

  updateAlarmDistance(){
    this.settings.setAlarmDistance(this.alarmDistance);
  }
  
  
}
