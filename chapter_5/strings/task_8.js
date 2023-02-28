/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst(str) {

    if (!str) return str; // проверка на пустую строку

    return str[0].toUpperCase() + str.substring(1);
}

alert(ucFirst("вася"));