import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/employee/")({
  component: () => <Employee />,
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticate) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

const Employee = () => {
  return (
    <div>
      <h1>Hello Employees</h1>
      <Outlet />
    </div>
  );
};
