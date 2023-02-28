/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
    read() {
        this.numeric_1 = prompt('Введите первое число');
        this.numeric_2 = prompt('Введите второе число');
    },
    sum() {
        return (this.numeric_1 + this.numeric_2);
    },
    mul() {
        return (this.numeric_1 * this.numeric_2);
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());