import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  AngularFireAuth,
} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//declare var require: any;

export class LoginComponent implements OnInit {
  //private authImg = require("./assets/auth.png")
 isLog: boolean = false
 isLoading: boolean = false
  constructor(private auth:AngularFireAuth) { }
  loginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit(): void {
  }

logIn(){
  this.isLoading = true
this.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password).then(res => {
  console.log(res)
  this.isLog = true 
  localStorage.setItem('isLog',JSON.stringify(this.isLog))
  localStorage.setItem('email',this.loginForm.value.email)
  this.isLoading = false
  window.location.href = "/agent-performance"
}).catch((error)=> {
  alert(error)
  this.isLog = false
  this.isLoading = false
  localStorage.setItem('isLog',JSON.stringify(this.isLog))
})
}
}
