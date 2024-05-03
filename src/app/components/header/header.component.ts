import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class HeaderComponent{

  @ViewChild('loginContainer') loginContainerRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService, private googleTrendsService: ApiServiceService) {} //, private googleTrendsService: ApiServiceService


  getLoginActivator(){
    return this.activatorService.getLoginActivator();
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }

  /*ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.googleTrendsService.getUsers();
  }*/

}
