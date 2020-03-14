import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutServicePage } from './about-service.page';
import { RatingPage } from '../rating/rating.page';

const routes: Routes = [
  {
    path: '',
    component: AboutServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class AboutServicePageRoutingModule {}
