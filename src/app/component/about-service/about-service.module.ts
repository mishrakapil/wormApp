import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutServicePageRoutingModule } from './about-service-routing.module';

import { AboutServicePage } from './about-service.page';
import { RatingPage } from '../rating/rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutServicePageRoutingModule
  ],
  declarations: [AboutServicePage, RatingPage],
  entryComponents:[RatingPage]
})
export class AboutServicePageModule {}
