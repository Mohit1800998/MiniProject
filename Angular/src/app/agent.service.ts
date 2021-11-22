import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private baseUrl = 'http://localhost:8080/agent/';

  constructor(private http:HttpClient) { }

  getAgentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'agents-list');
  }

  createAgent(agent: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-agent', agent);
  }

  deleteAgent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-agent/${id}`, { responseType: 'text' });
  }

  getAgent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/agent/${id}`);
  }

  updateAgent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-agent/${id}`, value);
  }
  
}
