const express = require('express');
const thingRouter = express.Router();

// "Fake data"
const inventoryItems = [
    { name: 'banana', type: 'food', price: 200,  },
    { name: 'pants', type: 'clothing', price: 2500, },
    { name: 'basket ball', type: 'toy', price: 1000, },
    { name: 'rockem sockem robots', type: 'toy', price: 1500, },
    { name: 'shirt', type: 'clothing', price: 800, },
    { name: 'soup', type: 'food', price: 300, },
    { name: 'flour', type: 'food', price: 100, }
];

// Routes
thingRouter
.get('/', (req, res) => { // GET all items
    res.status(200).send(inventoryItems);
})

.get('/search/type', (req, res) => { // GET some
    const thingType = req.query.type;
    const filteredThings = inventoryItems.filter(item => item.type === thingType);

    res.status(200).send(filteredThings);
})

module.exports = thingRouter;