"use client";

import React from "react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const ProviderComponent = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComponent;
