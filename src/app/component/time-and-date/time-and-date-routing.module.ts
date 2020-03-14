import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeAndDatePage } from './time-and-date.page';

const routes: Routes = [
  {
    path: '',
    component: TimeAndDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeAndDatePageRoutingModule {}
