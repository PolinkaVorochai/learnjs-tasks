/*Что выведет код ниже?*/

alert(null || 2 || undefined); //null преобразуется в тип boolean: false; 2 преобразуется в тип boolean: true; 
//после выполнения первого оператора || возвращается первый true, то есть 2.