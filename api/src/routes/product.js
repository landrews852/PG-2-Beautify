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
    return res.json(allProduct);
  } catch (err) {
    return res.json(err);
  }
});

router.post("/", async (req, res) => {
  const {
    product_name,
    stock,
    cost_by_unit,
    description,
    category,
    //expiration_date,
    warranty,
    brand,
    image,
    discount
    //country,
  } = req.body;

  try {
    if (
      product_name &&
      stock &&
      cost_by_unit &&
      description &&
      category &&
      //expiration_date &&
      warranty &&
      brand &&
      image &&
      discount
      //country
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
        //expiration_date,
        warranty,
        brand,
        image,
        discount
        //country,
      });

      product.setCategory(categoryy[0].id);

      return res.json(product);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
