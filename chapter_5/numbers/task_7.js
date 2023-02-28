/*
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max 
(включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Можно использовать решение из предыдущей задачи.
*/

function randomInteger(min, max) {
    return Math.round((Math.random() * (max - min + 1) + min - 0.5));
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));

/*Любое число из интервала min..max должно появляться с одинаковой вероятностью
Чтобы выполнить данный пункт условия задачи, нужно выровнять интервалы. Например:
(min-0.5) до (max+0.5) и использовать метод  Math.round().
*/
