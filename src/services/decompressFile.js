import zlib from "zlib";
import fs from "fs";
import { once } from "events";

const decompressFile = async (source, destination) => {
  try {
    const brotli = zlib.createBrotliDecompress();
    const sourceStream = fs.createReadStream(source);
    const destinationStream = fs.createWriteStream(destination);

    // Подключение потоков
    sourceStream.pipe(brotli).pipe(destinationStream);

    // Ожидание завершения операций чтения и записи
    await once(sourceStream, "end");
    await once(destinationStream, "finish");

    console.log("File decompressed successfully.");
  } catch (error) {
    console.error("Error decompressing file:", error);
  }
};

export default decompressFile;
