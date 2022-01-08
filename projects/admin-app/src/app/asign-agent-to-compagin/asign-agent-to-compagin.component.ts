import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TargetCompaginService} from "./../target-compagin.service"
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-asign-agent-to-compagin',
  templateUrl: './asign-agent-to-compagin.component.html',
  styleUrls: ['./asign-agent-to-compagin.component.scss']
})
export class AsignAgentToCompaginComponent implements OnInit {
  agents:any = []
  constructor(private TargetCompaginService:TargetCompaginService, private firestore:AngularFirestore) { }

  asignAgentForm = new FormGroup({
    user_email: new FormControl(''),
    compagine: new FormControl(''),
  });


  ngOnInit(): void {
    this.firestore
    .collection('role')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        this.agents.push(doc.data());
      });
    });
  }
  

  asignAgent(){
    this.TargetCompaginService.asignAgent(this.asignAgentForm.value)
    this.asignAgentForm.reset();
  }
}
