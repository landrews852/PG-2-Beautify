const { Router } = require("express");
const { Product, Category } = require("../db");
const { filter } = require("./funcionFilter");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allProduct = await Product.findAll({
      include: {
        model: Category,
        attributes: ["name_category"],
      },
    });
    return res.json(allProduct);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/filter", async (req, res) => {
  const { category } = req.query;
  const { brand } = req.query;
  const { min } = req.query;
  const { max } = req.query;

  const condition = filter(category, brand, min, max);
  try {
    const products = await Product.findAll(condition);

    // condition.include = { model: Category, attributes: ["name_category"] };

    res.json(products.length ? products : "no se encontro nada");
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const {
    product_name,
    stock,
    cost_by_unit,
    description,
    category,
    warranty,
    brand,
    image,
    discount,
  } = req.body;

  try {
    if (
      product_name &&
      stock &&
      cost_by_unit &&
      description &&
      category &&
      warranty &&
      brand &&
      image
    ) {
      var categoryy = await Promise.all(
        category.map(
          async (c) => await Category.findAll({ where: { name_category: c } })
        )
      );
      categoryy = categoryy.flat();

      let product = await Product.create({
        product_name,
        stock,
        cost_by_unit,
        description,
        warranty,
        brand,
        image,
        discount,
      });

      product.setCategory(categoryy[0].id);

      return res.json("created");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
