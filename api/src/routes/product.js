const { Router } = require("express");
const { Product, Category, Op } = require("../db");
const { filter } = require("./funcionFilter");

const router = Router();

router.get("/", async (req, res) => {
  const { categoryId } = req.query;
  const { brand } = req.query;
  const { min } = req.query;
  const { max } = req.query;
  const { name } = req.query;
  const { orderName } = req.query;
  const { orderPrice } = req.query;

  if(name){
    try{
    let product = await Product.findAll({where: {product_name : {[Op.substring] : name.toLowerCase()}}, include : { model: Category, attributes: ["name_category"] }})
    res.json(product.length ? product : "nothing found");
  }catch(e){
    return res.json(e)
  }
  }else{
  const condition = filter(categoryId, brand?.toLowerCase(), min, max);
  try {
    condition.include = { model: Category, attributes: ["name_category"] };
    let products;
    if(orderName){
      condition.order = [['product_name', orderName]];
      products = await Product.findAll(condition);
    }else if(orderPrice){
      condition.order = [['cost_by_unit', orderPrice]];
      products = await Product.findAll(condition);  
    }else{
      products = await Product.findAll(condition);
    } 
    res.json(products.length ? products : "nothing found");
  } catch (err) {
    res.json(err);
  }
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
          async (c) => await Category.findAll({ where: { name_category: c.toLowerCase() } })
        )
      );
      categoryy = categoryy.flat();

      let product = await Product.create({
        product_name : product_name.toLowerCase(),
        stock,
        cost_by_unit,
        description,
        warranty,
        brand : brand.toLowerCase(),
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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      product_name,
      stock,
      cost_by_unit,
      description,
      warranty,
      brand,
      image,
      discount,
    } = req.body;
    let data = {};
    if (product_name !== undefined) data.product_name = product_name;
    if (stock !== undefined) data.stock = stock;
    if (cost_by_unit !== undefined) data.cost_by_unit = cost_by_unit;
    if (description !== undefined) data.description = description;
    if (warranty !== undefined) data.warranty = warranty;
    if (brand !== undefined) data.brand = brand;
    if (image !== undefined) data.image = image;
    if (discount !== undefined) data.discount = discount;
    const updateProduct = await Product.update(data, {
      where: {
        id,
      },
      returning: true,
    });
    res.json(updateProduct[1]);
  } catch (err) {
    res.json(err);
  }
});

router.get('/:id', async(req,res) =>{

  const { id } = req.params;

  try{
    if(id){
    let product = await Product.findByPk(id, {include:{model: Category, attributes: ["name_category"]}});
    return res.json(product)
    }
  }catch(e){
    return res.json(e)
  }

})

module.exports = router;
