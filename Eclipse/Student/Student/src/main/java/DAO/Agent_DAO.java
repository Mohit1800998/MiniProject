package DAO;
import java.util.List;

import Model.Agent;

public interface Agent_DAO {
	
	public boolean saveAgent(Agent agent);
	public List<Agent> getAgents();
	public boolean deleteAgent(Agent agent);
	public List<Agent> getAgentByID(Agent agent);
	public boolean updateAgent(Agent agent);
}
	
