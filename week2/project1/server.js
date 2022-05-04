const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    { name: 'Andrew', location: 'New York' },
    { name: 'Nick', location: 'Massachusets' },
    { name: 'Dylan', location: 'Hawaii' }
];

let movies = [
    { name: 'The Shawshank Redemption', year: 1994 },
    { name: 'The Godfather', year: 1972 },
    { name: 'The Dark Knight', year: 2008 }
];

let actors = [
    { name: 'Jack Nicholson', age: 84 },
    { name: 'Tom Hanks', age: 65 },
    { name: 'Morgan Freeman', age: 84 }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.get('/actors', (req, res) => {
    res.send(actors);
});

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});