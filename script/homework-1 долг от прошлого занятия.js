//Напишите оператор if, такой, чтобы в качестве выражения в скобках у него были значения true, false (Например, if( true ) или if( false )). Посмотрите как работает этот оператор, поместив какую-нибудь команду после круглых скобок (Например, console.log(1)). Примечание: это задание очень простое. Если вы читая его, поняли суть, не выполняйте его 🙂

console.log('Task 1');
console.log('Я все понял! Выполняется только если итог выражения равен true');


//Создайте переменные m и n. В m поместите произвольное числовое значение. Напишите оператор ветвления if так, чтобы если m было больше 50, то в переменную n помещалось слово «большое», иначе — слово «маленькое».

console.log('Task 2');

var m = 25, n;

m > 50 ? n = "большое" : n = "маленькое";

console.log(n);

//Определите сколько раз выполнится цикл while? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.
//var i = 2;
//while( i < 9 ){
// console.log( i++ );
//}

console.log('Task 3');

var i = 2;

while( i < 9 ){
    console.log( i++ );
}

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

console.log('Task 4');

var i = 45;

while( i <= 67 ){
    console.log( i++ );
}

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

console.log('Task 5');

var i = 45;

while( i <= 670 ){
    ((i % 10) == 0) ? console.log( i++ ) : i++;
}

//Напишите скрипт, который используя оператор for выполнит два предыдущих задания.

console.log('Task 6a');

for (var i = 45; i <= 67 ; ) {
    console.log( i++ );
}

console.log('Task 6b');

for (var i = 45; i <= 670 ; ) {
    ((i % 10) == 0) ? console.log( i++ ) : i++;
}

//Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)

console.log('Task 7');

var n = 5;

switch( n ){
    case 0: console.log('ноль'); break;
    case 1: console.log('один'); break;
    case 2: console.log('два'); break;
    case 3: console.log('три'); break;
    case 4: console.log('четыре'); break;
    case 5: console.log('пять'); break;
    case 6: console.log('шесть'); break;
    case 7: console.log('семь'); break;
    case 8: console.log('восемь'); break;
    case 9: console.log('девять'); break;
}

//Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)

console.log('Task 8 in main window');

for (var i = 0; i < 10 ; i++) {
    document.write('<img src="img/xx.jpg" width = "100" alt="Надо было использовать хром..." />');
}

//(*) В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.

console.log('Task 9');

var size = 120, unit = "Кб", bytes;

switch (unit) {
    case "Кб": console.log("Size = "+ size * 1024**1 +" bytes"); break;
    case "Гб": console.log("Size = "+ size * 1024**2 +" bytes"); break;
    case "Мб": console.log("Size = "+ size * 1024**3 +" bytes"); break;
    default:   console.log("Incorrect measure, try again"); break;
}

//(*) Постройте при помощи циклов JavaScript скрипт для календаря на HTML. Примечание: выполнить задание для одного месяца, используя HTML-элемент table

var i, tbcol = 0, day = 1;

document.write('<br><h4>Календарь</h4><table><tr>')

for (var i = 0; i < 29; ++i, ++day, tbcol++ == 6 ? tbcol = 0 : tbcol = tbcol) {
    tbcol == 6 ? document.write('<td style = "border: 2px solid;">' + day +'<tr>') : document.write('<td style = "border: 2px solid;">' + day);
}

document.write('<tr></table>')


