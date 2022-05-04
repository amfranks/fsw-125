const express = require('express');
const morgan = require('morgan');

const movieRouter = require('./routes/movieRouter');

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/movies', movieRouter);

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
});

// Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});