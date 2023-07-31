"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB["count"] = +prompt("How many films have you watched recently?", "");
    
        while(personalMovieDB["count"] === '' || personalMovieDB["count"] == null || isNaN(personalMovieDB["count"] )) {
            personalMovieDB["count"] = +prompt("How many films have you watched recently?", "");
        }
    },
    rememberMyFilm: function() {
        for(let i = 0; i < personalMovieDB["count"]; i++){
            const watchedMovie = prompt("Name the last film you've watched.", "1+1").trim(),
                  movieRating = prompt("Rate it, please.", "10").trim();
            if (watchedMovie.length === 0 ||  watchedMovie.length > 50){
                i--;
            }
            if (movieRating.length === 0 ||  movieRating.length > 50){
                i--;
            }
            personalMovieDB.movies[watchedMovie] = movieRating;
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB["count"] < 10){
            alert("You've watched not many films.")
        }else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30){
            alert("You've watched many films.")
        }else if (personalMovieDB["count"] > 30){
            alert("You've watched SO many films.")
        }else{
            alert("Error.")
        }
    }, 
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++){
            const favouriteGenre = prompt(`Name your favourite movie's genre number ${i+1}`, "Drama");
            if (favouriteGenre === "" || favouriteGenre == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = favouriteGenre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre number ${i+1}: ${item}`)
        });
    },
    showMyDB: function() {
        if (personalMovieDB["privat"] === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB["privat"]) {
            personalMovieDB["privat"] = false;
        }
        else {
            personalMovieDB["privat"] = true;
        }
    }
};




