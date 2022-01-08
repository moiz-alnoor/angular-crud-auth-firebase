import { Component, OnInit } from '@angular/core';
import { faUser,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
  AngularFireAuth,
} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  faUser = faUser
  faSignOutAlt = faSignOutAlt
  email:any = localStorage.getItem('email')
  roles:any = []
  role_id:number = 0

 

  constructor(private auth:AngularFireAuth, private firestore:AngularFirestore) { 
  
  }

  ngOnInit(): void {
    this.firestore.collection('role', ref => ref.where("email", "==", this.email)).get()
    .subscribe((res) => {

      res.docs.forEach((doc) => {
        this.roles.push(doc.data());
      });
      
      this.role_id = this.roles[0].role_id
    
    });
  
   

  }

  logOut(){
  
    this.auth.signOut().then((res) => {
      console.log('Signed Out');
      localStorage.clear();
      window.location.href = "/log-in"
    })
  }

}
