import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiKey = 'd3cb8f1ea129743fc0d434a8bd06de46a7573ffd17d180ad93fd40e19c8dd29b'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API
  constructor(private http: HttpClient) { }

  getGoogleTrendsData(searchTerm: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('engine', 'google')
      .set('google_domain', 'google.com')
      .set('q', searchTerm)
      .set('tbm', 'trends');

    return this.http.get('https://serpapi.com/search', { params });
  }

}
