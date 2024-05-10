import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatorComponentsService {
  private loginActivator: boolean = false;
  private userDialogAccountActivator: boolean = false;
  private signUpActivator: boolean = false;
  $modalLogged = new EventEmitter<any>();
  private PortfolioListActivator: boolean = false;
  constructor() { }

  //get y set para la activacion del menu de logging
  getLoginActivator(){
    return this.loginActivator;
  }


  setLoginActivator(){
    this.loginActivator = !this.loginActivator;
  }
  //get y set para la activacion del menu de signUp
  getSignUpActivator(){
    return this.signUpActivator;
  }

  setSigUpActivator(){
    this.signUpActivator = !this.signUpActivator;
  }

  //set y get para la activacion del menu de loging
  getUserDialogAccountActivator(){
    return this.userDialogAccountActivator;
  }
  setUserDialogAccountActivator(){
    this.userDialogAccountActivator = !this.userDialogAccountActivator;
  }


  getPortfolioListActivator(){
    return this.PortfolioListActivator;
  }

  setPortfolioListActivator(){
    this.PortfolioListActivator = !this.PortfolioListActivator;
  }
}
