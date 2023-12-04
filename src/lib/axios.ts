import axios from "axios";

export const api = axios.create({
  baseURL: 'https://finance-system.azurewebsites.net/'
})