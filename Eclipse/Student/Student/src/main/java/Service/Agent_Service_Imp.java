package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Agent_DAO;
import Model.Agent;

@Service
@Transactional
public class Agent_Service_Imp implements Agent_Service {
 
	@Autowired
	private Agent_DAO agentdao;
	
	@Override
	public boolean saveAgent(Agent agent) {
		return agentdao.saveAgent(agent);
	}

	@Override
	public List<Agent> getAgents() {
		return agentdao.getAgents();
	}

	@Override
	public boolean deleteAgent(Agent agent) {
		return agentdao.deleteAgent(agent);
	}

	@Override
	public List<Agent> getAgentByID(Agent agent) {
		return agentdao.getAgentByID(agent);
	}

	@Override
	public boolean updateAgent(Agent agent) {
		return agentdao.updateAgent(agent);
	}

}
