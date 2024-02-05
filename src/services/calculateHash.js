import crypto from "crypto";
import fs from "fs";

const calculateHash = (filePath) => {
  try {
    const hash = crypto.createHash("sha256");
    const readStream = fs.createReadStream(filePath);

    readStream.on("data", (data) => {
      hash.update(data);
    });

    readStream.on("end", () => {
      console.log(`SHA256 hash: ${hash.digest("hex")}`);
    });

    readStream.on("error", (err) => {
      console.error("Operation failed:", err.message);
    });
  } catch (err) {
    console.error("An error occurred:", err.message);
  }
};

export default calculateHash;
