"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

//  устаревщий формат
// jonh.__proto__ = soldier;

// Нужно использовать вместо устаревшего способа
// Object.setPrototypeOf(jonh, soldier)

jonh.sayHello();