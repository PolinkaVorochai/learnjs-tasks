/*Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», 
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/

let login = prompt('введите логин');
let password;
if (login === 'Админ') {
    password = prompt('введите пароль');
    (password === 'Я главный') ? alert('Здравствуйте!') :
        (password === '' || password === null) ? alert('Отменено') :
            alert('Неверный пароль');
} else if (login === '' || login === null) {
    alert('отменено');
} else {
    alert('я вас не знаю');
}


