import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@Injectable({
  providedIn: 'root'
})
export class CallDataService {
  email:any
  constructor(
    private firestore: AngularFirestore,
    private _toastService: ToastService
  ) {
    initializeApp(environment.firebaseConfig);
  }

  addCallData(callData:any){
    this.email = localStorage.getItem("email")

    this.firestore
    .collection('call_data')
    .add({
      c_name: callData.c_name,
      brand: callData.brand,
      combagine: callData.combagine,
      summary: callData.summary,
      user_email: JSON.parse(this.email)
    })
    .then((res) => {
      this._toastService.success(
        'call data has added '
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
