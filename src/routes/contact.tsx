import { createFileRoute, redirect } from "@tanstack/react-router";

import { CredentialType } from "../types/loginTypes";

export const Route = createFileRoute("/contact")({
  component: () => <ContactScreen />,
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticate) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

const ContactScreen = () => {
  return (
    <div>
      <h1>Contact Screen</h1>
    </div>
  );
};
