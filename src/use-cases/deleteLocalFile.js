import { unlink } from "fs";

const deleteLocalFile = (filePath) => {
  unlink(filePath, (err) => {
    if (err) throw err;
  });
};

export default deleteLocalFile;
