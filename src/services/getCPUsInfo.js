import os from "os";

const getCPUsInfo = () => {
  const cpus = os.cpus();
  const tableData = cpus.map((cpu, index) => {
    return {
      CPU: `CPU ${index + 1}`,
      Model: cpu.model,
      Speed: `${cpu.speed} MHz`,
    };
  });

  console.table(tableData);
};

export default getCPUsInfo;
