import fs from "fs";

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Operation failed:", err.message);
    } else {
      console.log("File deleted successfully.");
    }
  });
};

export default deleteFile;
