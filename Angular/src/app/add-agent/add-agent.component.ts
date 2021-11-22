import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Agent } from '../agent';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {


  constructor(private agentservice:AgentService) { }

  agent : Agent=new Agent();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  agentsaveform=new FormGroup({
    agent_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    agent_balance:new FormControl('',[Validators.required]),
    agent_branch:new FormControl()
  });

  saveAgent(saveAgent){
    this.agent=new Agent();   
    this.agent.agent_name=   this.AgentName.value;
    this.agent.agent_balance=this.AgentBalance.value;
    this.agent.agent_branch= this.AgentBranch.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.agentservice.createAgent(this.agent)
      .subscribe(data => console.log(data), error => console.log(error));
    this.agent = new Agent();
  }

  get AgentName(){
    return this.agentsaveform.get('agent_name');
  }

  get AgentBalance(){
    return this.agentsaveform.get('agent_balance');
  }

  get AgentBranch(){
    return this.agentsaveform.get('agent_branch');
  }

  addAgentForm(){
    this.submitted=false;
    this.agentsaveform.reset();
  }
}
