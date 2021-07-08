const fs = require("fs").promises;

const productsPath = require("./productsPath");

const updateProducts = async (products) => {
  const data = JSON.stringify(products);
  await fs.writeFile(productsPath, data);
};

module.exports = updateProducts;
