import {Alert, Box, Container, Link, TextField, Typography} from "@mui/material";
import { Button, notification } from "antd";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {GoogleOutlined} from "@ant-design/icons";
import styled from "styled-components";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  // const routes = useContext(RoutesContext);

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  auth.languageCode = "ru";

  const handleAuth = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then(() => {
        // routes?.setRoutes([]);
      })
      .catch(() => {
        notification.error({
          message: "Ошибка авторизации",
          description: "Авторизация не была воспроизведена. Повторите еще раз.",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the login request
    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      navigate("/user");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }

  return (
    <Root>
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
    </Root>
  )
}