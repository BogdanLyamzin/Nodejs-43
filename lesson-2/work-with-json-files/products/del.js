const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const del = async (id) => {
  try {
    const products = await getAll();
    const delProduct = products.find((item) => item.id === id);
    if (!delProduct) {
      throw new Error("Товар с таким id не найден");
    }
    const newProducts = products.filter((item) => item.id !== id);
    await updateProducts(newProducts);
    return delProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = del;
