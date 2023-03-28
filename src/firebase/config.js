import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGNGhf-7Vl4F2zPCkhBwtDpS9BuiqtgVI",
  authDomain: "teamwork-8d4c1.firebaseapp.com",
  projectId: "teamwork-8d4c1",
  storageBucket: "teamwork-8d4c1.appspot.com",
  messagingSenderId: "572894139413",
  appId: "1:572894139413:web:92531bff809e19eba16a1c"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize firebase services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }