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
export class TargetCompaginService {

  constructor(
    private firestore: AngularFirestore,
    private _toastService: ToastService
  ) {
    initializeApp(environment.firebaseConfig);
  }
  
  addBrand(val:any){
    this.firestore
    .collection('brand')
    .add({
      name: val,
    })
    .then((res) => {
      this._toastService.success(
        'brand has scheduled '
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }
  getBrand(){

    
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/brand').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  addCompagin(val:any){
    this.firestore
    .collection('compagine')
    .add({
      combagine_name: val,
    })
    .then((res) => {
      this._toastService.success(
        'compagine has scheduled '
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }

  asignAgent(val:any){
    this.firestore
    .collection('asign_agent')
    .add({
      field: val,
    })
    .then((res) => {
      this._toastService.success(
        'agent has asign to compagin'
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  updateTarget(target:number){
   // value.nameToSearch = target
  this.firestore.collection("target").doc("Ch44ARDk62L0pJO4dWUJ").set(target).then((res) => {
      this._toastService.success(
        'call target number update'
      );
    }).catch((error) => {
      console.log(error);
    });
  }
}
