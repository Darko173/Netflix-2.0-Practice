import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLixjJJUVE0QQ0pXsnkmoCU6TFcnkCsuk",
  authDomain: "netflix-clone-70e44.firebaseapp.com",
  projectId: "netflix-clone-70e44",
  storageBucket: "netflix-clone-70e44.appspot.com",
  messagingSenderId: "514825771266",
  appId: "1:514825771266:web:d3895633cb8f6c6a1d8a1b",
  measurementId: "G-WQNMLE7B27"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);