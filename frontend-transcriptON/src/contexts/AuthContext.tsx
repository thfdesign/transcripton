import React, { createContext, useState } from "react";
import {
  useForm,
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IProps {
  children: React.ReactNode;
}

interface AuthProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  token: string;
  setToken: (item: any) => any;
  reset: UseFormReset<FieldValues>;
}

export const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AppAuthProvider: React.FC<IProps> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  return (
    <AuthContext.Provider
      value={{
        handleSubmit,
        register,
        token,
        setToken,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
