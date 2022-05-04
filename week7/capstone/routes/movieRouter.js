const express = require('express');
const movieRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// "Fake data"
let movies = [
    { title: "The Godfather", genre: "Crime", budgetOverFiftyMillion: true, stars: ["Marion Brando, ", "Al Pacino, ", "James Caan, ", "Diane Keaton"], yearReleased: 1972, _id: uuidv4() },
    { title: "The Shawshank Redemption", genre: "Drama", budgetOverFiftyMillion: false, stars: ["Tim Robbins, ", "Morgan Freeman, ", "Bob Gunton, ", "William Sadler"], yearReleased: 1994, _id: uuidv4() },
    { title: "Schindler's List", genre: "Biography", budgetOverFiftyMillion: true, stars: ["Liam Neeson, ", "Ralph Fiennes, ", "Ben Kingsley, ", "Caroline Goodall"], yearReleased: 1993, _id: uuidv4() },
    { title: "Raging Bull", genre: "Sport", budgetOverFiftyMillion: false, stars: ["Robert De Niro, ", "Cathy Moriarty, ", "Joe Pesci, ", "Frank Vincent"], yearReleased: 1980, _id: uuidv4() },
    { title: "Casablanca", genre: "Romance", budgetOverFiftyMillion: false, stars: ["Humphrey Bogart, ", "Ingrid Bergman, ", "Paul Henreid, ", "Claude Rains"], yearReleased: 1942, _id: uuidv4() },
    { title: "Citizen Kane", genre: "Mystery", budgetOverFiftyMillion: false, stars: ["Orson Welles, ", "Joseph Cotten, ", "Dorothy Comingore, ", "Agnes Moorehead"], yearReleased: 1941, _id: uuidv4() },
    { title: "Gone with the Wind", genre: "Romance", budgetOverFiftyMillion: true, stars: ["Clark Gable, ", "Vivien Leigh, ", "Thomas Mitchell, ", "Barbara O'Neil"], yearReleased: 1939, _id: uuidv4() },
    { title: "The Wizard of Oz", genre: "Fantasy", budgetOverFiftyMillion: false, stars: ["Judy Garland, " , "Frank Morgan, ", "Ray Bolger, ", "Bert Lahr"], yearReleased: 1939, _id: uuidv4() },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama", budgetOverFiftyMillion: true, stars: ["Jack Nicholson", "Louise Fletcher", "Michael Berryman", "Peter Brocco"], yearReleased: 1975, _id: uuidv4() },
    { title: "Lawrence of Arabia", genre: "Adventure", budgetOverFiftyMillion: false, stars: ["Peter O'Toole, ", "Alec Guiness, ", "Anthony Quinn, ", "Jack Hawkins"], yearReleased: 1962, _id: uuidv4() },
];

// Routes
movieRouter
.get('/', (req, res) => { // GET all
    res.status(200).send(movies);
})

.get('/:movieId', (req, res) => { // GET one
    const movieId = req.params.movieId;
    const singularMovie = movies.find(movie => movie._id === movieId);

    if (!singularMovie) {
        const error = new Error('This item was not found');
        res.status(500);
        return next(error);
    }

    res.status(200).send(singularMovie);
})

.get('/search/genre', (req, res) => { // GET some
    const movieGenre = req.query.genre;
    const filteredMovies = movies.filter(movie => movie.genre === movieGenre);

    res.status(200).send(filteredMovies);
})

.post('/', (req, res) => { // CREATE one
    const newMovie = req.body;
    newMovie._id = uuidv4();
    movies.push(newMovie);

    res.status(201).send(newMovie);
})

.put('/:movieId', (req, res) => { // PUT one
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    Object.assign(movies[movieIndex], req.body);

    res.status(201).send(movies[movieIndex]);
})

.delete('/:movieId', (req, res) => { // DELETE one
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    movies.splice(movieIndex, 1);

    res.status(201).send('Resource successfully deleted!');
})

module.exports = movieRouter;