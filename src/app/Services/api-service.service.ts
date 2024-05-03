import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {getHtmlBySearchId, getJson, getJsonBySearchId} from 'serpapi';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { //private http: HttpClient
    let node = document.createElement('script');
    node.src = './assets/Script/test.js';
    node.type = 'module';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }



}
