import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  sendDataToPython(data: any) {
    return this.http.post<any>('http://localhost:5000/process_data', data);
  }
}
