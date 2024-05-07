import { Component } from '@angular/core';
import {FireBaseService} from "../../Services/fire-base.service";
import {ActivatorComponentsService} from "../../Services/activator-components.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  protected email: string = '';
  protected password: string = '';
  private userData:any;
  constructor(private activatorService: ActivatorComponentsService, private authService: FireBaseService) {
  }

  signIn(){
    this.authService.signIn(this.email, this.password)
      .then(userCredential => {
        const uid = userCredential.user?.uid;
        if (uid) {
          this.activatorService.setLogged();
          this.authService.getUserData(uid)
            .subscribe(userData => {
              if (userData) {
                console.log('Datos del usuario:', userData);
                this.userData = userData;
                // Aquí puedes almacenar los datos del usuario en variables
              } else {
                console.error('No se encontraron datos del usuario.');
              }
            });
        } else {
          console.error('No se encontró el UID del usuario.');
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      })
  }

  singInWithGoogle(){
    this.authService.singInWithGoogle().then(userCredential =>{
      const uid = userCredential.user?.uid;
      if(uid){
        this.activatorService.setLogged();
        this.authService.getUserData(uid)
          .subscribe(userData => {
            if (userData) {
              console.log('Datos del usuario:', userData.user);
              this.userData = userData;
              // Aquí puedes almacenar los datos del usuario en variables
            } else {
              console.error('No se encontraron datos del usuario.');
            }
          });
      } else {
        console.error('No se encontró el UID del usuario.');
      }

    })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
      })
  }

  LoginActivate(){
    this.activatorService.setLoginActivator();
  }


}
