import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  searchProducts(term: string): Observable<any> {
    const url = `${this.baseUrl}/buscar-productos?term=${term}`;
    return this.http.get(url);
  }
}