import { Component } from '@angular/core';
import {ActivatorComponentsService} from "../../Services/activator-components.service";
import {FireBaseService} from "../../Services/fire-base.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  protected email: string = '';
  protected password: string = '';
  protected Name: string = '';
  protected lastName: string = '';
  protected userName: string = '';

  private userData:any;
  constructor(private activatorService: ActivatorComponentsService, private authService: FireBaseService) {
  }

  SingUp(){
    this.authService.singUp(this.email, this.password, this.lastName, this.Name, this.userName)
      .then(() => {
        this.authService.signIn(this.email, this.password)
          .then(userCredential => {
            this.authService.extractUserFromFirebase(userCredential);
          })
          .catch(error => {
            console.error('Error al iniciar sesión:', error);
          })
      })
      .catch(error => {
        console.error('Error al registrar usuario:', error);
      });

  }
  singInWithGoogle(){
    this.authService.singInWithGoogle().then(userCredential =>{
      this.authService.extractUserFromFirebase(userCredential);
    })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      })
  }

  SingUpActivate(){
    this.activatorService.setSigUpActivator();
  }

}
