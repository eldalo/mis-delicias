import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAE47r4bMaqEvujTTCmId-1nQMuKcdS_bU',
  authDomain: 'misdelicias-bf9c4.firebaseapp.com',
  projectId: 'misdelicias-bf9c4',
  storageBucket: 'misdelicias-bf9c4.appspot.com',
  messagingSenderId: '952403281408',
  appId: '1:952403281408:web:83250e0b300c92511a3ae5',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
