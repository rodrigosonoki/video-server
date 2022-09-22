import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const request = axios.create({
  baseURL: process.env.WHATSAPP_SERVICE_URL,
});
