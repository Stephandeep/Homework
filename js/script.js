"use strict";

// const numberOfFilms =  +prompt('Сколько фильмо Вы уже просмотрели?', '', '');
// //  нужно использовать промпт чтобы задать вопрос пользователю

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     geners: [],
//     privan: false
// };
// // здесь мы создавали обьект и соответственно помещаем в него свойства 
// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотреных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
// // тут мы задали пользователю вопрос и ниже получаем ответ 
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// // и всегда в конце добавляем консоль чтобы проверить что все в порядке 
// console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {
        count : numberOfFilms,
        movies :{},
        actors : {},
        geners : [],
        privat : false


};
const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''), 
      d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);