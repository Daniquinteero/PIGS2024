import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {routes} from "../../app.routes";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {LoginComponent} from "../../pages/login/login.component";
import {NgIf} from "@angular/common";

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

  constructor(private activatorService: ActivatorComponentsService) {}


  getLoginActivator(){
    return this.activatorService.getLoginActivator();
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }
}
