"use strict";
const numberOfFilms =  +prompt('Сколько фильмо Вы уже просмотрели?', '', '');
//  нужно использовать промпт чтобы задать вопрос пользователю

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privan: false
};
// здесь мы создавали обьект и соответственно помещаем в него свойства 

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length <50) {

        personalMovieDB.movies[a] = b;
        console.log('done')    
    } else {
        console.log('error');
        i--;
    }
   
     
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
