// const fs = require("fs/promises");
const fs = require("fs").promises;

// fs.readFile("./files/read.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

(async () => {
  try {
    const data = await fs.readFile("./files/read.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
