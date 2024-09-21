import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

import {GoogleAuthProvider, getAuth, signInWithRedirect} from "firebase/auth";
import {GoogleOutlined} from "@ant-design/icons";

export default function Login() {

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  handleAuth = signInWithRedirect(auth, provider);

  const isLoading = 0;


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
        loading={isLoading}
        onClick={handleAuth}
      >
        Войти через Google
      </Button>
    </Container>
  )

}