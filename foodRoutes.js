// routes/foodRoutes.js

const express = require('express');
const router = express.Router();
const menuItems = require('../data/menu.json'); // JSON file se data import

// GET request to fetch all food items
router.get('/', (req, res) => {
    res.json(menuItems); // JSON data ko response me bhej rahe hain
});

module.exports = router;