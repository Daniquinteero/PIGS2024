import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {LoginComponent} from "../../pages/login/login.component";
import {NgIf} from "@angular/common";
import {ApiServiceService} from "../../Services/api-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @ViewChild('loginContainer') loginContainerRef!: ElementRef;
  inputData !: string;
  pythonResult: any;
  constructor(private activatorService: ActivatorComponentsService, private googleTrendsService: ApiServiceService) {
    this.inputData = "iphone";
  } //, private googleTrendsService: ApiServiceService


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
  sendToPython() {
    this.googleTrendsService.sendDataToPython({ data: this.inputData }).subscribe(result => {
      this.pythonResult = result;
    });
  }

}
