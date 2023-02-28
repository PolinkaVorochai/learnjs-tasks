/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    for (let promp in object) {
        if (typeof object[promp] == 'number') {
            object[promp] *= 2;
        }
    }
}

function printMenu(object) {
    for (let promp in object) {
        alert(promp + ' ' + object[promp]);
    }
}

multiplyNumeric(menu);
printMenu(menu);




