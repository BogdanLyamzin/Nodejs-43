const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
console.log(argv);

if (argv.action) {
  switch (argv.action) {
    case "add":
      const newProduct = {
        name: argv.n,
        price: argv.p,
      };
      break;
  }
}
