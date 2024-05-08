import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {doc, getDoc} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import firestore = firebase.firestore;
import * as firebase2 from 'firebase/auth';
import 'firebase/auth';
import {ActivatorComponentsService} from "./activator-components.service";
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  userData:any;
  constructor(public Auth: AngularFireAuth, private firestore: AngularFirestore, private activatorService: ActivatorComponentsService) {}

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
    return this.Auth.signOut()
      .then(() => {
        // Cerrar sesión exitosamente
        localStorage.removeItem('currentUser');
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


  extractUserFromFirebase(userCredential:any){
    const uid = userCredential.user?.uid;
    if (uid) {
      this.activatorService.$modalLogged.emit(true);
      this.getUserData(uid)
        .subscribe(userData => {
          if (userData) {
            console.log('Datos del usuario:', userData);
            this.userData = userData;
            // Aquí puedes almacenar los datos del usuario en variables
            localStorage.setItem('currentUser', JSON.stringify(userData));
          } else {
            console.error('No se encontraron datos del usuario.');
          }
        });
    } else {
      console.error('No se encontró el UID del usuario.');
    }
  }

  setCurrentUserData( userData:any){
    this.userData = userData;
  }
  getCurrentUserData(){
    return this.userData;
  }
}
