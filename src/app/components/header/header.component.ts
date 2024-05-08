import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {LoginComponent} from "../../pages/login/login.component";
import {NgIf} from "@angular/common";
import {ApiServiceService} from "../../Services/api-service.service";
import {FireBaseService} from "../../Services/fire-base.service";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private loginModal!:boolean;
  @ViewChild('loginContainer') loginContainerRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService, private authService: FireBaseService) {
  }

  getLoginActivator(){
    return this.activatorService.getLoginActivator();
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }

  getSingUpActivator(){
    return this.activatorService.getSignUpActivator();
  }

  SingUpActivate(){
    this.activatorService.setSigUpActivator();
  }

  getUserDialogAccountActivator(){
    return this.activatorService.getUserDialogAccountActivator();
  }
  loginUserDialogAccountActivator(){
    this.activatorService.setUserDialogAccountActivator();
  }

  getModaLogged(){
    this.activatorService.$modalLogged.subscribe((valor) => {this.loginModal = valor});
    return this.loginModal;
  }

}
