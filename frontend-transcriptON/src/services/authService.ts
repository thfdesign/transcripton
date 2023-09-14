import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333/auth",
});

export const login = async (email: string, password: string) => {
  console.log(password);

  const user = await api.post("/login", { email, password });

  return user;
};

export const logout = async (token: string) => {
  console.log(token);

  await api.post("/logout", { headers: { Authorization: `Bearer ${token}` } });
};
