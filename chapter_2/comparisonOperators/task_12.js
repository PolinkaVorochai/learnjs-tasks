//Каким будет результат этих выражений?

5 > 4 // true
"ананас" > "яблоко" //false, так как "я">"а"
"2" > "12" //"2" и "12" преобразуется в number: false
undefined == null //true - всегда верно, правило языка
undefined === null //false - разные типы, потому что это строгое равенство
null == "\n0\n" //false, так как null==undefined
null === +"\n0\n" //это строгое равенство, +"\n0\n"=0 - явное приведенение к типу number, ответ false, так как null===0 - это неверно