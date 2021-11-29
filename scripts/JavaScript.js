'use strict';
// const obj = {
//     name: 'Jonny',
//     surname: 'Sins',
//     age: 45,
//     isMarried: false
// };

// let arr = [
//     'car', 'house', '1000000', 'fields'
// ];

// alert ('Hello!');

// const result = confirm('Are you ready?');
// console.log(result);

// const answer = prompt ('Вам есть 18 лет?', '18'); 
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt ('Как ваше имя?', '');
// answers[1] = prompt ('Сколько вам лет?', '');
// answers[2] = prompt ('Откуда вы?', '');

// console.log(typeof(answers));


// const user = 'Ilya';
// alert (`Hello, ${user}`);


// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prival: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените его', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('На сколько оцените его', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);