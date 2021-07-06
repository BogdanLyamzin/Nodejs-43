const fs = require("fs").promises;

(async () => {
  //   try {
  //     // const appendResult = await fs.appendFile("./file.txt", "\nНицше");
  //     // console.log(appendResult);
  //     await fs.appendFile("./file.txt", "Ницше");
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   try {
  //     // const writeResult = await fs.writeFile(
  //     //   "./file.txt",
  //     //   "Не плюйся - никто не носит золото во рту."
  //     // );
  //     // console.log(writeResult);
  //     await fs.writeFile("./file.txt", "Ницше");
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    await fs.appendFile("./file2.txt", "Ницше");
  } catch (error) {
    console.log(error);
  }

  try {
    await fs.writeFile("./file3.txt", "Ницше");
  } catch (error) {
    console.log(error);
  }
})();
