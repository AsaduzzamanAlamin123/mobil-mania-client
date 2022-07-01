// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_PJPu0-dAzJnUxgWHgF3Z5vrhzavW0c",
  authDomain: "mobile-mania-f0219.firebaseapp.com",
  projectId: "mobile-mania-f0219",
  storageBucket: "mobile-mania-f0219.appspot.com",
  messagingSenderId: "155924296446",
  appId: "1:155924296446:web:bd6e5f66a83b40dcddabaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;