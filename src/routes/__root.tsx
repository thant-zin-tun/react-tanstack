import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import HeaderCom from "../components/header/HeaderCom";
import type { AuthState } from "../state/feature2/auth-state";
import { AnimatePresence, motion } from "framer-motion";
import FooterCom from "../components/footer/FooterCom";

export const Route = createRootRouteWithContext<AuthState>()({
  component: () => (
    <React.Fragment>
      <HeaderCom />
      <Outlet />
      <FooterCom />
    </React.Fragment>
  ),
});
