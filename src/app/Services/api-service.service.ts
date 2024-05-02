import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getJson } from 'serpapi';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }
  getData(){
    this.http.get("https://serpapi.com/search.json?engine=google_trends&q=coffee,milk,bread,pasta,steak&data_type=TIMESERIES").subscribe(data =>{
      console.log(data);
    });
    getJson({
      api_key: "d3cb8f1ea129743fc0d434a8bd06de46a7573ffd17d180ad93fd40e19c8dd29b",
      engine: "google",
      q: "Coffee",
      location: "Austin, Texas, United States",
      google_domain: "google.com",
      gl: "us",
      hl: "en"
    }, (json: any) => {
      console.log(json);
    });
  }
  getDataFromApi() {
    getJson({
      api_key: "d3cb8f1ea129743fc0d434a8bd06de46a7573ffd17d180ad93fd40e19c8dd29b",
      engine: "google",
      q: "Coffee",
      location: "Austin, Texas, United States",
      google_domain: "google.com",
      gl: "us",
      hl: "en"
    }, (json: any) => {
      console.log(json);
    });
  }

}
