import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-booking-confirm-popup',
  templateUrl: './booking-confirm-popup.page.html',
  styleUrls: ['./booking-confirm-popup.page.scss'],
})
export class BookingConfirmPopupPage implements OnInit {

  constructor(private modalController: ModalController) { }
  
  ngOnInit() {
  }

}
