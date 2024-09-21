import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {GoogleOutlined} from "@ant-design/icons";

export default function Login() {

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const isLoading = 0;



  const handleAuth = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Войдите через Google для начала работы
      </Typography>
      {/*error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>*/}
      <Button
        type="primary"
        shape="round"
        icon={<GoogleOutlined />}
        size="large"
        //loading={isLoading}
        onClick={handleAuth}
      >
        Войти через Google
      </Button>
    </Container>
  )

}