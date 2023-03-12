/*Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – 
мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/


function User1(name) {
    this.name = name;
}

let user = new User1('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // Pete (сработало!)

function User2(name) {
    this.name = name;
}
User2.prototype = {}; // (*)

let user3 = new User2('John');
let user4 = new user4.constructor('Pete');

alert(user4.name); // undefined

let obj2 = new obj3.constructor();