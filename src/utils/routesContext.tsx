import React from "react";
import { createContext } from "react";
import { RoutesType } from "../navRoutes";

type RoutesContexType = {
  routes: RoutesType | undefined;
  setRoutes: React.Dispatch<React.SetStateAction<RoutesType>>;
};

export const RoutesContext = createContext<RoutesContexType | undefined>(
  undefined
);
