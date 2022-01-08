import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TargetCompaginService } from './../target-compagin.service';
import {CallDataService} from './../call-data.service'
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-call-data',
  templateUrl: './call-data.component.html',
  styleUrls: ['./call-data.component.scss'],
})
export class CallDataComponent implements OnInit {
  brands:any = []
  combagines:any = []
  constructor(
    private firestore: AngularFirestore,
    private TargetCompaginService: TargetCompaginService,
    private CallDataService:CallDataService
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('brand')
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          console.log(doc.data());
          this.brands.push(doc.data());
        });
       // console.log(this.brands)
      });

      this.firestore
      .collection('compagine')
      .get()
      .subscribe((res) => {
        res.docs.forEach((doc) => {
          this.combagines.push(doc.data());
        });
        console.log(this.combagines)
      });

  }


  callDataForm = new FormGroup({
    brand: new FormControl(''),
    combagine: new FormControl(''),
    c_name: new FormControl(''),
    summary: new FormControl(''),
  });

  callData() {

    this.CallDataService.addCallData(this.callDataForm.value)
    this.callDataForm.reset();
  
  }
}
