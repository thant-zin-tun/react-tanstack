import { Link, MatchRoute } from "@tanstack/react-router";
import React from "react";
import { AuthState, useAuthStore } from "../../state/feature2/auth-state";

const activeProps = {
  style: {
    color: "blue",
  },
};

const HeaderCom = () => {
  const { isAuthenticate } = useAuthStore((state: AuthState) => state);
  return (
    <div>
      <Link to="/" activeProps={activeProps}>
        Home
      </Link>
      {isAuthenticate ? (
        <>
          <Link
            to="/about"
            activeProps={activeProps}
            search={{
              name: "Thant Zin Tun",
              age: 27,
              address: "Yangon",
            }}
          >
            About
          </Link>
          <Link to="/contact" activeProps={activeProps}>
            Contact
          </Link>
          <Link to="/employee" activeProps={activeProps}>
            Employee
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default HeaderCom;
