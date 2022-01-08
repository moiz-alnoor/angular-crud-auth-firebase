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
export class AgentScheduleService {

  constructor(
    private firestore: AngularFirestore,
    private _toastService: ToastService
  ) {
    initializeApp(environment.firebaseConfig);
  }

  addAgentSchedule(agentData:any){
    this.firestore
    .collection('agent_schedule')
    .add({
      field: agentData,
    })
    .then((res) => {
      this._toastService.success(
        'agent has scheduled sucssuefuly'
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
