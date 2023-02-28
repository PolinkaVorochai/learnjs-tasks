/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.


*/
let object = {
    name: 'I am object'
};

function A() { return object };
function B() { return object };

let a = new A();
let b = new B();

alert(a == b); // ответ: это возможно, так как объекты a и b ссылаются на один и тот же объект object,
//значит при выполнении сравнения ссылки одинаковые, ответ true