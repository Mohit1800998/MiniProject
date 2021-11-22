package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Model.Agent;

@Repository
public class Agent_DAO_Imp  implements Agent_DAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveAgent(Agent agent) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(agent);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Agent> getAgents() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Agent> query=currentSession.createQuery("from Agent", Agent.class);
		List<Agent> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteAgent(Agent agent) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(agent);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Agent> getAgentByID(Agent agent) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Agent> query=currentSession.createQuery("from Agent where agent_id=:agent_id", Agent.class);
		query.setParameter("agent_id", agent.getAgent_id());
		List<Agent> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateAgent(Agent agent) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(agent);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
