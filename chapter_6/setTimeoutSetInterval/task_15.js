/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

//Вариант 1
function printNumbers1(from, to) {

    setInterval(() => {

        for (let i = from; i <= to; i++) {
            alert(i + ' ');
        }

    }, 1000);
}

printNumbers1(1, 9);

//Вариант 2

function printNumbers2(from, to) {
    let i = from;

    setTimeout(function go() {
        alert(i);
        if (i <= to) {
            setTimeout(go, 1000);
        }
        i++;
    }, 1000);
}

printNumbers2(1, 9);