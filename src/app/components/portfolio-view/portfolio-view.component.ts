import {Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from "@angular/router";
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {LoginComponent} from "../../pages/login/login.component";
import {NgIf} from "@angular/common";
import {ApiServiceService} from "../../Services/api-service.service";

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent {
  @Input() portfolio: any;
  @ViewChild('PortfolioListContainer') PortfolioListContainerRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService) {
  } //, private googleTrendsService: ApiServiceService


  getPortfolioListActivator(){
    return this.activatorService.getPortfolioListActivator();
  }

  PortfolioListActivate(){
    this.activatorService.setPortfolioListActivator();
  }

}
