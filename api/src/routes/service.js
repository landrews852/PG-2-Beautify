const { Router } = require("express");
const { Service, Category } = require("../db");
const { Op } = require("sequelize");

const router = Router();

router.post('/',async (req,res) =>{
    const { name_service, price, description, image, category } = req.body;

    
    try{
    if(name_service && price && description && image && category){
        let service = await Service.create({
            name_service, 
            price, 
            description, 
            image
        }) 
        let categoryy = await Category.findAll({where:{name_category : {[Op.iLike]: category}}})
        await service.setCategory(categoryy[0].id)
        return res.json(service);
    }
    }catch(e){
        console.log(e);
    }
})

router.get('/:category', async(req, res)=>{
    const { category } = req.params;

    try{
    if(category){
        let categoryy = await Category.findAll({where: {name_category : {[Op.iLike]: category}}});
        let services = await Service.findAll({where:{categoryId : categoryy[0].id}});
        return res.json(services);
    }
    }catch(e){
        return res.json("error");

    }
})

router.get('/', async(req,res) =>{

    try{
    let services = await Service.findAll();
    return res.json(services)
    }catch(e){
        console.log(e);
    }
})

module.exports = router;