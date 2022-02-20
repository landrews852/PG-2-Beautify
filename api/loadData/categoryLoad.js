const { Category } = require("../src/db.js");
const { categories } = require("../src/datamock/categories.js");

const loadCategories = async () => {
  try {
    await Category.bulkCreate(categories);
  } catch (error) {
    return error;
  }
};
module.exports = {
  loadCategories,
};
