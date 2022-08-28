"use strict";
// поверхностное копирование объектов
function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

// Object.assign() соединяет два объекта в один;

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)) // Первым об-т который при-ем, 2 куда

// можно создать копию через Object.assign()

Object.assign({}, add);

//  а для копирования массивов метод slice()

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

// оператор разворота spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloggers'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);