/*
Взгляните на следующий код:
*/
let str = "Привет"; // объявляется строка (примитив)

str.test = 5; //строке присваивают свойство test со значением 5. 
//В этот момент строка превратилась во временный объект String, 
//который удаляется автоматически после присваивания свойства test.

alert(str.test); //при доступе к свойству строка опять превратилась во временный объект String
//Но это уже новый объект и свойство test в нем не записано.
//Результат будет undefined


/*Как вы думаете, это сработает? Что выведется на экран? - выведется undefined
*/