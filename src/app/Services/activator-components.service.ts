import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatorComponentsService {
  private loginActivator: boolean = false;
  private logged = false;
  $modalLogged = new EventEmitter<any>();
  constructor() { }

  getLoginActivator(){
    return this.loginActivator;
  }

  getLogged(){
    return this.logged;
  }
  setLogged(){
    this.logged = !this.logged;
  }
  setLoginActivator(){
    this.loginActivator = !this.loginActivator;
  }
}
