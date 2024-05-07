import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD84QaPgBTp5Pkb-mUMjoJ2U-SnPe6sgCQ",
      authDomain: "productbase-49463.firebaseapp.com",
      projectId: "productbase-49463",
      storageBucket: "productbase-49463.appspot.com",
      messagingSenderId: "747732654284",
      appId: "1:747732654284:web:011f8b6b948ec7e0894a69",
      measurementId: "G-Y4QGKNG5RD"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }



}
