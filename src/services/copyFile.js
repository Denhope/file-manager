import fs from "fs";
import path from "path";

const copyFile = (source, destination) => {
  const fileName = path.basename(source);

  const baseName = path.basename(fileName, path.extname(fileName));

  const newFileName = `${baseName}-copy${path.extname(fileName)}`;

  const destinationPath = path.join(destination, newFileName);

  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destinationPath);

  readStream.on("error", (err) => {
    console.error("Read error:", err.message);
  });

  writeStream.on("error", (err) => {
    console.error("Write error:", err.message);
  });

  writeStream.on("finish", () => {
    console.log("File copied successfully.");
  });

  readStream.pipe(writeStream);
};

export default copyFile;
