import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATxQHVSnA9tk9vBxUbW2cfW9nZEvvayZ0",
  authDomain: "sistemafacturas-7a91f.firebaseapp.com",
  projectId: "sistemafacturas-7a91f",
  storageBucket: "sistemafacturas-7a91f.appspot.com",
  messagingSenderId: "103069429044",
  appId: "1:103069429044:web:4927d90185c8937b908961"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)