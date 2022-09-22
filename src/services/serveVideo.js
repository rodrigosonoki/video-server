import downloadVideo from "../use-cases/downloadVideo.js";
import uploadFile from "../use-cases/uploadFile.js";
import deleteLocalFile from "../use-cases/deleteLocalFile.js";
import getVideoInfo from "../use-cases/getVideoInfo.js";
import { sendVideo } from "../use-cases/message.js";
import dotenv from "dotenv";

dotenv.config();

const serveVideo = async (job, done) => {
  const { videoUrl } = job.data;

  console.log("[1/4] Retrieving video informations...");
  const video = await getVideoInfo(videoUrl);

  console.log("[2/5] Downloading video...");
  await downloadVideo(video);

  console.log("[3/5] Uploading video...");
  const key = await uploadFile(video);

  console.log("[4/5] Deleting local video...");
  deleteLocalFile(video.localPath);

  const url = process.env.SPACES_BASE_URL + key;

  console.log("[5/5] Requesting whatsapp-service...");
  await sendVideo(url);
  console.log("🚀 DONE!");

  return done();
};

export default serveVideo;
