import express from "express";
import serveVideo from "../services/serveVideo.js";

const routes = express.Router();

routes.post("/", async (req, res) => {
  try {
    const { url } = req.body;
    const videoUrl = await serveVideo(url);
    return res.status(200).json({ videoUrl });
  } catch (err) {
    console.log(err);
  }
});

export default routes;
