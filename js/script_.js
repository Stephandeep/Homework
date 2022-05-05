'use strict';

function createCounter () {
    let counter = 0;

    const myFunction = function(){
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber();debugger 

// // To String
// // 1)

// console.log(typeof(String(null))); 

// // 2)

// console.log(typeof(5 + '')); 


// const  num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // To Number

// console.log(typeof(Number('4'))); 

// // 2)
// console.log(typeof(Number(+'5'))); 


// console.log(typeof(parseInt("15px", 10))); 


// let answ = +prompt("Hello", "");

// // To Boolean

// // 0, '', null, undefined, NaN;
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// // 2)

// console.log(typeof(Boolean('4'))); 

// // 3)

// console.log(typeof(!!"44444")); 

// // let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);


// const solder = {
//     helth: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello");
//     }
// };

// const John = Object.create(solder);

// // const John = {
// //     helth: 100,
// // };

// // John.__proto__ = solder;

// // Object.setPrototypeOf(John, solder);

// // console.log(John.armor);
// John.sayHello();


// let a = 5;
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //Ссылку

// copy.a = 10; 

// console.log(copy);
// console.log(obj);

// function copy (mainObject) {
//     let objCopy = {};

//     let key;
//     for (key in mainObject) {
//         objCopy[key] = mainObject[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();


// newArray[1] = 'dksdflsfsd';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['worldpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'VK', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// const arr = [1, 2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a -b; 
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item}  внутри массива ${arr}`);
// }); 

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// const options = {
//     name: 'test',
//     wisth: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// // let counter  = 0; 
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
    
// // }
// // console.log(counter);

// // console.log(Object.keys(options).length);

// // const home = {
// //     kitchen: 'red',
// //     badroom: {
// //         color: 'black',
// //         height: 2500,
// //         wisth: 5000,
// //         window: 'two'
// //     },
// //     toilet: 'small',
// //     garrage: 1


// // };

// options.makeTest();

// const {border, bg} = options.colors;


// console.log(Object.keys(home).length);

// function first () {
// //  Do something
// setTimeout(function(){
//     console.log(1);
// }, 500);

// }

// function second() {
//     console.log(2);

// }
// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('ya proshel JS');
// }

// learnJS('JS', done);

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





