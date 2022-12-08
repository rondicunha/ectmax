// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAx_RCzth1Ald1bax7EJT_OmrH40Hz6nQA',
  authDomain: 'ect2525-rondi.firebaseapp.com',
  projectId: 'ect2525-rondi',
  storageBucket: 'ect2525-rondi.appspot.com',
  messagingSenderId: '749654406515',
  appId: '1:749654406515:web:6b21e080e27c468af7c106',
  measurementId: 'G-18E88830JK'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
