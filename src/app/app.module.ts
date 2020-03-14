import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, AppRoutingModule,  IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
