const { v4 } = require("uuid");

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const add = async (obj) => {
  const newProduct = { ...obj, id: v4() };
  try {
    const products = await getAll();
    products.push(newProduct);
    await updateProducts(products);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
