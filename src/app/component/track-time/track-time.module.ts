import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackTimePage } from './track-time.page';
import { SendPhotoPage } from '../send-photo/send-photo.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { SendPhotoPageModule } from '../send-photo/send-photo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TrackTimePage }])
  ],
  declarations: [TrackTimePage, SendPhotoPage],
  entryComponents:[SendPhotoPage]
})
export class TrackTimePageModule {}
