//сортировка по убыванию

let arr = [5, 2, 1, -10, 8];

//для сорттровки чисел, так как по умолчанию будет сортировка строк
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}


arr.sort(compareNumeric);

alert(arr.reverse()); // 8, 5, 2, 1, -10