import axios from "axios"

export const api = axios.create({
  baseURL: "https://medidor-finder.onrender.com" 
})