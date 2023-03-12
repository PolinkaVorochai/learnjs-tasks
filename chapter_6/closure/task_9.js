/*
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum(a) {
    let sum = a;
    return function (b) {
        sum += b;
        return sum;
    }
}

let closure = sum(2);
alert(closure(3));