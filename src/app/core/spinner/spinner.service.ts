import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingController } from '@ionic/angular';

export interface SpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<SpinnerState>();
  
  isLoading = false;

  spinnerState = this.spinnerSubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: SpinnerService,
    public loadingController: LoadingController) {
    if (prior) { return prior; }
    console.log("created spinner service");
  }

  show() {
    // this.spinnerSubject.next(<SpinnerState>{ show: true });

    this.present();
  }

  hide() {
    // this.spinnerSubject.next(<SpinnerState>{ show: false });

    this.dismiss();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // spinner: 'bubbles',
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          this.isLoading = false;
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    if(this.isLoading) {
      this.isLoading = false;
      try {
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
      } catch (err) {
        console.error(err);
      } finally {
        console.log('dismissed completed');
      }
    }
  }
}