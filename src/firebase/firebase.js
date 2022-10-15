import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkjvDDBBgDMgmGqmpzMTJEex_WV5cmfCU",
  authDomain: "hsr-motors-d1aca.firebaseapp.com",
  projectId: "hsr-motors-d1aca",
  storageBucket: "hsr-motors-d1aca.appspot.com",
  messagingSenderId: "114904497440",
  appId: "1:114904497440:web:82f8dd0431efcc80fd6b45",
  measurementId: "G-8PRWHVXLJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;