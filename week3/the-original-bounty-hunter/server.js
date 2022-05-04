const express = require('express');
const morgan = require('morgan');

const bountyRouter = require('./routes/bountyRouter');

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/bounties', bountyRouter);

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

// Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});