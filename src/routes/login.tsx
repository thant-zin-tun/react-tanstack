import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";

import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

import {
  LoginValidationSchema,
  LoginValidationZodSchema,
} from "../utils/validation/login_validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { login } from "../services/auth/loginApi";
import { ResponseType } from "../types/resposeType";
import { CredentialResponse } from "../types/loginTypes";
import { AuthState, useAuthStore } from "../state/feature2/auth-state";
import { encodeToken } from "../utils/generateToken";

export const Route = createFileRoute("/login")({
  component: LoginScreen,
  beforeLoad: ({ context, location }) => {
    if (context.isAuthenticate) {
      throw redirect({
        to: "/",
      });
    }
  },
});

export function LoginScreen() {
  const cookies = new Cookies(null, {
    path: "/",
  });
  const { authenticated_success } = useAuthStore((state) => state);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | undefined>("");

  const router = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationZodSchema>({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginValidationZodSchema> = (
    values: LoginValidationZodSchema
  ) => {
    setIsLoading(true);
    login(values)
      .then((data: CredentialResponse) => {
        if (data.access !== "") {
          setStatus("Login Successfully!");
          setIsLoading(false);
          const decoded = jwtDecode(data.access!);
          encodeToken(data.access!, decoded.exp!);
          reset();
          authenticated_success();
          router({
            to: "/",
            replace: true,
          });
        } else {
          setStatus(data.detail);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setStatus("Something Wrong!");
        console.log("Error ", err);
      });
  };

  return (
    <div className=" d-flex w-full h-full justify-content-center align-items-center">
      <div className="card mt-5" style={{ width: "20rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            {status !== "" ? (
              <div className="alert alert-primary" role="alert">
                {status}
              </div>
            ) : null}
            <h2>Login Form!</h2>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                {...register("username")}
                disabled={isLoading}
              />
              {errors.username ? (
                <span className=" text-danger">{errors.username.message}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="exampleFormControlTextarea1"
                {...register("password")}
                disabled={isLoading}
              ></input>
              {errors.password ? (
                <span className=" text-danger">{errors.password.message}</span>
              ) : (
                ""
              )}
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  className=" btn w-full btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
