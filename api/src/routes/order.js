const { Router } = require("express");
const { Order } = require("../db");

const router = Router();

router.post('/', (req, res) => {
    const { order_date, delivery_date, total_amount, status, products, clientId }
})