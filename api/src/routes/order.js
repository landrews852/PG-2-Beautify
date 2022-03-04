const { Router } = require("express");
const { Order, Client} = require("../db");

const router = Router();

router.get('/all', async (req,res) => {
    const data = await Order.findAll({
        include: Client
    })
    res.json(data)
})

router.get('/', async (req,res) => {
    const { id } = req.query;
    const data = await Order.findAll({
        where: {
            clientId: id
        }
    })
    res.json(data)
})

router.post('/', async (req, res) => {
    const { date_approved, id_client, email, status, transaction_amount, id_order, additional_info } = req.body;
    const infoUser = await Client.findOne({
        where: {
            id
        }
    })
    console.log(infoUser.dataValues.id)
    const newOrder = await Order.create({
        order_date: date_approved,
        total_amount: transaction_amount,
        status,
    })
    await newOrder.setClient(infoUser.dataValues.id)
    res.json(newOrder)
})

module.exports = router;