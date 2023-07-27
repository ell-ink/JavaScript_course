"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched recently?", "");

    while(numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched recently?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < numberOfFilms; i++){
        const watchedMovie = prompt("Name the last film you've watched.", "1+1"),
              movieRating = prompt("Rate it, please.", "10");
        if (watchedMovie.length === 0 ||  watchedMovie.length > 50){
            i--;
        }
        if (movieRating.length === 0 ||  movieRating.length > 50){
            i--;
        }
        personalMovieDB.movies[watchedMovie] = movieRating;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB["count"] < 10){
        alert("You've watched not many films.")
    }else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30){
        alert("You've watched many films.")
    }else if (personalMovieDB["count"] > 30){
        alert("You've watched SO many films.")
    }else{
        alert("Error.")
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        const favouriteGenre = prompt(`Name your favourite movie's genre number ${i+1}`, "Drama");
        personalMovieDB.genres[i] = favouriteGenre;
    }
}

writeYourGenres();

function showMyDB(){
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}

showMyDB();
