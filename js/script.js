"use strict";

const numberOfFilms = +prompt('How much films do you saw?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('One of the latest film witch you saw?', ''),
          b = prompt('Youre ratning?', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] =  b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('not many films');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('god level');
} else if (personalMovieDB.count >= 30 ) {
    console.log('you are kinoman');
} else {
    console.log('error');
}

