import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectProviderPageRoutingModule } from './select-provider-routing.module';

import { SelectProviderPage } from './select-provider.page';
import { BackgroundGeolocation } from "@ionic-native/background-geolocation/ngx";
import { HTTP } from "@ionic-native/http/ngx";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectProviderPageRoutingModule
  ],
  // providers:[],
  declarations: [SelectProviderPage]
})
export class SelectProviderPageModule {}
