import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../rating/rating.page';

@Component({
  selector: 'app-about-service',
  templateUrl: './about-service.page.html',
  styleUrls: ['./about-service.page.scss'],
})
export class AboutServicePage implements OnInit {

  constructor(private modalController: ModalController) { }
  async ratingPage() {
    const modal = await this.modalController.create({
      component: RatingPage,
      cssClass: 'rating-modal',
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
