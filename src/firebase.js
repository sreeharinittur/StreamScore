
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

import {getFirestore}from "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyDAtcXd1g_IUS45y_x2W6KAJC7kLcEswks",
    authDomain: "newflixstream-clone.firebaseapp.com",
    projectId: "newflixstream-clone",
    storageBucket: "newflixstream-clone.appspot.com",
    messagingSenderId: "823238457969",
    appId: "1:823238457969:web:0f50209a1488462fb079d0"
  
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)

//REACT_APP_FIREBASE_API_KEY=AIzaSyDAtcXd1g_IUS45y_x2W6KAJC7kLcEswks
//REACT_APP_FIREBASE_AUTH_DOMAIN=newflixstream-clone.firebaseapp.com
//REACT_APP_FIREBASE_PROJECT_ID=newflixstream-clone
//REACT_APP_FIREBASE_STORAGE_BUCKET=newflixstream-clone.appspot.com
//REACT_APP_MESSAGING_SENDER=823238457969
//REACT_APP_APP_ID=1:823238457969:web:0f50209a1488462fb079d0