import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeAndDatePageRoutingModule } from './time-and-date-routing.module';

import { TimeAndDatePage } from './time-and-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeAndDatePageRoutingModule
  ],
  declarations: [TimeAndDatePage]
})
export class TimeAndDatePageModule {}
