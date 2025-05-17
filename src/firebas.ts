// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjgJPgpemIRS59ph2lKQ1xit2ASuZ1I9I",
  authDomain: "partyprep-7f146.firebaseapp.com",
  projectId: "partyprep-7f146",
  appId: "1:73133042917:web:73ece998c596c4b695f80c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
