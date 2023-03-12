/*
Напишите функцию printList(list), которая выводит элементы списка по одному.
  
  Сделайте два варианта решения: используя цикл и через рекурсию.
  
  Как лучше: с рекурсией или без?
  */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//Вариант 1
function printList1(obj) {
    let tmp = obj;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}

printList1(list);

//Вариант 2
function printList2(obj) {
    alert(obj.value);

    if (obj.next) {
        printList2(obj.next);
    }
}

printList2(list);
