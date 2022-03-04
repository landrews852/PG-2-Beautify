const { Router } = require("express");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN, APP_ROOT } = process.env;
const router = Router();
const axios = require("axios");

router.post("/create_preference", (req, res) => {
  try {
    const data = req.body.productos
    const user = req.body.user


    console.log ('user',user)
    console.log ('productos',data)
    if(data.length>0){
      let cartItems = []
      for(const item of data ){
        const {id, product_name, categoryId, amount, cost_by_unit} = item
        cartItems.push({
          id: id,
          title: product_name,
          currency_id: "PEN",
          picture_url:
            "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          description: "Descripción del Item",
          category_id: categoryId.name_category,
          quantity: amount,
<<<<<<< HEAD
          unit_price: parseInt(cost_by_unit),
        });
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
            zip_code: "11020",
          },
=======
          unit_price: parseFloat(cost_by_unit)
        })
      }

      let preference = {
        payer:{

          email:'test_user_49993619@testuser.com',
>>>>>>> 73ba75aa3802fff6cd15736c5acca82b39dba9a9
        },
        statement_descriptor: "BEAUTIFY",
        items: cartItems,
        back_urls: {
<<<<<<< HEAD
          success: `http://localhost:3001/api/feedback/success`,
          failure: `${APP_ROOT}`,
          pending: `${APP_ROOT}`,
=======
          "success": `http://localhost:3001/api/feedback/success`,
          "failure": `http://localhost:3001/api/feedback/error`,
          /* "pending": `${APP_ROOT}` */
>>>>>>> 73ba75aa3802fff6cd15736c5acca82b39dba9a9
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
<<<<<<< HEAD
        additional_info: `name: Charles`,
=======
        additional_info : `name: Charles`,
        metadata:{
        name:user.name_client,
        id:user.id,
        address: user.address
      }
>>>>>>> 73ba75aa3802fff6cd15736c5acca82b39dba9a9
      };
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
          console.log(`ID: ${response.body.id}`);
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
