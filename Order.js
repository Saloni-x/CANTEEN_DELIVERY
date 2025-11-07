const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    },
    quantity: Number,
    customerName: String,
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('Order', orderSchema);