import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  addPortfolio(name: string, userId: string) {
    const url = 'http://localhost:5000/add-portfolio';
    const data = { name: name, user_id: userId };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, data, { headers: headers });
  }

  getPortfolios(userId: string) {
    const url = `http://localhost:5000/api/usuario/${userId}/portfolios`;
    return this.http.get(url);
  }
}
