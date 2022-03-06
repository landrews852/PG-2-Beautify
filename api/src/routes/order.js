const axios = require("axios");
const { Router } = require("express");
const { Order, Client, Product} = require("../db");
const { API_ROOT } = process.env;


const router = Router();

router.get('/all', async (req,res) => {
    try {
        const data = await Order.findAll({
            include: {
                model: Product,
                attributes: [
                    "product_name", "image"
                ]
            }
        })
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

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
                "product_name", "image"
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
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;