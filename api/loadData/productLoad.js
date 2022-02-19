const { Product, Category } = require("../src/db.js");
const { products } = require("../src/datamock/products.js");

const loadProducts = () => {
  products?.map(async (p) => {
    var categoryy = await Promise.all(
      p.category.map(
        async (c) =>
          await Category.findAll({
            where: { name_category: c.toLowerCase() },
          })
      )
    );
    categoryy = categoryy.flat();

    let product = await Product.create({
      product_name: p.product_name,
      stock: p.stock,
      cost_by_unit: p.cost_by_unit,
      description: p.description,
      warranty: p.warranty,
      brand: p.brand,
      image: p.image,
      discount: p.discount,
    });

    product.setCategory(categoryy[0].id);
  });
};
module.exports = {
  loadProducts,
};
