import os from "os";

const getHomeDirectory = () => {
  console.log(`Home directory: ${os.homedir()}`);
};

export default getHomeDirectory;
