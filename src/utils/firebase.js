// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCopIaUPvypjhgMH8wZyVwl9CGt72ddlIM",
  authDomain: "netgpt-f9def.firebaseapp.com",
  projectId: "netgpt-f9def",
  storageBucket: "netgpt-f9def.firebasestorage.app",
  messagingSenderId: "90755920471",
  appId: "1:90755920471:web:13333e7e5d4847604d2912",
  measurementId: "G-3LCEJEDLLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);