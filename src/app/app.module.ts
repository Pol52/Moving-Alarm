import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AndroidPermissions,
    AudioManagement,
    BackgroundGeolocation,
    File,
    Geolocation,
    HTTP,
    LocationAccuracy,
    NativeAudio,
    NativeRingtones,
    NativeStorage,
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
