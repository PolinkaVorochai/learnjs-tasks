/*Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
*/

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";
//Да, это будет работать, так как изменяется не сам объект user, а только его свойство.
//Свойства константных объектов можно менять