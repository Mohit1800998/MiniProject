package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Agent;
import Service.Agent_Service;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/agent")
public class AgentController {
	
	@Autowired
	private Agent_Service agentservice;
	
	@PostMapping("save-agent")
	public boolean saveAgent(@RequestBody Agent agent) {
		 return agentservice.saveAgent(agent);
		
	}
	
	@GetMapping("agents-list")
	public List<Agent> allagents() {
		 return agentservice.getAgents();
	}
	
	
	@DeleteMapping("delete-agent/{agent_id}")
	public boolean deleteAgent(@PathVariable("agent_id") int agent_id,Agent agent) {
		agent.setAgent_id(agent_id);
		return agentservice.deleteAgent(agent);
	}

	@GetMapping("agent/{agent_id}")
	public List<Agent> allagentByID(@PathVariable("agent_id") int agent_id,Agent agent) {
		 agent.setAgent_id(agent_id);
		 return agentservice.getAgentByID(agent);
		
	}
	
	@PostMapping("update-agent/{agent_id}")
	public boolean updateAgent(@RequestBody Agent agent,@PathVariable("agent_id") int agent_id) {
		agent.setAgent_id(agent_id);
		return agentservice.updateAgent(agent);
	}
}
