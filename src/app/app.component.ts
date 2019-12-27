import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GeocoderResult } from '@ionic-native/google-maps/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { RingtoneService } from './service/ringtone.service';
import { SettingsService } from './service/settings.service';
import { PositionService } from './service/position.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: NativeStorage,
    private ringtone:RingtoneService,
    private settings: SettingsService,
    private position: PositionService,
    private orientation: ScreenOrientation
    ) {
      this.initializeApp();
    }
     
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString("#444549");
        this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT_PRIMARY);
        this.loadApp();               
      });
    }
    
    loadApp(){      
      this.loadSavedDestinations();
      this.ringtone.loadRingtones();
      this.settings.loadSettings();
      this.splashScreen.hide();  
      this.position.checkGPSPermission();
    }
    
    loadSavedDestinations(){
      let savedDestinations: GeocoderResult[] = [];
      this.storage.getItem('savedDestinations').then(() => {
      }, err => {
        this.storage.setItem('savedDestinations', savedDestinations);
      })
    }
  }
