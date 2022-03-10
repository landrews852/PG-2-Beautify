const { Router } = require("express");
const { Review } = require("../db");
const { Client } = require("../db");
const { Op } = require("sequelize");
const router = Router();
const { verifyjwt, verifytoken } = require("../auth/auth")

router.post("/", verifyjwt, async (req, res) => {
  const { rank, comment } = req.body;
  const { idClient, idProduct } = req.query;
  const userinfo = await verifytoken(req)
  //comentario
  try{
  if (rank && comment && idClient && idProduct) {
    let review = await Review.create({
      rank,
      comment,
    });
    //Creo que el error esta pq no puedo crear clientes ni productos, comentando esta dos lineas funciona
     await review.setClient(idClient);
     await review.setProduct(idProduct);
     return res.json(review);
    }
    }catch(e){
     return res.json(e);
    }
  
});

router.get("/", async (req, res) => {
  const { idClient, idProduct } = req.query;
  try {
    if (idClient && idProduct) {
      let reviews = await Review.findAll({
        where: { productId: idProduct, clientId: idClient },
      });
      return res.json(reviews);
    } else if (idClient) {
      let reviews = await Review.findAll({ where: { clientId: idClient } });
      return res.json(reviews);
    } else if (idProduct) {
      let reviews = await Review.findAll({ 
        where: 
          {  productId: idProduct }, 
          include: { model: Client, attributes: ["name_client"] },        
        }          
      );
      return res.json(reviews);
    } else {
      let reviews = await Review.findAll();
      return res.json(reviews);
    }
  } catch (e) {
    res.json(e);
  }
});

router.get("/user", async (req, res) => {
  const { idClient, idProduct } = req.query;
  let reviews = await Review.findAll({
        where: { productId: idProduct, clientId: idClient },
      });
      return res.json(reviews);    
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Review.destroy({
        where: {
          id,
        },
      });
      return res.send(`Review con ID=${id} eliminado`);
    }
  } catch (e) {
    return res.json("ERROR");
  }
});

module.exports = router;
