// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFw--47z1x3_QaU1lzZ5oQCHCRD56ubxQ',
  authDomain: 'latihan-alterra-5c032.firebaseapp.com',
  databaseURL: 'https://latihan-alterra-5c032-default-rtdb.firebaseio.com',
  projectId: 'latihan-alterra-5c032',
  storageBucket: 'latihan-alterra-5c032.appspot.com',
  messagingSenderId: '442076716169',
  appId: '1:442076716169:web:9d550765f6b9e7e9077a58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
