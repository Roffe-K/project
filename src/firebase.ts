import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// 🔐 Din Firebase-konfiguration här:
const firebaseConfig = {
  apiKey: "AIzaSyCjgJPgpemIRS59ph2lKQ1xit2ASuZ1I9I",
  authDomain: "partyprep-7f146.firebaseapp.com",
  projectId: "partyprep-7f146",
  storageBucket: "partyprep-7f146.appspot.com", // rättat från .storage.app
  messagingSenderId: "73133042917",
  appId: "1:73133042917:web:73ece998c596c4b695f80c",
  measurementId: "G-DZNQ6NFWH9"
};

// 🔧 Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);     // ✅ Firestore
export const storage = getStorage(app);  // ✅ Storage
