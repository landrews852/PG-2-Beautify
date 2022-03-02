const { Router } = require("express");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN, APP_ROOT } = process.env;
const router = Router();

router.post("/create_preference", (req, res) => {
  try {
    const data = req.body
    if(data.length>0){
      let cartItems = []
      for(const item of data ){
        const {id, product_name, categoryId, amount, cost_by_unit} = item
        console.log(cost_by_unit)
        cartItems.push({
          // "id": "item-ID-1234",
          "id":id,
          // "title": "Mi producto",
          "title": product_name,
          "currency_id": "COP",
          "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          "description": "Descripción del Item",
          // "category_id": "art",
          "category_id": categoryId.name_category,
          // "quantity": 1,
          "quantity": amount,
          // "unit_price": 75.76
          "unit_price": parseInt(cost_by_unit)
        })
      }

      let preference = {
        statement_descriptor: "BEAUTIFY",
        items: cartItems,
        back_urls: {
          "success": `${APP_ROOT}`,
          "failure": `${APP_ROOT}`,
          "pending": `${APP_ROOT}`
        },
        payment_methods: {
          "excluded_payment_methods": [
              {
                  "id": "master"
              }
          ],
          "excluded_payment_types": [
              {
                  "id": "ticket"
              },
              {
                  "id": "atm"
              }
          ],
          "installments": 1
      },
        auto_return: "approved",
      };

      mercadopago.preferences.create(preference)
          .then(function (response) {
            res.json({
              id: response.body.id
            });
            // res.json(response)
          }).catch(function (error) {
            console.log(error);
          });
    }
    // res.json(`${ACCESS_TOKEN}: este es el access_token y ${APP_ROOT} es la dirección`)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;