package Service;

import java.util.List;

import Model.Agent;

public interface Agent_Service {

	
	public boolean saveAgent(Agent agent);
	public List<Agent> getAgents();
	public boolean deleteAgent(Agent agent);
	public boolean updateAgent(Agent agent);

	public List<Agent> getAgentByID(Agent agent);
}
