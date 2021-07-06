const fs = require("fs");

// const buffer = Buffer.from("abc");
// console.log(buffer);

fs.readFile("./files/read.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    console.log("Не удалось прочитать файл");
    return;
  }
  //   const text = data.toString();
  // console.log(text);
  console.log(data);
});
