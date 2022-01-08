import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-view-agent-schedule',
  templateUrl: './view-agent-schedule.component.html',
  styleUrls: ['./view-agent-schedule.component.scss']
})
export class ViewAgentScheduleComponent implements OnInit {

  schedules:any = []
  agents:any = []
  isLoading:boolean = true
  constructor(private firestore: AngularFirestore,) { }

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


    this.firestore
    .collection('agent_schedule')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        this.schedules.push(doc.data());
        this.isLoading = false
      });
     console.log(this.schedules)
    });
  }

}
