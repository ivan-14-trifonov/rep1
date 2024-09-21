import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

import { getAuth, signInWithRedirect } from "firebase/auth";

export default function Login() {

  const auth = getAuth();
  signInWithRedirect(auth, provider);


  return 0;

}