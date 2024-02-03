import os from "os";

const getCurrentUsername = () => {
  console.log(`Current username: ${os.userInfo().username}`);
};

export default getCurrentUsername;
