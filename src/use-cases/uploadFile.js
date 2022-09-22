import { Upload } from "@aws-sdk/lib-storage";
import { s3Client } from "../infra/spacesClient.js";
import fs from "fs";

const uploadFile = async ({ localPath, title }) => {
  const fileStream = fs.createReadStream(localPath);
  const bucketParams = {
    Bucket: "alfred",
    Key: `videos/${title}.mp4`,
    Body: fileStream,
    ACL: "public-read",
  };
  await new Promise((resolve, reject) => {
    const upload = new Upload({
      client: s3Client,
      params: bucketParams,
    });

    resolve(upload.done());
  });
  return bucketParams.Key;
};

export default uploadFile;
