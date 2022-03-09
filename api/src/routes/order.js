const axios = require("axios");
const { Router } = require("express");
const { Order, Client, Product} = require("../db");
const { API_ROOT } = process.env;


const router = Router();

// Obtiene todas las ordenes de todos los cliente
router.get('/all', async (req,res) => {
    try {
        const data = await Order.findAll({
            include: [{
                model: Product,
                attributes: [
                    "product_name", "image"
                ]
            },{
                model: Client,
                attributes: [
                    "name_client", "lastname_client"
                ]
            }],
            order: [
                ["order_date", "DESC"]
            ],
            limit: 10
        })
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

//Obtiene todas las ordenes de un cliente en especifico, solo la informacion de la orden, sin productos.
router.get('/', async (req,res) => {
    try {
        const { id } = req.query;
        const data = await Order.findAll({
        where: {
            clientId: id
        },
        include: {
            model: Product,
            attributes: [
                "product_name", "image", "id"
            ]
        },
        order: [
            ["order_date", "DESC"]
        ]
    })
    res.json(data)
    } catch (error) {
        console.log(error)
    }
})

//Obtiene el detalle de una orden especifica
router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const data = await Order.findByPk(id,
        {include: [{
            model: Product,
            attributes: [
                "product_name", "image","id"
            ]
        },{
            model: Client,
            attributes: [
                "name_client", "lastname_client"
            ]
        }]
        })
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { date_approved, id_client, email, address, status, transaction_amount, id_order, items } = req.body;
        const newOrder = await Order.create({
        id: id_order,
        order_date: date_approved,
        total_amount: transaction_amount,
        email: email,
        address: address,
        status,
        })
        await newOrder.setClient(id_client)
        for(const item of items){
            const product = await Product.findAll({
                where: {
                    id: item.id
                }
            })
            const order_product = await newOrder.addProduct( product , {through: {
                quantity: parseInt(item.quantity),
                price: parseFloat((Number(item.unit_price)).toFixed(2))
            }})
            await axios.put (`${API_ROOT}/api/product/changestock/${item.id}/${item.quantity}`)
        }
        // console.log (items)
        res.send("OK")
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) =>{
    try {
        const { id } = req.params
        const { status } = req.body
        const response = await Order.update({status},{
            where: {
                id
            },
            returning: true
        })
        const data = response[1][0]
        await axios.post (`${API_ROOT}/api/email/changestatus`, data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;