// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// importamos firestore
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA77e7meqU_LGm5kSJgi2wiSCdOevSiOLo",
  authDomain: "cac-crud-react.firebaseapp.com",
  projectId: "cac-crud-react",
  storageBucket: "cac-crud-react.appspot.com",
  messagingSenderId: "951038895140",
  appId: "1:951038895140:web:8e5d03bb1493b3db75e4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// creamos y exportamos db de firestore con credenciales firebase cargada en app
export const db = getFirestore(app);