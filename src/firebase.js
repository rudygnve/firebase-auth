import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.AIzaSyBvhp9K1ANCycZtWqc5jEOMqDUHPRin52U,
  authDomain: "react-auth-13273.firebaseapp.com",
  projectId: "react-auth-13273",
  storageBucket: "react-auth-13273.appspot.com",
  messagingSenderId: "342624130183",
  appId: "1:342624130183:web:1c22b0e129943d85835422",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
