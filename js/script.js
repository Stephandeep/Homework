"use strict";

const numberOfFilms = +prompt('How much films do you saw?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('One of the latest film witch you saw?', '');
const b = prompt('Youre ratning?', '');
const c = prompt('One of the latest film witch you saw?', '');
const d = prompt('Youre ratning?', '');

personalMovieDB.movies[a] =  b;
personalMovieDB.movies[c] =  d;

console.log(personalMovieDB);
