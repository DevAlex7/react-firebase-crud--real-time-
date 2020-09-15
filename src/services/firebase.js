import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAz4f2dEzLBeI0ostpyCbifh6ibOu1jnbQ",
    authDomain: "list-react-f458e.firebaseapp.com",
    databaseURL: "https://list-react-f458e.firebaseio.com",
    projectId: "list-react-f458e",
    storageBucket: "list-react-f458e.appspot.com",
    messagingSenderId: "472143037652",
    appId: "1:472143037652:web:709cdb5bc53fed60432741",
    measurementId: "G-0BKXRYJ7MD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database().ref('List')

