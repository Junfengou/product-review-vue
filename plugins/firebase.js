// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5YGL5Mhs2HFv9nEDxexnhEisOREv1EZc",
  authDomain: "product-review-db62b.firebaseapp.com",
  projectId: "product-review-db62b",
  storageBucket: "product-review-db62b.appspot.com",
  messagingSenderId: "838729726205",
  appId: "1:838729726205:web:6a8b706bb99857470ba694"
};

// Initialize Firebase
// Need this additional info for nuxt
// let app = null
// !firebase.apps.length ? app = firebase.initializeApp(firebaseConfig) : null;

const app = firebase.initializeApp(firebaseConfig)
export const db = app.firestore();
export default firebase;

