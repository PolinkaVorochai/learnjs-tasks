/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно.
*/

function camelize(str) {
    return str.split('-') //сплитаем строку в массив по разделителю -
        .map((item, index) => { //к каждому элементу массива применяем функцию: вернуть первый символ 
            //элемента в верхнем регитсре и добавить оставшейся
            if (!index == 0) {
                return item[0].toUpperCase() + item.slice(1);
            }
            return item;
        })
        .join(''); //сделать строку из массива
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

