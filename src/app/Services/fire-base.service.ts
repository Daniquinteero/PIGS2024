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
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(public Auth: AngularFireAuth, private firestore: AngularFirestore) {}

  //loggin to firebase
  signIn(email: string, password: string){
    return this.Auth.signInWithEmailAndPassword(email,password);
  }

  singInWithGoogle() {
    return this.Auth.signInWithPopup(new firebase2.GoogleAuthProvider());
  }


  //create an user to firebase
  singUp(email: string, password: string){
    return this.Auth.createUserWithEmailAndPassword(email, password);
  }

  //logout of firebase
  signOut(){
    return this.Auth.signOut();
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

}
