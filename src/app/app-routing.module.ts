import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'subcategory',
    loadChildren: () => import('./component/subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
  },
  {
    path: 'time-and-date',
    loadChildren: () => import('./component/time-and-date/time-and-date.module').then( m => m.TimeAndDatePageModule)
  },
  {
    path: 'select-provider',
    loadChildren: () => import('./component/select-provider/select-provider.module').then( m => m.SelectProviderPageModule)
  },
  {
    path: 'order-confirmation',
    loadChildren: () => import('./component/order-confirmation/order-confirmation.module').then( m => m.OrderConfirmationPageModule)
  },
  {
    path: 'booking-confirmation',
    loadChildren: () => import('./component/booking-confirm-popup/booking-confirm-popup.module').then( m => m.BookingConfirmPopupModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./component/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'about-service',
    loadChildren: () => import('./component/about-service/about-service.module').then( m => m.AboutServicePageModule)
  },
  // {
  //   path: 'rating',
  //   loadChildren: () => import('./component/rating/rating.module').then( m => m.RatingPageModule)
  // },
  
  // {
  //   path: 'send-photo',
  //   loadChildren: () => import('./component/send-photo/send-photo.module').then( m => m.SendPhotoPageModule)
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
