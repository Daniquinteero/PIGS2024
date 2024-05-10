import { Component } from '@angular/core';
import {ActivatorComponentsService} from "../../Services/activator-components.service";


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent {
  constructor(private activatorService: ActivatorComponentsService) {
  }


  getPortfolioActivator(){
    return this.activatorService.getPortfolioListActivator();
  }

  PortfolioListActivate(){
    this.activatorService.setPortfolioListActivator();
  }


}
