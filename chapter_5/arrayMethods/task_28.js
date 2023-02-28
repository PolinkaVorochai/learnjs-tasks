/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) { //если в результирующем массиве нет такого элемент - то добавить
            result.push(str);
        }
    }
    return result; //вернуть массив
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O
