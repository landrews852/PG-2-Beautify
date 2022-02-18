const { Router } = require("express");
const { Product, Category, Op } = require("../db");
const { filter } = require("./funcionFilter");

const router = Router();

router.get("/", async (req, res) => {
  const { categoryId } = req.query;
  const { brand } = req.query;
  const { min } = req.query;
  const { max } = req.query;

  const condition = filter(categoryId, brand, min, max);
  try {
    condition.include = { model: Category, attributes: ["name_category"] };
    const products = await Product.findAll(condition);

    res.json(products.length ? products : "nothing found");
  } catch (err) {
    res.json(err);
  }
});
router.get("/discounts", async (req, res) => {
  try {
    const discounts = await Product.findAll({
      include: { model: Category, attributes: ["name_category"] },
      where: {
        discount: { [Op.gt]: 0 },
      },
    });
    res.json(discounts.length ? discounts : "We don't have discounts");
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
