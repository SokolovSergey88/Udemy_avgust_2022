"use strict";
// let result = '';
// const length = 7;
// for(let i = 1; i < length; i++ ){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }


// console.log(result);

// for(let i = 20; i > 10; i--){
//     console.log(i);
//     if(i === 13){
//         break;
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

console.log('------------------------------');

// let i = 2;
// while(i <= 16){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for(let i = 5; i <= 10; i++){
//     arrayOfNumbers[i - 5] = i;
    
// }

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(arr);
// console.log('-------------------');
// console.log(result);


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++){
//     if( typeof data[i] === 'string'){
//         data[i] = `${data[i]} - done`;
//     }
//     else {
//        data[i] = data[i] * 2;
//     }
// }
// console.log(data);


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for(let i = data.length - 1, j = 0; i >= 0 ; i--, j++) {
    result[j] = data[i];
}
console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }