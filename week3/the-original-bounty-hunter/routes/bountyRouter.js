const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// "Fake data"
let bounties = [
    { firstName: 'Luke', lastName: 'Skywalker', living: true, bountyAmount: 100000, type: 'Jedi', _id: uuidv4() },
    { firstName: 'Obi-Wan', lastName: 'Kenobi', living: true, bountyAmount: 50000, type: 'Jedi', _id: uuidv4() },
    { firstName: 'Darth', lastName: 'Sidious', living: false, bountyAmount: 1000000, type: 'Sith', _id: uuidv4() },
    { firstName: 'Darth', lastName: 'Maul', living: false, bountyAmount: 75000, type: 'Sith', _id: uuidv4() }
];

// Routes
bountyRouter
.get('/', (req, res) => { // GET all
    res.status(200).send(bounties);
}) 

.get('/:bountyId', (req, res) => { // GET one
    const bountyId = req.params.bountyId;
    const singularBounty = bounties.find(bounty => bounty._id === bountyId);

    if (!singularBounty) {
        const error = new Error('This item was not found');
        return next(error);
    }

    res.status(200).send(singularBounty);
}) 

.post('/', (req, res) => { // POST one
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);

    res.status(201).send(newBounty);
}) 

.put('/:bountyId', (req, res) => { // PUT one
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    Object.assign(bounties[bountyIndex], req.body);

    res.status(201).send('Resource successfully updated!');
}) 

.delete('/:bountyId', (req, res) => { // DELETE one
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    bounties.splice(bountyIndex, 1);

    res.send('Resource successfully deleted!');
}) 

module.exports = bountyRouter;