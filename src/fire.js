import firebase from 'firebase'
import firebaseui from 'firebaseui';

var config = {
  apiKey: "AIzaSyCU93OJV41wvEHNAKXCprOjSpiFk2vKwUI",
  authDomain: "tinkar-tk.firebaseapp.com",
  databaseURL: "https://tinkar-tk.firebaseio.com",
  projectId: "tinkar-tk",
  storageBucket: "tinkar-tk.appspot.com",
  messagingSenderId: "74474789177"
  };


  // Firestore

 firebase.initializeApp(config);

 export var fire = firebase.firestore();
 export var fireAuth = firebase;
 export var firebaseApp = firebase;
 export var firebaseuiApp = firebaseui;

 



;
