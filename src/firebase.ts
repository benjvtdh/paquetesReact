import firebase from "firebase";
import "firebase/auth";
import "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyACFpn5bRxPi3glDLi66MpeRbLa__H1tdc",
  authDomain: "paquetesreact-24ac2.firebaseapp.com",
  projectId: "paquetesreact-24ac2",
  storageBucket: "paquetesreact-24ac2.appspot.com",
  messagingSenderId: "780579617571",
  appId: "1:780579617571:web:30bb1c10a330d769e7ea96",
  measurementId: "G-6633R15TSK",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
