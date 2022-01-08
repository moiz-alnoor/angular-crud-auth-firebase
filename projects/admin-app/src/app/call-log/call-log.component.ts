import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-call-log',
  templateUrl: './call-log.component.html',
  styleUrls: ['./call-log.component.scss']
})
export class CallLogComponent implements OnInit {
  callData:any = []
  isLoading:boolean = true
  constructor(private firestore: AngularFirestore,) { }

  ngOnInit(): void {

    this.firestore
    .collection('call_data')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        console.log(doc.data());
        this.callData.push(doc.data());
        this.isLoading = false
      });
     console.log(this.callData)
    });
  }

}
