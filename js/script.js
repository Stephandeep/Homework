"use strict";


// const str = "Test";
// // const arr = [1, 2, 4];

// // console.log(str[2]);

// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("t"));

// const logg = "Hello World";
// // console.log(logg.slice(6, 11));


// // const logg = "I love my Mia, so much";
// // console.log(logg.slice(6));

// // console.log(logg.substring(-6));

// console.log(logg.substr(6));


// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//      let num = 10;
//      console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);

// // function calc(a, b) {
// //     return(a+b);
// // }

// // console.log(calc(4,3));
// // console.log(calc(10,3));
// // console.log(calc(5,6));

// function ret() {
//     num = 50;

//     //

//     return(num);
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function() {

//     console.log("Hello");
// };


// logger();


// const calc = (a, b) => a + b;











let numberOfFilms;
//  нужно использовать промпт чтобы задать вопрос пользователю
function start() {
    numberOfFilms =  prompt('Сколько фильмо Вы уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
        numberOfFilms =  prompt('Сколько фильмо Вы уже просмотрели?', '');       
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
// здесь мы создавали обьект и соответственно помещаем в него свойства 

function rememberMyFilms(){
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
}
// rememberMyFilms();

function detectPersonalLevel(){
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
}

// detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYuourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.geners[i] = genre;
    }
}

writeYuourGenres();
console.log(personalMovieDB);
