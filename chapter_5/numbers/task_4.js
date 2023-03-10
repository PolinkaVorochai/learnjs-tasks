/*
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, 
пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null.
*/

function readNumber() {
    let numeric;

    do {
        numeric = prompt('Число?');
    } while (!isFinite(numeric));

    if (numeric === '' || numeric === null) {
        return null;
    }

    return +numeric;
}

alert(readNumber());

//При преобразовании null (отмена) и пустой строки в число получается число 0.