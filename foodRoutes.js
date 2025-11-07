const express = require('express');
const router = express.Router();
const menuItems = require('../data/menu.json'); 

router.get('/', (req, res) => {
    res.json(menuItems); 
});
module.exports = router;
