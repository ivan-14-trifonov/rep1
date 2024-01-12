import React, {Component} from 'react';
import './App.css';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbXCWA5-jVoWzCSiF3hHaJ2IomHLNH9kk",
  authDomain: "repertoire-7be78.firebaseapp.com",
  databaseURL: "https://repertoire-7be78-default-rtdb.firebaseio.com",
  projectId: "repertoire-7be78",
  storageBucket: "repertoire-7be78.appspot.com",
  messagingSenderId: "597041251114",
  appId: "1:597041251114:web:8d8ddd1431cf02def39453"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1816
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

let test;
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  test = `${doc.id} => ${JSON.stringify(doc.data())}`;
});

let print = JSON.stringify(test);

export default class App extends Component {
  render() {
    return (
      <div>
        <p>${print}</p>
      </div>
    )
  }

}