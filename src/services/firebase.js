import firebase from 'firebase'
import firebaseConfig from '../firebase_config'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database().ref('List')

