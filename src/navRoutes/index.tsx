import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Spin } from "antd";

import { MainPage } from "../routes/main";
import { SignIn } from "../routes/signIn";
import { RoutesContext } from "../utils/routesContext";
import {
  FileOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { SignOutPage } from "../routes/signOut";
import { NeedsPage } from "../routes/needs";
import { NeedPage } from "../routes/need";
import { NewsList } from "../routes/newsList";
import { News } from "../routes/news";
import { AboutFound } from "../routes/aboutFound";

export type RoutesType = {
  id: number;
  path: string;
  element: JSX.Element;
  title: string;
  icon: JSX.Element;
  isHiden?: boolean;
}[];

export const anonymRoutes: RoutesType = [
  {
    id: 1,
    path: "/",
    element: <SignIn />,
    title: "Вход",
    icon: <LoginOutlined />,
  },
];

export const userRoutes: RoutesType = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
    title: "Главная",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    path: "/signOut",
    element: <SignOutPage />,
    title: "Выход",
    icon: <LogoutOutlined />,
  },
];

export const grantedRoutes: RoutesType = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
    title: "Главная",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    path: "/needs",
    element: <NeedsPage />,
    title: "Нужды",
    icon: <TeamOutlined />,
  },
  {
    id: 3,
    path: "/newsList",
    element: <NewsList />,
    title: "Новости",
    icon: <FileOutlined />,
  },
  {
    id: 4,
    path: "/aboutFound",
    element: <AboutFound />,
    title: "О Фонде",
    icon: <InfoCircleOutlined />,
  },
  {
    id: 5,
    path: "/signOut",
    element: <SignOutPage />,
    title: "Выход",
    icon: <LogoutOutlined />,
  },
  {
    id: 6,
    path: "/need",
    element: <NeedPage />,
    title: "",
    icon: <></>,
    isHiden: true,
  },
  {
    id: 7,
    path: "/need/:id",
    element: <NeedPage />,
    title: "",
    icon: <></>,
    isHiden: true,
  },
  {
    id: 8,
    path: "/news",
    element: <News />,
    title: "",
    icon: <></>,
    isHiden: true,
  },
  {
    id: 9,
    path: "/news/:id",
    element: <News />,
    title: "",
    icon: <></>,
    isHiden: true,
  },
];

const StyledSpin = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NavRoutes: FC = ({}) => {
  const routes = useContext(RoutesContext);
  return (
    <>
      {!routes?.routes?.length && <StyledSpin />}
      <Routes>
        {routes?.routes?.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Routes>
    </>
  );
};
