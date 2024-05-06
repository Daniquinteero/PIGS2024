import { Component } from '@angular/core';
import {ApiServiceService} from "./Services/api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputData: string;
  pythonResult: any;
  response:any;
  constructor(private pythonService: ApiServiceService) { //private pythonService: ApiServiceService
    this.inputData = "iphone";
  }

  ngOnInit() {
    this.sendToPython();
  }
  sendToPython() {
    const data = { data: this.inputData };
    this.pythonService.sendDataToPython(data).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Aquí puedes manejar los datos de la respuesta
        this.response = response;
        console.log('Prueba de datos:', this.response['Datos de tendencia a lo largo del tiempo']['tendencia'].fecha)
      },
      error => {
        console.error('Error al procesar la solicitud:', error);
      }
    );
  }

}
