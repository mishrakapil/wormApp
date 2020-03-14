import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderConfirmationPageRoutingModule } from './order-confirmation-routing.module';
import { OrderConfirmationPage } from './order-confirmation.page';
import { BookingConfirmPopupPage } from '../booking-confirm-popup/booking-confirm-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderConfirmationPageRoutingModule
  ],
  declarations: [OrderConfirmationPage,BookingConfirmPopupPage],
  entryComponents: [BookingConfirmPopupPage]
})
export class OrderConfirmationPageModule {}
