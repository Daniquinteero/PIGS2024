import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {routes} from "../../app.routes";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {LoginComponent} from "../../pages/login/login.component";
import {NgIf} from "@angular/common";
import {ApiServiceService} from "../../Services/api-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LoginComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('loginContainer') loginContainerRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService) {} //, private googleTrendsService: ApiServiceService


  getLoginActivator(){
    return this.activatorService.getLoginActivator();
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }


  /*ngOnInit() {
    this.getTrendsData();
  }*/

  /*getTrendsData() {
    const searchTerm = 'ihpone15'; // Reemplaza 'término de búsqueda' con tu término de búsqueda
    this.googleTrendsService.getGoogleTrendsData(searchTerm).subscribe(
      (data) => {
        console.log(data);
        // Aquí puedes manejar los datos de respuesta
      },
      (error) => {
        console.error('Error al obtener datos de Google Trends:', error);
      }
    );
  }*/

}
