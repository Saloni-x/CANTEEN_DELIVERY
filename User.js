const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'customer'  // 'admin' or 'customer'
    }
});

module.exports = mongoose.model('User', userSchema);