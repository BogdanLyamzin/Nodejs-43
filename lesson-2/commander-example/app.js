const { program } = require("commander");

program
  .option("-a, --action <type>")
  .option("-u, --update")
  .option("-p, --price <type>")
  .option("-n, --name [type]");

program.parse(process.argv);

const options = program.opts();

if (options.action) {
  switch (options.action) {
    case "add":
      const { price, name } = options;
      const newProduct = {
        price,
        name,
      };
      break;
  }
}
