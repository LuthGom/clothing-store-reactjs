import axios from "axios";

export const produtosUrl = (categoria) =>
  `https://api-de-compras.onrender.com/produtos${categoria}`;

export const LoginURL = axios.create({
  baseURL: "https://login-clients-api.onrender.com/cliente/",
});
