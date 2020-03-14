import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'booking',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../modules/booking/booking.module').then(m => m.bookingPageModule)
      //     }
      //   ]
      // },
      {
        path: 'track-time',
        loadChildren: () => import('../component/track-time/track-time.module').then( m => m.TrackTimePageModule)
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/chat/chat.module').then(m => m.chatPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modules/account/account.module').then(m => m.accountPageModule)
          }
        ]
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
