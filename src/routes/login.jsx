import {Alert, Box, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
// import {startSession} from "../session";

import {getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider} from "firebase/auth";
import {GoogleOutlined} from "@ant-design/icons";
import { Button, notification } from "antd";

type Props = {};

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  auth.languageCode = "ru";

  const handleAuth = () => {
    setIsLoading(true);
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        navigate("/user");
      }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        notification.error({
          message: "Ошибка авторизации",
          description: "Авторизация не была воспроизведена. Повторите еще раз.",
        })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <p>Войдите через Google для начала работы</p>
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
    </div>
  )


}