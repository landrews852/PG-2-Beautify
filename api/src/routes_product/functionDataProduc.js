const { Product, Category } = require("../db.js");

const getDbProducts = async () => {
  try {
    return await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["name_category"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getDbProducts,
};
