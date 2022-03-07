const { Router } = require("express");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN, API_ROOT } = process.env;
const router = Router();
const axios = require("axios");

router.post("/create_preference", (req, res) => {
  try {
    const data = req.body.productos;
    const user = req.body.user;

    // console.log("user", user);
    // console.log("productos", data);
    if (data.length > 0) {
      let cartItems = [];
      for (const item of data) {
        const { id, product_name, categoryId, amount, cost_by_unit, total } =
          item;
        cartItems.push({
          id: id,
          title: product_name,
          currency_id: "PEN",
          picture_url:
            "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          description: "Descripción del Item",
          category_id: categoryId.name_category,
          quantity: amount,
          unit_price: parseFloat(total),
        });
      }

      let preference = {
        payer: {
          email: "test_user_49993619@testuser.com",
        },
        statement_descriptor: "BEAUTIFY",
        items: cartItems,
        back_urls: {
          success: `${API_ROOT}/api/feedback/success`,
          failure: `${API_ROOT}/api/feedback/error`,
          /* "pending": `${APP_ROOT}` */
        },
        payment_methods: {
          excluded_payment_methods: [
            {
              id: "master",
            },
          ],
          excluded_payment_types: [
            {
              id: "ticket",
            },
            {
              id: "atm",
            },
          ],
          installments: 1,
        },
        auto_return: "approved",
        additional_info: `name: Charles`,
        metadata: {
          id: user.id,
          email: user.email,
          address: user.address,
        },
      };
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
          // console.log(`ID: ${response.body.id}`);
          res.json({
            id: response.body.id,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // res.json(`${ACCESS_TOKEN}: este es el access_token y ${APP_ROOT} es la dirección`)
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
