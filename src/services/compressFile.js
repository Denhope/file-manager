import zlib from "zlib";
import fs from "fs";

const compressFile = (source, destination) => {
  try {
    const brotli = zlib.createBrotliCompress();
    const sourceStream = fs.createReadStream(source);
    const destinationStream = fs.createWriteStream(destination);

    sourceStream.pipe(brotli).pipe(destinationStream);

    sourceStream.on("error", (err) => {
      console.error("Operation failed:", err.message);
    });

    destinationStream.on("error", (err) => {
      console.error("Operation failed:", err.message);
    });

    destinationStream.on("finish", () => {
      console.log("File compressed successfully.");
    });
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
};

export default compressFile;
