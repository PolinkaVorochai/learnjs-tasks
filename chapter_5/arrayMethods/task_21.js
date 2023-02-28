/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice() //создать копию
        .sort(compareNumeric); //отсортировать копию
}

//для сорттровки чисел, так как по умолчанию будет сортировка строк
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)