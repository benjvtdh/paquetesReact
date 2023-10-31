import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUi5AJKWeicMymycwS31CoTGIDCC6mzIA",
  authDomain: "paquetesreact.firebaseapp.com",
  projectId: "paquetesreact",
  storageBucket: "paquetesreact.appspot.com",
  messagingSenderId: "1025997080984",
  appId: "1:1025997080984:web:5a116d038705f95bb183ed",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
