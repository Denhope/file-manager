import fs from "fs";
import path from "path";

const createEmptyFile = (fileName) => {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error("Operation failed:", err.message);
    } else {
      console.log(`File ${fileName} created successfully.`);
    }
  });
};

export default createEmptyFile;
