// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRo0HRVTqtRjSSwyrt5FPwfCTMrrwsHeU',
  authDomain: 'happybouquet-mopro.firebaseapp.com',
  databaseURL: 'https://happybouquet-mopro-default-rtdb.firebaseio.com',
  projectId: 'happybouquet-mopro',
  storageBucket: 'happybouquet-mopro.appspot.com',
  messagingSenderId: '342495407254',
  appId: '1:342495407254:web:6cf70ab16bab0d2530e6b7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
