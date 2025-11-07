const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    const { foodId, quantity, customerName } = req.body;
    const order = new Order({ foodId, quantity, customerName });
    await order.save();
    res.json({ msg: 'Order placed successfully!' });
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate('foodId');
    res.json(orders);
};