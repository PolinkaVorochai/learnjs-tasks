/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
*/

let user = {
    name: "Василий Иванович",
    age: 35
};


let user1 = JSON.parse(JSON.stringify(user));
