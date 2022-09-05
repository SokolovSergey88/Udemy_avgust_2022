"use strict";

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка!";
    }

    let volume = 0;
    let area = 0;

    volume = length * length * length;

    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(num) {
    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (num === 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    }

    let cupe = 0;
    if (num > 0 && num <= 4) {
        cupe = 1;
    } else if (num > 4 && num <= 8) {
        cupe = 2;
    } else if (num > 8 && num <= 12) {
        cupe = 3;
    } else if (num > 12 && num <= 16) {
        cupe = 4;
    } else if (num > 16 && num <= 20) {
        cupe = 5;
    } else if (num > 20 && num <= 24) {
        cupe = 6;
    } else if (num > 24 && num <= 28) {
        cupe = 7;
    } else if (num > 28 && num <= 32) {
        cupe = 8;
    } else if (num > 32 && num <= 36) {
        cupe = 9;
    }
    return cupe;
}


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
    if (typeof (minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }

    let hours = Math.floor(minutes / 60);
    let minut = minutes % 60;

    if (minutes < 60) {
        return `Это ${hours} часов и ${minut} минут`;
    }
    if (minutes >= 60 && minutes < 120) {
        return `Это ${hours} час и ${minut} минут`;
    }
    if (minutes >= 120 && minutes < 300) {
        return `Это ${hours} часа и ${minut} минут`;
    }
    if (minutes >= 300 && minutes <= 600) {
        return `Это ${hours} часов и ${minut} минут`;
    }
}
console.log(getTimeFromMinutes(-1));


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(num1, num2, num3, num4) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number' || typeof (num3) !== 'number' || typeof (num4) !== 'number') {
        return 0;
    } else {
        return Math.max(num1, num2, num3, num4);
    }
}