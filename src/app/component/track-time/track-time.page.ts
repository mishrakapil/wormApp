import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPhotoPage } from '../send-photo/send-photo.page';

@Component({
  selector: 'app-track-time',
  templateUrl: './track-time.page.html',
  styleUrls: ['./track-time.page.scss'],
})
export class TrackTimePage implements OnInit {

  constructor(private modalController: ModalController) { }
  async SendPhotoPage() {
    const modal = await this.modalController.create({
      component: SendPhotoPage,
      cssClass: 'send-photo-modal',
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
