import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBKo1JNrWqN2gbKXzmkl8i1WS3v6rKh96I",
    authDomain: "order-food-together.firebaseapp.com",
    databaseURL: "https://order-food-together.firebaseio.com",
    projectId: "order-food-together",
    storageBucket: "order-food-together.appspot.com",
    messagingSenderId: "745437231279"
}
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;