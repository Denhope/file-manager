import fs from "fs";

const renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error("Operation failed:", err.message);
    } else {
      console.log(`File renamed successfully.`);
    }
  });
};

export default renameFile;
