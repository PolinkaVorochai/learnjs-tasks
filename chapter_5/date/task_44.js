/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
    let dayOfMonth = date.getDate();//текущий день месяца получить
    let month = date.getMonth() + 1; //получить следующий месяц
    let year = date.getFullYear();//получить год текущий
    let hour = date.getHours();//получить часы
    let minutes = date.getMinutes();//минуты
    let diffMs = new Date() - date;//разница в милисекундах
    let diffSec = Math.round(diffMs / 1000);//округлить до секунд
    let diffMin = diffSec / 60;//секунды перевести в минуты
    let diffHour = diffMin / 60;//минуты перевести в часы
    // форматирование
    year = year.toString().slice(-2); //копию создать
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert(formatDate(new Date(new Date - 86400 * 1000)));