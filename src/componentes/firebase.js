import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrSc0xN5TTG2riYkrJ9a2zQ5uyfETj5oo",
    authDomain: "burguer-queen2.firebaseapp.com",
    databaseURL: "https://burguer-queen2.firebaseio.com",
    projectId: "burguer-queen2",
    storageBucket: "burguer-queen2.appspot.com",
    messagingSenderId: "951018599209",
    appId: "1:951018599209:web:d260f2b9ce84d6b7247d38"
};
firebase.initializeApp(firebaseConfig);

export default firebase;