const { Router } = require("express");
const nodemailer = require ('nodemailer')
const { google }= require ('googleapis')
const router = Router();
const {  Client } = require("../db");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI ,REFRESH_TOKEN} = process.env;

router.post ('/', (req,res)=>{ 
  const {name,apellido,email,status,transaction_amount,id_order,items,address}= req.body
  const oAuth2Client=new google.auth.OAuth2 (CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
  
  oAuth2Client.setCredentials ({refresh_token:REFRESH_TOKEN})

  const sendMail = async ()=>{
    try{
      const accessToken= await oAuth2Client.getAccessToken ()
      const transporter= nodemailer.createTransport ({
        service:"gmail",
        auth:{
          type:'OAuth2',
          user: 'beautify.pg@gmail.com' ,
          clientId: CLIENT_ID,
          clientSecret:CLIENT_SECRET,
          refreshToken:REFRESH_TOKEN,
          accessToken:accessToken

        },   
      })
        
      const mailOptions={
        from: "Beautify <beautify.pg@gmail.com>",
        to: email,
        subject:`Estado de su compra`,
        text:`
Estimad@ ${name} ${apellido} 👋,
Estamos muy contentos que hayas encontrado lo que estabas buscando en nuestra tienda 😊, con el id_orden puedes revisar mas detalles de tu compra en nuestra pagina web.

id_orden: ${id_order},
Estado: ${status},
Dirección de envio: ${address},
Valor total: ${transaction_amount}

!Gracias por comprar en nuestra tienda! 🌸`
      }
      const result= await  transporter.sendMail (mailOptions)
      return result 
    }catch (err){
      console.log (err)
    }
  }
  sendMail ()
  .then (result=> res.status(200).send ('enviado'))
  .catch (error=> console.log (error.message));

})

router.post ('/changestatus',async (req,res)=>{
  const {id,order_date,total_amount,email,address,status,clientId}= req.body
  const  client = await Client.findByPk(clientId,{attributes: ["name_client", "lastname_client"]})
  const oAuth2Client=new google.auth.OAuth2 (CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
  
  oAuth2Client.setCredentials ({refresh_token:REFRESH_TOKEN})

  const sendMail = async ()=>{
    try{
      const accessToken= await oAuth2Client.getAccessToken ()
      const transporter= nodemailer.createTransport ({
        service:"gmail",
        auth:{
          type:'OAuth2',
          user: 'beautify.pg@gmail.com' ,
          clientId: CLIENT_ID,
          clientSecret:CLIENT_SECRET,
          refreshToken:REFRESH_TOKEN,
          accessToken:accessToken

        },   
      })
        
      const mailOptions={
        from: "Beautify <beautify.pg@gmail.com>",
        to: email,
        subject:`Nuevo estado de su compra`,
        text:`
Estimad@ ${client.name_client} ${client.lastname_client} 👋,
El estado de la compra realizada en la fecha ${order_date} ha cambiado, con el id_orden puedes revisar mas detalles de tu compra en nuestra pagina web.

id_orden: ${id},
Estado: ${status},
Dirección de envio: ${address},
Valor total: ${total_amount}

!Gracias por comprar en nuestra tienda! 🌸`
      }
      const result= await  transporter.sendMail (mailOptions)
      return result 
    }catch (err){
      console.log (err)
    }
  }
  sendMail ()
  .then (result=> res.status(200).send ('enviado'))
  .catch (error=> console.log (error.message));
})

module.exports = router;