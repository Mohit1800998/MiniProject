import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import {DataTablesModule} from 'angular-datatables';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { ViewsiteComponent } from './viewsite/viewsite.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PartnerlistComponent,
    StudentListComponent,
    AddStudentComponent,
    AddAgentComponent,
    AgentListComponent,
    ViewsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
