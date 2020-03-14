import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingConfirmPopupPage } from '../booking-confirm-popup/booking-confirm-popup.page';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {

  constructor(private modalController: ModalController) { }
  async BookingConfirmPopupPage() {
    const modal = await this.modalController.create({
      component: BookingConfirmPopupPage,
      cssClass: 'confirm-modal',
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
