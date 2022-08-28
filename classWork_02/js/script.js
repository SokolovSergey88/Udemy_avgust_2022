'use strict';

const arr = [2,13,26,8,10];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

// сортирует как строки
arr.sort();
console.log(arr);

// но можно передать callback для сортировки по возростанию
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
console.log(arr);