const { Router } = require("express");
const { Review } = require("../db");
const { Op } = require("sequelize");

const router = Router();

router.post('/',async (req,res) =>{
    const { rank, comment } = req.body;
    const { idClient, idProduct } = req.query;
   //comentario
    if(rank&&comment&&idClient&&idProduct){
        let review = await Review.create({
            rank,
            comment
        })
        //Creo que el error esta pq no puedo crear clientes ni productos, comentando esta dos lineas funciona
        // await review.setClient(idClient);
        // await review.setProduct(idProduct);
        return res.json(review);
    }

})

router.get('/', async (req,res) =>{
    const { idClient, idProduct } = req.query;
    try{
    if(idClient&&idProduct){
        let reviews = await Review.findAll({where:{productId:idProduct, clientId:idClient}});
        return res.json(reviews);
    }else if(idClient){
        let reviews = await Review.findAll({where:{clientId:idClient}});
        return res.json(reviews);
    }else if(idProduct){
        let reviews = await Review.findAll({where:{productId:idProduct}});
        return res.json(reviews);
    }else{
        let reviews = await Review.findAll();
        return res.json(reviews);
    }
    }catch(e){
        res.json("ERROR")
    }
})

router.delete('/:id', async(req,res) =>{
    const { id } = req.params;
    try{
    if(id){
    await Review.destroy({
        where: {
          id
        }
      })
      return res.send(`Review con ID=${id} eliminado`)
    }
    }catch(e){
        return res.json('ERROR')
    }
    
})


module.exports = router;