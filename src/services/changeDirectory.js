import fs from "fs/promises";
import path from "path";

const changeDirectory = async (newDir) => {
  const resolvedPath = path.resolve(process.cwd(), newDir);
  try {
    const stats = await fs.stat(resolvedPath);
    if (stats.isDirectory()) {
      process.chdir(resolvedPath);
      console.log(`Сurrent directory is ${resolvedPath}`);
    } else {
      console.error("Operation failed: This is no directory");
    }
  } catch (err) {
    console.error("Operation failed:", err.message);
  }
};

export default changeDirectory;
