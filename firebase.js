import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCkaij63ZJ0qBRthmd6-5jG0y1njsyY0RU",
  authDomain: "gifted-chat-15034.firebaseapp.com",
  projectId: "gifted-chat-15034",
  storageBucket: "gifted-chat-15034.appspot.com",
  messagingSenderId: "270090515552",
  appId: "1:270090515552:web:72be186f4fdc409e557f05",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
