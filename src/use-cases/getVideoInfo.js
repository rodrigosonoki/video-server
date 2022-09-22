import ytdl from "ytdl-core";
import path from "path";
import { dirName } from "../utils/dirName.js";

const getVideoInfo = async (url) => {
  const info = await ytdl.getInfo(url);

  const title = info.videoDetails.title.replace(/\s+/g, "");
  const localPath = path.join(dirName, "../temp", `${title}.mp4`);
  const video = {
    title,
    localPath,
    url,
  };
  return video;
};

export default getVideoInfo;
