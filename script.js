// Sample array of movie objects

const movies = [
    {Name: "Dune", rating: 8.8, genre: "sci-fi", views: 1000000},
    {Name: "Madame Web", rating: 9, genre: "Superhero", views: 95000},
    {Name: "Gladiator 2", rating: 9.5, genre: "Action", views: 150000},
];

// Function to sort movies by name

function sortByName() {
    movies.sort((a, b) => a.Name.localeCompare(b.Name));
    console.log("Movies sorted by name: ", movies);
}

// Function to sort movies by rating

function sortByRating() {
    movies.sort((a, b) => b.rating - a.rating);
    console.log("Movies srted by rating: ", movies);
}

// Function to sort movies by genre

function categorizeByGenre() {
    // Create an object to store categorized movies

    let categorizedMovies = {};

    movies.forEach((movie) => {
        if (!categorizedMovies[movie.genre]) {
            categorizedMovies[movie.genre] = [movie];
        } else {
            categorizedMovies[movie.genre].push(movie);
        }
    });
    console.log("Movies categorized by genre: ", categorizedMovies);
}

// Function to sort movies by number of views

function sortByViews() {
    movies.some((a, b) => b.views - a.views);
    console.log("Movies sorted by number of views: ", movies);
}

// Functions call

sortByName();
sortByRating();
categorizeByGenre();
sortByViews();