import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable,Subject } from "rxjs";
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  constructor(private agentservice:AgentService) { }

  agentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  agents: Observable<Agent[]>;
  agent : Agent=new Agent();
  deleteMessage=false;
  agentlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.agentservice.getAgentList().subscribe(data =>{
    this.agents =data;
    this.dtTrigger.next();
    })
  }
  
  deleteAgent(id: number) {
    this.agentservice.deleteAgent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.agentservice.getAgentList().subscribe(data =>{
            this.agents =data
            })
        },
        error => console.log(error));
  }


  updateAgent(id: number){
    this.agentservice.getAgent(id)
      .subscribe(
        data => {
          this.agentlist=data           
        },
        error => console.log(error));
  }

    agentupdateform=new FormGroup({
    agent_id:new FormControl(),
    agent_name:new FormControl(),
    agent_balance:new FormControl(),
    agent_branch:new FormControl()
  });

  updateStu(updstu){
   this.agent=new Agent(); 
   this.agent.agent_id=     this.AgentId.value;
   this.agent.agent_name=   this.AgentName.value;
   this.agent.agent_balance=this.AgentBalance.value;
   this.agent.agent_branch= this.AgentBranch.value;
   console.log(this.AgentBranch.value);
   

   this.agentservice.updateAgent(this.agent.agent_id,this.agent).subscribe(
    data => {     
      this.isupdated=true;
      this.agentservice.getAgentList().subscribe(data =>{
        this.agents =data
        })
    },
    error => console.log(error));
  }

  get AgentName(){
    return this.agentupdateform.get('agent_name');
  }

  get AgentBalance(){
    return this.agentupdateform.get('agent_balance');
  }

  get AgentBranch(){
    return this.agentupdateform.get('agent_branch');
  }

  get AgentId(){
    return this.agentupdateform.get('agent_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
