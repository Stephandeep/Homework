"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмо Вы уже просмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(
            personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмо Вы уже просмотрели?', '');       
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотреных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length <50) {
        
                personalMovieDB.movies[a] = b;
                console.log('done');    
            } else {
                console.log('error');
                i--;
            }
           
             
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман"); 
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`); 

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некорректрные данные или не их вообще');
            //     i--;
            // } else {
            //     personalMovieDB.geners[i - 1] = genre;   
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

             if (genres === '' || genres == null) {
                console.log('Вы ввели некорректрные данные или не их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');   
                personalMovieDB.genres.sort();
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};