import fs from "fs";
import ytdl from "ytdl-core";

const downloadVideo = ({ url, localPath }) => {
  return new Promise((resolve, reject) => {
    const file = ytdl(url);
    file.pipe(fs.createWriteStream(localPath));
    file.on("end", () => resolve());
  });
};

export default downloadVideo;
