"use strict";

// callback function -----------------------------------------------

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// first();
// second();


function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

// learnJS('javaScript', done);


// Объекты , деструктуризация объектов -----------------------------

function a1() {
    const options = {
        name: 'test',
        width: 1024,
        height: 1024,
        colors: {
            border: 'black',
            bg: 'red'
        }
    };

    // console.log(options.name);
    // delete options.name;
    // console.log(options);

    for (let key in options) {
        if (typeof(options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`свойство ${i} имеет значение ${options[key][i]}`);
            }
        } else {
            console.log(`свойство ${key} имеет значение ${options[key]}`);
        }
    } 
}

// a1();

// Методы объектов------------------------------------

function a2() {
    const options = {
        name: 'test',
        width: 1024,
        height: 1024,
        colors: {
            border: 'black',
            bg: 'red'
        },
        makeTest: function() {
            console.log("Test");
        }
    };

    options.makeTest();
    console.log(Object.keys(options).length);

    // деструктуризация--------------------------

    const {border, bg} = options.colors;
    console.log(border);

}

// a2();