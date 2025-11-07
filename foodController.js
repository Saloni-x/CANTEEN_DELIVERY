// controllers/foodController.js

const Food = require('../models/Food');

exports.getFoods = async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
};

exports.addFood = async (req, res) => {
    const { name, price, description, image } = req.body;
    const food = new Food({ name, price, description, image });
    await food.save();
    res.json({ msg: 'Food added successfully!' });
};


exports.addMultipleFoods = async (req, res) => {
    try {
        await Food.insertMany(req.body);
        res.json({ msg: 'Multiple foods added successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error adding foods' });
    }
};