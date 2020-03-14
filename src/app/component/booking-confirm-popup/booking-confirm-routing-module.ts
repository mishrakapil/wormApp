import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingConfirmPopupPage } from './booking-confirm-popup.page';

const routes: Routes = [
  {
    path: '',
    component: BookingConfirmPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingConfirmPopupPageRoutingModule {}
