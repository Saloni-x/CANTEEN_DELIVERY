// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const Order = require('../models/Order');

// Update Food
router.put('/food/update/:id', async (req, res) => {
    await Food.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: 'Food Updated' });
});

// Delete Food
router.delete('/food/delete/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Food Deleted' });
});

// Change Order Status
router.put('/order/update/:id', async (req, res) => {
    const { status } = req.body;
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.json({ msg: 'Order Status Updated' });
});

module.exports = router;