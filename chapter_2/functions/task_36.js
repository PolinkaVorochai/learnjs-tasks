//Следующая функция возвращает true, если параметр age больше 18.

//В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
//Будет ли эта функция работать как-то иначе, если убрать else?
/*
Ответ: если убрать else, то вторая функция входит в if, проверяет условие на истину age > 18, если true - выполняет возврат значения 
true и выходит их функции, если же age > 18 неистина, то тело if не выполняется, выполняется тело функции 
return confirm('Родители разрешили?').
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
//Есть ли хоть одно отличие в поведении этого варианта?
//Получается, что отлий в работе первого и второго вариантов нету.