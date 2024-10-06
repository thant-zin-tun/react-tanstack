import React from "react";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuthStore } from "./state/feature2/auth-state";

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <h1>Load</h1>,
  defaultNotFoundComponent: () => (
    <h1>သင်သွားနိုင်‌‌သော‌‌‌‌‌ေနရာမရှိပါ (Not Found)</h1>
  ),
  context: {
    isAuthenticate: false,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { isAuthenticate } = useAuthStore((state) => state);
  return <RouterProvider router={router} context={{ isAuthenticate }} />;
}

export default App;
