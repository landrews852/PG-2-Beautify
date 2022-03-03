const { Router } = require("express");
const { ACCESS_TOKEN, APP_ROOT } = process.env;
const router = Router();
const axios = require("axios");

router.get("/success", async (req,res) => {
    const { payment_id } = req.query;
    const response= await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}/?access_token=${ACCESS_TOKEN}`)
    res.redirect("http://localhost:3000/order")
  })

module.exports = router;