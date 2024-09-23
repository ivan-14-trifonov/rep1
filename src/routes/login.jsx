import {Alert, Box, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {GoogleOutlined} from "@ant-design/icons";
import { Button, notification } from "antd";

type Props = {};

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
        //routes?.setRoutes([]);
        alert('101');
      })
      .catch(() => {
        notification.error({
          message: "Ошибка авторизации",
          description: "Авторизация не была воспроизведена. Повторите еще раз.",
        });
        alert('505');
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