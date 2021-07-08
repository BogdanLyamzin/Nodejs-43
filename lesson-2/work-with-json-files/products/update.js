const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const update = async (id, updateProduct) => {
  try {
    const products = await getAll();
    const index = products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Неверный id, товар не найден");
    }
    products[index] = { ...products[index], ...updateProduct, id };
    await updateProducts(products);
    return products[index];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
