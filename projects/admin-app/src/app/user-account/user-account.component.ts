import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import {
  AngularFireAuth,
} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  addToRole:any
  isLoading:boolean = false
  constructor(
    private auth:AngularFireAuth,
    private firestore: AngularFirestore,
    private _toastService: ToastService
  ) {
    initializeApp(environment.firebaseConfig);
  }
  
  
  signUpForm = new FormGroup({
 
    password: new FormControl(''),
    email: new FormControl(''),
    role_id: new FormControl(''),
  });


  ngOnInit(): void {
  }
  signUp(){
  this.isLoading = true
    this.auth.createUserWithEmailAndPassword(this.signUpForm.value.email,this.signUpForm.value.password).then((res =>{
      console.log(res)
      this.addToRole()
    })).catch((error) =>{
      alert(error)
      this.isLoading = false
    })

    this.addToRole = () => {
      this.firestore
      .collection('role')
      .add({
        email: this.signUpForm.value.email,
        role_id: this.signUpForm.value.role_id,
      })
      .then((res) => {
        this._toastService.success(
          'new user  has added '
        );
        this.signUpForm.reset()
        this.isLoading = false
      })
      .catch((error) => {
        alert(error)
        console.log(error);
        this.isLoading = false
      });
    }
    }
   
}
