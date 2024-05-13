import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {doc, getDoc} from "@angular/fire/firestore";
import firebase from "firebase/compat/app";
import Firestore = firebase.firestore.Firestore;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import firestore = firebase.firestore;
import * as firebase2 from 'firebase/auth';
import 'firebase/auth';
import {ActivatorComponentsService} from "./activator-components.service";
import {ActivatedRoute, Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  userData:any;
  constructor(public Auth: AngularFireAuth, private firestore: AngularFirestore, private activatorService: ActivatorComponentsService,  private router: Router, private route: ActivatedRoute) {}

  //loggin to firebase
  signIn(email: string, password: string){
    return this.Auth.signInWithEmailAndPassword(email,password);
  }

  singInWithGoogle() {
    return this.Auth.signInWithPopup(new firebase2.GoogleAuthProvider());
  }


  //create an user to firebase
  singUp(email: string, password: string, LastName: string, Name: string, UserName: string){
    return this.Auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Obtener el UID del usuario creado
        const uid = userCredential.user?.uid;
        // Guardar la información adicional en Firestore
        return this.firestore.collection('Usuarios').doc(uid).set({
          user: UserName,
          name: Name,
          LastName: LastName,
        });
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al crear usuario:', error);
        throw error; // Puedes propagar el error para manejarlo en el componente que llama a esta función
      });
  }

  //logout of firebase
  signOut(){
    window.location.reload();
    this.router.navigate(['/home']);
    return this.Auth.signOut()
      .then(() => {
        // Cerrar sesión exitosamente
        localStorage.removeItem('currentUser');
        localStorage.removeItem('Datainformation');
        this.activatorService.$modalLogged.emit(false);
        console.log('Sesión cerrada exitosamente.');
      })
      .catch(error => {
        // Manejar errores si los hay
        console.error('Error al cerrar sesión:', error);
      });

  }

  //recopilacion de datos del user
  getUserData(uid: string): Observable<any> {
    return this.firestore.collection('Usuarios').doc(uid).valueChanges().pipe(
      map(user => {
        if (user) {
          return user;
        } else {
          console.log('No existe el documento para el UID:', uid);
          return null;
        }
      }),
      catchError(error => {
        if (error.code === 'permission-denied') {
          console.error('Permiso denegado para acceder al documento.');
          // Puedes mostrar un mensaje de error al usuario aquí
        } else {
          console.error('Error al obtener datos del usuario:', error);
        }
        return throwError(error);
      })
    );
  }

  getUID(): string | null {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return currentUser.uid;
    } else {
      console.error('No se encontró el usuario actual.');
      return null;
    }
  }

  extractUserFromFirebase(userCredential:any){
    const uid = userCredential.user?.uid;
    console.log(uid);
    if (uid) {
      this.activatorService.$modalLogged.emit(true);

      this.getUserData(uid)
        .subscribe(userData => {
          if (userData) {
            console.log('Datos del usuario:', userData);
            this.userData = userData;

            // Aquí puedes almacenar los datos del usuario en variables
            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('Datainformation', JSON.stringify(userCredential));
          } else {
            console.error('No se encontraron datos del usuario.');
          }
        });
    } else {
      console.error('No se encontró el UID del usuario.');
    }
  }
  updateUserName(name: string): void {
    const userData = {
      user: name
      // Otros campos que desees actualizar
    };
    const user = localStorage.getItem('Datainformation');
    if(user){
      const userId = JSON.parse(user).user.uid;
      this.updateUser(userId, userData)
        .then(() => {
          this.extractUserFromFirebase(JSON.parse(user));
          console.log('Usuario actualizado con éxito');
        })
        .catch(error => {
          console.error('Error al actualizar usuario:', error);
        });

    }else{
      console.log("error")
    }
  }

  updateUser(userId : string, userData: any){
    const userRef = this.firestore.collection('Usuarios').doc(userId);

    return userRef.update(userData);
  }

  updateUserEmail(nuevoCorreo: string) {
    /*const tmp = localStorage.getItem('Datainformation');*/
    const currentUser = firebase.auth().currentUser;


    if(currentUser){
      if(currentUser?.email != null){
        const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, '123456');
        currentUser.reauthenticateWithCredential(credential)
          .then(() => {
            currentUser.updateEmail(nuevoCorreo)
              .then(() => {

                console.log('Correo electrónico actualizado exitosamente');
              })
              .catch((error: any) => {
                console.error('Error al actualizar el correo electrónico:', error);
              });
          })
          .catch((error: any) => {
            console.error('Error al actualizar el correo electrónico:', error);
          });
      }

    }else{
      console.log("error");
    }

  }

  purgeUser() {
    const user = firebase.auth().currentUser;
    if (user) {
      // Eliminar la cuenta del usuario
      user.delete()
        .then(() => {
          console.log('Cuenta de usuario eliminada exitosamente');
        })
        .catch((error) => {
          console.error('Error al eliminar la cuenta de usuario:', error);
        });
    }
    this.signOut();
  }

}
