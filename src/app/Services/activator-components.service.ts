import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatorComponentsService {
  private loginActivator: boolean = false;
  private PortfolioListActivator: boolean = false;
  constructor() { }

  getLoginActivator(){
    return this.loginActivator;
  }

  setLoginActivator(){
    this.loginActivator = !this.loginActivator;
  }
  getPortfolioListActivator(){
    return this.PortfolioListActivator;
  }

  setPortfolioListActivator(){
    this.PortfolioListActivator = !this.PortfolioListActivator;
  }
}
