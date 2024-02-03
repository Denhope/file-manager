import path from "path";

import readline from "readline";
import exitFileManager from "./services/exitFileManager.js";
import printWorkingDirectory from "./services/printWorkingDirectory.js";
import getCPUsInfo from "./services/getCPUsInfo.js";
import getEOL from "./services/getEOL.js";
import getHomeDirectory from "./services/getHomeDirectory.js";
import getCurrentUsername from "./services/getCurrentUsername.js";
import getCPUArchitecture from "./services/getCPUArchitecture.js";
import changeDirectory from "./services/changeDirectory.js";
import listDirectory from "./services/listDirectory.js";
import readFileContent from "./services/readFileContent.js";
import calculateHash from "./services/calculateHash.js";
import compressFile from "./services/compressFile.js";
import decompressFile from "./services/decompressFile.js";
import createEmptyFile from "./services/createEmptyFile.js";
import renameFile from "./services/renameFile.js";
import copyFile from "./services/copyFile.js";
import moveFile from "./services/moveFile.js";
import deleteFile from "./services/deleteFile.js";

const startCLI = () => {
  const usernameFlag = "--username=";
  const usernameArg = process.argv.find((arg) => arg.startsWith(usernameFlag));
  const username = usernameArg
    ? usernameArg.substring(usernameFlag.length)
    : "default_username";

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`Welcome to the File Manager, ${username}!`);

  printWorkingDirectory();
  rl.prompt();
  rl.on("line", (line) => {
    const args = line.trim().split(" ");
    const command = args[0];
    switch (command) {
      case "up":
        if (process.cwd() !== path.parse(process.cwd()).root) {
          process.chdir("..");
        }
        break;
      case "cd":
        changeDirectory(args[1]);
        break;
      case "ls":
        listDirectory();
        break;
      case "cat":
        if (args.length < 2) {
          console.error("File path not specified");
          break;
        }
        readFileContent(args[1]);
        break;
      case "add":
        createEmptyFile(args[1]);
        break;

      case "rm":
        deleteFile(args[1]);
        break;

      case "rn":
        if (args.length < 3) {
          console.error(
            "There are not enough arguments for the renameFile command."
          );
          break;
        }
        renameFile(args[1], args[2]);
        break;

      case "cp":
        if (args.length < 3) {
          console.error(
            "There are not enough arguments for the copyFile command."
          );
          break;
        }
        copyFile(args[1], args[2]);
        break;
      case "mv":
        if (args.length < 3) {
          console.error(
            "There are not enough arguments for the moveFile command."
          );
          break;
        }
        moveFile(args[1], args[2]);
        break;

      case "os":
        if (args[1] === "--EOL") {
          getEOL();
        } else if (args[1] === "--cpus") {
          getCPUsInfo();
        } else if (args[1] === "--homedir") {
          getHomeDirectory();
        } else if (args[1] === "--username") {
          getCurrentUsername();
        } else if (args[1] === "--architecture") {
          getCPUArchitecture();
        } else {
          console.error("Invalid input");
        }
        break;

      case "hash":
        if (args.length < 2) {
          console.error("File path not specified");
          break;
        }
        calculateHash(args[1]);
        break;

      case "compress":
        if (args.length < 3) {
          console.error(
            "There are not enough arguments for the compress command."
          );
          break;
        }
        compressFile(args[1], args[2]);
        break;

      case "decompress":
        if (args.length < 3) {
          console.error(
            "There are not enough arguments for the decompress command."
          );
          break;
        }
        decompressFile(args[1], args[2]);
        break;
      case ".exit":
        exitFileManager();
        break;
      default:
        console.error("Invalid input");
    }
    printWorkingDirectory();
  }).on("close", () => {
    exitFileManager();
  });
};

startCLI();
