const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

// "Fake data"
let todos = [
    { name: 'Walk dogs', description: 'Chore#1', completed: false, _id: uuidv4() },
    { name: 'Do laundry', description: 'Chore#2', completed: false, _id: uuidv4() },
    { name: 'Takeout trash', description: 'Chore#3', completed: false, _id: uuidv4() },
    { name: 'Go shopping', description: 'Chore#4', completed: false, _id: uuidv4() },
    { name: 'Finish homework', description: 'Chore#5', completed: false, _id: uuidv4() }
];

// Routes
todoRouter
.get('/', (req, res) => { // GET all todos
    res.send(todos);
})

.get('/:todoId', (req, res) => { // GET single todo
    const todoId = req.params.todoId;
    const singularTodo = todos.find(todo => todo._id === todoId);

    res.send(singularTodo);
})

.post('/', (req, res) => { // Create todo
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);

    res.send(`Successfully added ${newTodo.name} to the database`);
})

.put('/:todoId', (req, res) => { // Edit todo
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    const updatedTodoResource = Object.assign(todos[todoIndex], req.body);

    res.send('Resource successfully updated!');
}) 

.delete('/:todoId', (req, res) => { // Delete todo
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    todos.splice(todoIndex, 1);

    res.send('Resource successfully deleted!');
})

module.exports = todoRouter;