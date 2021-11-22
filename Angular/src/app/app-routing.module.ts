import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ViewsiteComponent } from './viewsite/viewsite.component';
import { AgentListComponent } from './agent-list/agent-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'view-student', component: StudentListComponent },
  { path: 'view-student/add-student', component: AddStudentComponent },
  { path: 'view-agent/add-agent', component: AddAgentComponent },
  { path: 'viewsite', component: ViewsiteComponent },
  
  { path: 'view-agent', component: AgentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
