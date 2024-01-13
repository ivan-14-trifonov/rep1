import logo from './logo.svg';
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

async function Add() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1830
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function Get() {
  const querySnapshot = await getDocs(collection(db, "users"));

  let result = [];
  querySnapshot.forEach((doc) => {
    result.push([doc.id, doc.data()]);
  });

  return result;
}

function FormForPiece() {
  async function forPiece(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const piece = formData.get("piece");
    alert(`Данные: '${piece}'`);

  }
  return (
    <form onSubmit={forPiece}>
      <input name="piece" placeholder="Произведение" />
      <input name="number" placeholder="Номер" />
      <button type="submit">Сохранить</button>
    </form>
  );
}

function App() {

  let result = Get();
  console.log(result);

  return (
    <div>
        {FormForPiece()}
    </div>
  );
}

export default App;

