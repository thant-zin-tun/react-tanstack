import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import React from "react";

import { useCustomQuery } from "../hook/useCustomQueryHook";

import { useMutation, QueryClient } from "@tanstack/react-query";
import { CustomerObject, Customers } from "../types/customerTypes";
import { addCustomer, fetchCustomer } from "../services/customer/customerApi";

import ButtonCom from "../components/ui/button/Button";
import { queryClient } from "..";
import { useAuthStore } from "../state/feature2/auth-state";
import Cookies from "universal-cookie";

import { motion } from "framer-motion";
import axiosInstance from "../services/config/axios";
import { Resp } from "../types/responseTypes";

export const Route = createFileRoute("/")({
  component: () => <HomeScreen />,
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticate) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

const HomeScreen = () => {
  const { logout } = useAuthStore((state) => state);
  const router = useNavigate();
  const cookies = new Cookies();
  const { data, error, isPending } = useCustomQuery<any>(
    ["project"],
    async () => {
      const response = await axiosInstance.get<Resp>("/project");
      const data: Resp = response.data;
      return data;
    }
  );

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <motion.div
      className="custom_div"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h1>Welcome Home Page</h1>
      <button
        className=" btn btn-danger"
        onClick={() => {
          logout();
          // cookies.remove("token");
          console.log(cookies.get("token"));
          router({
            to: "/login",
            replace: true,
          });
        }}
      >
        Logout
      </button>
      <h1>Home Page</h1>
      {data.data.map((item: any, index: number) => (
        <h1 key={index}>{item.name}</h1>
      ))}

      {/* <h1>{status === "pending" ? "ADD Pending...wait" : ""}</h1> */}

      {/* <ButtonCom
        onClick={() => {
          mutateAsync(
            {
              name: "Kalay Lay",
              phone: "09998533437",
              address: "‌မြောက်ဒဂုံ ၁၆ ရပ်ကွက် ၊ ‌‌အောင်ရတနာ ၅ လမ်း",
              profile_image: null,
              email: "htethtet@gmail.com",
              isCustomer: true,
              id: null,
            },
            {
              onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["customer"] });
                console.log("---------------");
                console.log(data);
                console.log("---------------");
              },
              onError: (error) => {
                alert("Error");
              },
            }
          );
        }}
        text="Add Customer"
      /> */}
    </motion.div>
  );
};
