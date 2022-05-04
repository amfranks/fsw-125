const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid');

const todoRouter = require('./routes/todoRouter');

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/todos', todoRouter);

// Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});