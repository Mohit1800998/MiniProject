package Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="agent")
public class Agent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int agent_id;
	private String agent_name;
	private String agent_balance;
	private String agent_branch;
	public int getAgent_id() {
		return agent_id;
	}
	public void setAgent_id(int agent_id) {
		this.agent_id = agent_id;
	}
	public String getAgent_name() {
		return agent_name;
	}
	public void setAgent_name(String agent_name) {
		this.agent_name = agent_name;
	}
	public String getAgent_balance() {
		return agent_balance;
	}
	public void setAgent_balance(String agent_balance) {
		this.agent_balance = agent_balance;
	}
	public String getAgent_branch() {
		return agent_branch;
	}
	public void setAgent_branch(String agent_branch) {
		this.agent_branch = agent_branch;
	}
	
	
}
