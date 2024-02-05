import fs from "fs";
import path from "path";

const moveFile = (source, destination) => {
  const fileName = path.basename(source);

  const destinationPath = path.join(destination, fileName);

  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destinationPath);

  readStream.on("error", (err) => {
    console.error("Read error:", err.message);
  });

  writeStream.on("error", (err) => {
    console.error("Write error:", err.message);
  });

  writeStream.on("finish", () => {
    fs.unlink(source, (err) => {
      if (err) {
        console.error("Error deleting source file:", err.message);
      } else {
        console.log("File moved and deleted successfully.");
      }
    });
  });

  readStream.pipe(writeStream);
};

export default moveFile;
