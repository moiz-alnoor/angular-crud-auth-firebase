import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AgentScheduleService} from "./../agent-schedule.service"
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-agent-schedule',
  templateUrl: './agent-schedule.component.html',
  styleUrls: ['./agent-schedule.component.scss']
})
export class AgentScheduleComponent implements OnInit {

  constructor(private AgentScheduleService:AgentScheduleService, private firestore:AngularFirestore) { }
agents:any = []
  agent_schedule = new FormGroup({
    user_email: new FormControl(''),
    work_hour: new FormControl(''),
    shift: new FormControl(''),
    rest: new FormControl(''),
  });


  ngOnInit(): void {
    this.firestore
    .collection('role')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        console.log(doc.data());
        this.agents.push(doc.data());
      });
     // console.log(this.brands)
    });
  }

  agentSchedule(){
    this.AgentScheduleService.addAgentSchedule(this.agent_schedule.value)
    this.agent_schedule.reset();
  }
}
