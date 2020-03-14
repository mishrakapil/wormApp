import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingConfirmPopupPageRoutingModule } from './booking-confirm-routing-module';
import { BookingConfirmPopupPage } from './booking-confirm-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingConfirmPopupPageRoutingModule
  ],
  declarations: [BookingConfirmPopupPage]
})

export class BookingConfirmPopupModule { }
