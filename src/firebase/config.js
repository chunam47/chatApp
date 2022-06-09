import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGLg4i9NrqBAxb5vQo92vJSFjbx744mfI",
  authDomain: "chat-app-f56c0.firebaseapp.com",
  projectId: "chat-app-f56c0",
  storageBucket: "chat-app-f56c0.appspot.com",
  messagingSenderId: "767638999647",
  appId: "1:767638999647:web:809c946904e8c239b5c1ea",
  measurementId: "G-80EE2TV2EZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
