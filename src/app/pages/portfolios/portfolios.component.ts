import { Component, ElementRef, ViewChild } from '@angular/core';
import {ActivatorComponentsService} from "../../Services/activator-components.service";

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent {
  @ViewChild('PortfolioView') PortfolioViewRef!: ElementRef;
  constructor(private activatorService: ActivatorComponentsService) {
  }


  getPortfolioActivator(){
    return this.activatorService.getPortfolioListActivator();
  }

  PortfolioListActivate(){
    this.activatorService.setPortfolioListActivator();
  }

}
