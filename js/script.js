"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
     let num = 10;
     console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return(a+b);
}

console.log(calc(4,3));
console.log(calc(10,3));
console.log(calc(5,6));

function ret() {
    num = 50;

    //

    return(num);
}

const anotherNum = ret();
console.log(anotherNum);




















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

// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотреных фильмов?', ''),
// //           b = prompt('На сколько оцените его?', '');
    
// //     if (a != null && b != null && a != '' && b != '' && a.length <50) {

// //         personalMovieDB.movies[a] = b;
// //         console.log('done')    
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
   
     
// // }

// // if (personalMovieDB.count < 10) {
// //     console.log("Просмотрено довольно мало фильмов");
// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
// //     console.log("Вы классический зритель");
// // } else if (personalMovieDB.count >= 30) {
// //     console.log("Вы киноман");
// // } else {
// //     console.log("Произошла ошибка");
// // }


// console.log(personalMovieDB);
