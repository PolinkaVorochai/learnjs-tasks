/*
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let array = Object.entries(salaries);//вытащить ключ-значение в массивы

    let max = 0; //начальное значение максимальной зп
    let maxName = null; //сотрудник с максимальной зп

    for (const [name, salary] of array) { //перебрать ключ-значение массива
        if (max < salary) { //условие
            max = salary; //установить новый максимум
            maxName = name; //установить имя
        }
    }

    return maxName;
}

alert(topSalary(salaries)); //Pete