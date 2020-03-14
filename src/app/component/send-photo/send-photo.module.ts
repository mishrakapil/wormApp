import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { SendPhotoPageRoutingModule } from './send-photo-routing.module';

import { SendPhotoPage } from './send-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // SendPhotoPageRoutingModule
  ],
  declarations: [SendPhotoPage]
})
export class SendPhotoPageModule {}
