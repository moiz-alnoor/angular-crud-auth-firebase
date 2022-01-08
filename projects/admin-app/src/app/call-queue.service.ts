import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@Injectable({
  providedIn: 'root',
})
export class CallQueueService {
  constructor(
    private firestore: AngularFirestore,
    private _toastService: ToastService
  ) {
    initializeApp(environment.firebaseConfig);
    // this.db = AngularFirestore();
  }

  maximumWaitingTime(value: string) {
    this.firestore
      .collection('maximum_waiting_time').doc("IGRVKRpPXnW0CiwgkdDq").set(value)
      .then((res) => {
        this._toastService.success(
          'maximum waiting time strategie update sucssuefuly'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  queueSize(value: string) {
    this.firestore
      .collection('queue_size')
      .doc("RUu2vlX136eg6EwcZLS7").set(value)
      .then((res) => {
        this._toastService.success('queue size  update sucssuefuly');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  routingStrategie(value: string) {
    this.firestore
      .collection('routing_strategie')
      .doc("3BPwCeUobGei2x6YDaYc").set(value)
      .then((res) => {
        this._toastService.success('routing strategie update sucssuefuly');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
