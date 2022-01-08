import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {CallLogComponent} from "./call-log/call-log.component"
import {UserAccountComponent} from "./user-account/user-account.component"
import {CallQueueComponent} from "./call-queue/call-queue.component"
import {AgentScheduleComponent} from "./agent-schedule/agent-schedule.component"
import { TargetCompaignComponent } from './target-compaign/target-compaign.component'
import { AsignAgentToCompaginComponent } from './asign-agent-to-compagin/asign-agent-to-compagin.component'
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth/auth.guard';
import { CallDataComponent } from './call-data/call-data.component'
import { AgentPerformanceComponent } from './agent-performance/agent-performance.component'
import { ViewAgentScheduleComponent } from './view-agent-schedule/view-agent-schedule.component'
import { ViewTargetComponent } from './view-target/view-target.component'

const routes: Routes = [

  {path: '', component:MainComponent,canActivate: [AuthGuard],
  children: [
    {path: 'call-log', component: CallLogComponent,canActivate: [AuthGuard] },
    {path: 'user-account', component: UserAccountComponent,canActivate: [AuthGuard] },
    {path: 'call-queue', component:CallQueueComponent,  canActivate: [AuthGuard] },
    {path: 'agent-schedule', component:AgentScheduleComponent,canActivate: [AuthGuard] },
    {path: 'target-compagin', component:TargetCompaignComponent,canActivate: [AuthGuard] },
    {path: 'asign-agint', component:AsignAgentToCompaginComponent,canActivate: [AuthGuard] },
    {path: 'call-data', component:CallDataComponent,canActivate: [AuthGuard] },
    {path: 'agent-performance', component:AgentPerformanceComponent,canActivate: [AuthGuard] },
    {path: 'view-agent-schedule', component:ViewAgentScheduleComponent,canActivate: [AuthGuard] },
    {path: 'view-target', component:ViewTargetComponent,canActivate: [AuthGuard] },
    {path: '**', redirectTo:'log-in'},
  ]
 },
 {path: 'log-in', component:LoginComponent},
 { path: '**', redirectTo: 'log-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
