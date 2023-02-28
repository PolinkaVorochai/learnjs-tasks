/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

let arr = [100, -9, 2, -3, 5];

//через вложенный цикл - громоздкое решение, ресурсозатратное
function getMaxSubSumHard(arr) {
    let maxSumma = 0; //начальное значение максимальной суммы, 
    //также вернется ноль, если сумма отрицательная

    // поиск maxSumma 
    for (let i = 0; i < arr.length; i++) {
        let summa = 0; //текущее значение суммы

        for (let j = i; j < arr.length; j++) {
            summa += arr[j];
            maxSumma = Math.max(summa, maxSumma);
        }
    }

    return maxSumma;
}

//решение с одним циклом - проще и менее затратное по ресурсам
function getMaxSubSumEasy(arr) {
    let summa = 0; //текущее значение суммы
    let maxSumma = 0; //начальное значение максимальной суммы

    for (let element of arr) {

        summa += element;
        maxSumma = Math.max(summa, maxSumma);

        //проверка на отрицательную сумму
        if (summa < 0) {
            summa = 0;
        }
    }

    return maxSumma;
}


alert(getMaxSubSumHard(arr));
alert(getMaxSubSumEasy(arr));

alert(getMaxSubSumHard([-2, -1, 1, 2]));
alert(getMaxSubSumEasy([-2, -1, 1, 2]));