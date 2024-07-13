import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDd1i67o6XE5ZrqRB4N18GJBsT1LEmZKss",
  authDomain: "image-crud-fe-e27e7.firebaseapp.com",
  databaseURL: "https://image-crud-fe-e27e7-default-rtdb.firebaseio.com",
  projectId: "image-crud-fe-e27e7",
  storageBucket: "image-crud-fe-e27e7.appspot.com",
  messagingSenderId: "188597273326",
  appId: "1:188597273326:web:02e5068377036ede76e9ff",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export { provider };
