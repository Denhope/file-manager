import readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

const exitFileManager = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);

  process.exit(0);
};

export default exitFileManager;
