import firebase from 'firebase'

var firebaseConfig = {
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database().ref('List')

