import { Component, OnInit } from '@angular/core';
import {TargetCompaginService} from "./../target-compagin.service"
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-target-compaign',
  templateUrl: './target-compaign.component.html',
  styleUrls: ['./target-compaign.component.scss']
})
export class TargetCompaignComponent implements OnInit {

  constructor(private TargetCompaginService:TargetCompaginService) { }

  ngOnInit(): void {
  }

  targetForm = new FormGroup({
    target: new FormControl(''),
  });

  compagineForm = new FormGroup({
    combagine_name: new FormControl(''),
  });

  brandForm = new FormGroup({
    name: new FormControl(''),
  });

  addCompagin(){
    this.TargetCompaginService.addCompagin(this.compagineForm.value)
    this.compagineForm.reset();
  }
  addBrand(){
    this.TargetCompaginService.addBrand(this.brandForm.value)
    this.brandForm.reset();
  }

  updateTarget(){
    this.TargetCompaginService.updateTarget(this.targetForm.value)
    this.targetForm.reset();
  }
}
