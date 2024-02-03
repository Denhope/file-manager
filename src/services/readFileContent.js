import fs from "fs";

const readFileContent = (filePath) => {
  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    console.log(chunk);
  });

  readStream.on("error", (err) => {
    console.error("Error reading file:", err.message);
  });

  readStream.on("end", () => {
    console.log("File read complete.");
  });
};

export default readFileContent;
