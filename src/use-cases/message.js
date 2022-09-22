import { request } from "../infra/request.js";
import dotenv from "dotenv";

dotenv.config();

const opts = {
  headers: {
    Authorization: process.env.AUTHORIZATION_TOKEN,
  },
};

export const sendVideo = async (video) => {
  const body = {
    phone: process.env.PHONE,
    video,
  };
  try {
    await request.post("send-video", body, opts);
  } catch (err) {
    console.log(err.response.status, err.response.data.message);
  }
};
