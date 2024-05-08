import {Component, OnInit} from '@angular/core';
import {FireBaseService} from "../../Services/fire-base.service";
import {ActivatorComponentsService} from "../../Services/activator-components.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  protected email: string = '';
  protected password: string = '';
  private userData:any;
  constructor(private activatorService: ActivatorComponentsService, private authService: FireBaseService) {}

  signIn(){
    this.authService.signIn(this.email, this.password)
      .then(userCredential => {
        this.authService.extractUserFromFirebase(userCredential);
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      })
  }

  singInWithGoogle(){
    this.authService.singInWithGoogle().then(userCredential =>{
      this.authService.extractUserFromFirebase(userCredential);
    })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      })
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }



}
