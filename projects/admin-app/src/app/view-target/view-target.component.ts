import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.component.html',
  styleUrls: ['./view-target.component.scss']
})
export class ViewTargetComponent implements OnInit {
brands:any = []
campaigns:any = []
targets:any = []
isLoading:boolean = false
  constructor(    private firestore: AngularFirestore,) { }

  ngOnInit(): void {
    this.isLoading = true
    this.firestore
    .collection('brand')
    .get()
    .subscribe((res) => {
      res.docs.forEach((doc) => {
        console.log(doc.data());
        this.brands.push(doc.data());
        this.isLoading = false
      });

    });
  
  this.firestore
  .collection('target')
  .get()
  .subscribe((res) => {
    res.docs.forEach((doc) => {
      console.log(doc.data());
      this.targets.push(doc.data());
      this.isLoading = false
    });
  });

this.firestore
.collection('compagine')
.get()
.subscribe((res) => {
  res.docs.forEach((doc) => {
    console.log(doc.data());
    this.campaigns.push(doc.data());
    this.isLoading = false
  });

});
}
  

}
