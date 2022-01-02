import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//import * as firebase from 'firebase/app'; 
import {getStorage} from 'firebase/storage';
import {getFirestore} from'firebase/firestore';
import {  serverTimestamp } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAECOkVyUMSFI93ByxSjr7bqbQNZDk3LB4",
  authDomain: "firegram-bb70d.firebaseapp.com",
  projectId: "firegram-bb70d",
  storageBucket: "firegram-bb70d.appspot.com",
  messagingSenderId: "1014794597546",
  appId: "1:1014794597546:web:909758059e8689d7514cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projecFirestore = getFirestore();
//const timestamp= projecFirestore.FieldValue.serverTimestamp();
export {projectStorage,projecFirestore};
