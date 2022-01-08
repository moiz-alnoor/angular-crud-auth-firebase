import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CallQueueService} from './../call-queue.service'


@Component({
  selector: 'app-call-queue',
  templateUrl: './call-queue.component.html',
  styleUrls: ['./call-queue.component.scss']
})
export class CallQueueComponent implements OnInit {

 
  maximum_waiting_time= new FormGroup({
    maximum_waiting_time: new FormControl(''),
  });

  routing_strategie= new FormGroup({
    routing_strategie: new FormControl(''),
  });

  size = new FormGroup({
    size: new FormControl(''),
  });

  constructor(private CallQueueService:CallQueueService) {}

  ngOnInit(): void {
  }

      

  maximumWaitingTime() {
    this.CallQueueService.maximumWaitingTime(this.maximum_waiting_time.value)
    this.maximum_waiting_time.reset();
  }
  routingStrategie() {
    this.CallQueueService.routingStrategie(this.routing_strategie.value)
    this.routing_strategie.reset();
  }
  queueSize() {
    this.CallQueueService.queueSize(this.size.value)
    this.size.reset();
  }
}
