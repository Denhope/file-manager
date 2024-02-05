// listDirectory.js
import fs from "fs/promises";
import path from "path";

const listDirectory = async () => {
  try {
    const files = await fs.readdir(process.cwd(), { withFileTypes: true });
    const tableData = files
      .map((file) => {
        const type = file.isDirectory() ? "directory" : "file";
        return { Name: file.name, Type: type };
      })
      .sort((a, b) => {
        if (a.Type === "directory" && b.Type !== "directory") {
          return -1;
        } else if (a.Type !== "directory" && b.Type === "directory") {
          return 1;
        } else {
          return a.Name.localeCompare(b.Name);
        }
      });

    console.table(tableData);
  } catch (err) {
    console.error("Operation failed:", err.message);
  }
};

export default listDirectory;
