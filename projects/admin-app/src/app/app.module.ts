import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserAccountComponent } from './user-account/user-account.component';
import { CallLogComponent } from './call-log/call-log.component';
import { CallQueueComponent } from './call-queue/call-queue.component';
import { AgentScheduleComponent } from './agent-schedule/agent-schedule.component';
import { TargetCompaignComponent } from './target-compaign/target-compaign.component';
import { AgentPerformanceComponent } from './agent-performance/agent-performance.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { AsignAgentToCompaginComponent } from './asign-agent-to-compagin/asign-agent-to-compagin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component'; 

import { SpinnersAngularModule } from 'spinners-angular';
import { CallDataComponent } from './call-data/call-data.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import { ViewAgentScheduleComponent } from './view-agent-schedule/view-agent-schedule.component';
import { ViewTargetComponent } from './view-target/view-target.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    CallLogComponent,
    CallQueueComponent,
    AgentScheduleComponent,
    TargetCompaignComponent,
    AgentPerformanceComponent,
    AsignAgentToCompaginComponent,
    LoginComponent,
    MainComponent,
    CallDataComponent,
    ViewAgentScheduleComponent,
    ViewTargetComponent
  ],
  imports: [
    NgChartsModule,
    NgxChartsModule,
    SpinnersAngularModule,
    AngularToastifyModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore

 
  ],
  
  providers:  [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
