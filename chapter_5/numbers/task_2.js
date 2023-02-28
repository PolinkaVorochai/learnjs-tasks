/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
P.S. Есть «подводный камень» при работе с типами.
*/

let numeric_1 = prompt('первое число?');
let numeric_2 = prompt('второе число?');

function summa(numeric_1, numeric_2) {
    return +numeric_1 + +numeric_2;
}

alert(summa(numeric_1, numeric_2));