import os from "os";

const getCPUArchitecture = () => {
  console.log(`CPU architecture: ${os.arch()}`);
};

export default getCPUArchitecture;
