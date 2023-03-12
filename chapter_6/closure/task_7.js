/*
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет? - да, он работает

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter(); //создали объект, count = 0

alert( counter.up() ); // count = 1
alert( counter.up() ); // count = 2
alert( counter.down() ); // count = 1
*/