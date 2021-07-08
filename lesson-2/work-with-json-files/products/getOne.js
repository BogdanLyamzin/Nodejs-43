const getAll = require("./getAll");

const getOne = async (id) => {
  try {
    const products = await getAll();
    const product = products.find((item) => item.id === id);
    if (!product) {
      throw new Error("Неверный id, товар не найден");
    }
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = getOne;
