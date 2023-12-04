import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxqgeI-GG4GvXT_2pSpejO5QOxzeeMZik",
  authDomain: "paquetesreact-51930.firebaseapp.com",
  projectId: "paquetesreact-51930",
  storageBucket: "paquetesreact-51930.appspot.com",
  messagingSenderId: "888393088538",
  appId: "1:888393088538:web:8be24261e9ac492c905ba3",
};

const app = firebase.initializeApp(firebaseConfig);
export const authUser = app.auth();
export const firestore = app.firestore();
