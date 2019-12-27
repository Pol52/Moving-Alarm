import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { PositionService } from './position.service';
import { RingtoneService } from './ringtone.service';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  
  private started: boolean = false;
  private proximitySubscription: Subscription;
  private ringing: boolean = false;
  
  constructor(private position: PositionService, private ringtone: RingtoneService) {}
  
  start(){
    this.started = true;
    this.proximitySubscription = this.position.checkNearDestination().subscribe(nearDestination => {
      if (nearDestination) {
        /* setTimeout(()=> {
          this.ring();
        },3000) */
        this.ring();
      }
    });
  } 

  ring(){
    this.ringtone.playRingtoneForAlarm();
    this.ringing = true;
  }
  
  isActive(){
    if(this.started){
      return true;
    }
    return false;
  }
  
  stop(){
    this.started = false;
    this.ringing = false;
    this.position.stopPositionUpdate();
    this.ringtone.stopRingtone();
  } 
  
  ngOnDestroy() {    
    this.proximitySubscription.unsubscribe();
  }

  isRinging(){
    return this.ringing;
  }
  
}




