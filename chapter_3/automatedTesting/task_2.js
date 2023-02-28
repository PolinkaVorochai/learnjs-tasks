/*Что не так в нижеприведённом тесте функции pow?
P.S. Тест не содержит синтаксических ошибок и успешно проходит.
*/

it("Возводит x в степень n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});
/*
Здесь 3 теста написаны в одном it. Надо разбить 3 теста на отдельные 3 it. 
Так как при наличии ошибки, не понятно будет в каком именно тесте она появилась.
*/

//исправленный тест

describe("Возводит x в степень n", function () {
    it("5 в степени 1 будет 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("5 в степени 2 будет 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 в степени 3 будет 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});