import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-agent-performance',
  templateUrl: './agent-performance.component.html',
  styleUrls: ['./agent-performance.component.scss']
})
export class AgentPerformanceComponent implements OnInit {

  callData:any = []
  counts:any = {}
  x:any = []
  isLoading:boolean = true
  callCount:number = 0
  constructor(private firestore: AngularFirestore,) { }
  ngOnInit(): void {
    this.firestore
    .collection('call_data')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        this.callData.push(doc.data());
        this.isLoading = false
      });
      this.callCount = this.callData.length
     let y:any = []


    for(let i = 0; i < this.callData.length; i++){
      this.x.push(this.callData[i].user_email)
    }

  //  const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]

this.x.forEach((c:any) => {
  this.counts[c] = (this.counts[c] || 0) + 1;
});
    console.log(this.counts)
  

    });

  }
  }


