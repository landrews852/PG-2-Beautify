const { Router } = require("express");
const { ACCESS_TOKEN, APP_ROOT, API_ROOT } = process.env;
const router = Router();
const axios = require("axios");

router.get("/success", async (req,res) => {
  try{
    const { payment_id } = req.query;
    const response= await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}/?access_token=${ACCESS_TOKEN}`)
    const {date_approved,metadata,status,transaction_amount,order, additional_info, }= response.data
    const orderPost={
      date_approved,
      id_client:metadata.id,
      email:metadata.email,
      status,
      transaction_amount,
      id_order:order.id,
      items: additional_info.items,
      address: metadata.address
    }
    await axios.post (`${API_ROOT}/api/order`,orderPost)   
    res.redirect(`${APP_ROOT}/panel?true`)
  }catch (err){
    res.json (err)
  }
    
  })



router.get('/error', async(req,res)=>{
  res.redirect (`${APP_ROOT}/cart`)

  })


module.exports = router;