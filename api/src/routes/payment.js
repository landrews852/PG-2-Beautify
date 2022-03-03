const { Router } = require("express");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN, APP_ROOT } = process.env;
const router = Router();
const axios = require("axios");

router.post("/create_preference", (req, res) => {
  try {
    const data = req.body
    if(data.length>0){
      let cartItems = []
      for(const item of data ){
        const {id, product_name, categoryId, amount, cost_by_unit} = item
        cartItems.push({
          id:id,
          title: product_name,
          currency_id: "PEN",
          picture_url: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          description: "Descripción del Item",
          category_id: categoryId.name_category,
          quantity: amount,
          unit_price: parseInt(cost_by_unit)
        })
      }

      let preference = {
        payer: {
          // email: "charles@hotmail.com",
          // "phone": {
          //   area_code: "",
          //   number: 949128866
          // },
          identification: {
            type: "DNI",
            number: "12345678",
          },   
          address: {
            street_name: "Cuesta Miguel Armendáriz",
            street_number: 1004,
            zip_code: "11020"
          }
        },
        statement_descriptor: "BEAUTIFY",
        items: cartItems,
        back_urls: {
          "success": `http://localhost:3001/api/feedback/success`,
          "failure": `${APP_ROOT}`,
          "pending": `${APP_ROOT}`
        },
        payment_methods: {
          excluded_payment_methods: [
              {
                  "id": "master"
              },
          ],
          excluded_payment_types: [
              {
                  "id": "ticket"
              },
              {
                  "id": "atm"
              },
          ],
          installments: 1
      },
        auto_return: "approved",
        additional_info : `name: Charles`
      };
      mercadopago.preferences.create(preference)
          .then(function (response) {
            console.log(`ID: ${response.body.id}`)
            res.json({
              id: response.body.id
            });
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