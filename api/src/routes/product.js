const { Router } = require("express");
const { Product, Category } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allProduct = await Product.findAll({
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
    res.json(allProduct);
  } catch (err) {
    return err;
  }
});

router.post("/", async (req, res) => {
  const {
    product_name,
    stock,
    cost_by_unit,
    description,
    category,
    expiration_date,
    warranty,
    brand,
    image,
    country,
  } = req.body;

  try {
    if (
      product_name &&
      stock &&
      cost_by_unit &&
      description &&
      category &&
      expiration_date &&
      warranty &&
      brand &&
      image &&
      country
    ) {
      console.log(req.body);
      let product = await Product.create({
        product_name,
        stock,
        cost_by_unit,
        description,
        expiration_date,
        warranty,
        brand,
        image,
        country,
      });

      var categoryy = await Promise.all(
        category.map(
          async (c) => await Category.findAll({ where: { name: c } })
        )
      );
      categoryy = categoryy.flat();
      await product.setCategories(categoryy);
      return res.json(product);
    }
  } catch (e) {
    return res.json("ERROR");
  }
});

module.exports = router;
