// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnesI96oW3qs0bZzxxWHgUugI_p7_mUE8",
    authDomain: "blockflix-e1c60.firebaseapp.com",
    projectId: "blockflix-e1c60",
    storageBucket: "blockflix-e1c60.appspot.com",
    messagingSenderId: "1071615975587",
    appId: "1:1071615975587:web:6eb1d2f4fe6c86a1531f16",
    measurementId: "G-BZMYXB104Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  export {auth};