/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function () {
        this.numeric_1 = prompt('Введите первое число');
        this.numeric_2 = prompt('Введите второе число');
    };

    this.sum = function () {
        return +this.numeric_1 + +this.numeric_2;
    };

    this.mul = function () {
        return this.numeric_1 * this.numeric_2;
    };
};

let calculator = new Calculator();

calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());



