const { Router } = require("express");
const router = Router();
const { getDbProducts } = require("./functionDataProduc");

const PRODUCTS = "/products";

router.get(PRODUCTS, async (req, res) => {
  const allProducts = await getDbProducts();
  try {
    res.status(200).send(allProducts);
  } catch (err) {
    return err;
  }
});
