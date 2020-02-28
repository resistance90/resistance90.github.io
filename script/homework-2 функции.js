
// ВНИМАНИЕ! результат домашней работы выложен на https://resistance90.github.io/homework.html


//Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

console.log('Task 1');

const hello1 = function() {console.log('Hello Javascript!')};

hello1();

//Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»

console.log('Task 2');

name = 'Vasily';

function hello2(name) {
    name == '' ? console.log("Hello, guest!") : console.log("Hello, " + name);
}

hello2(name);

//Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.

console.log('Task 3');

var mul = (n,m) => {return m*n};

console.log(mul(3,5));


//Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

console.log('Task 4');

function repeat(str = '', n = 2) {
    fullstr = ''
    for (var i = 0; i<n; i++) {
        fullstr += str;
    }
    return fullstr;
}

console.log(repeat('Javascript is the best language! ', 3));

//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

console.log('Task 5');

const rgb = (r = 0, g = 0, b = 0) => {
    return 'rgb('+r+','+g+','+b+')'
}

console.log(rgb(255,55));


//Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

console.log('Task 6');

function avg() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum / arguments.length;
}

console.log(avg(2,4,6,8,10));


//Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.

console.log('Task 7');

function mul(c,d) {
    return c * d;
}

var m = (a,b) => {
    return mul(a,b);
}

console.log(m(5,9));



//(*) Напишите функцию operation(m,n,o), в которой m и n — числовые переменные, а o — функциональный литерал, который берет два аргумента и выполняет математическую операцию над ними (например, функция mul() из задания 4.)

console.log('Task 8');

function add(c,d) {
    return c + d;
}
function sub(c,d) {
    return c - d;
}
function div(c,d) {
    return c / d;
}

function operation (m, n, o) {
    switch (o) {
        case 'a' : return add(m,n);
        case 's' : return sub(m,n);
        case 'm' : return mul(m,n);
        case 'd' : return div(m,n);
        
    }
}


console.log(operation(25, 5, "d"));

//(*) Напишите функцию addN(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции. Внимание, эта простая на реализацию замыкания.

console.log('Task 9');

function addN(n) {
    return function (m) {
        console.log(n,m);  //проверочка
        return n+m;    
    };
}

var add3 = addN(3);

console.log(add3(10));

//(*) Напишите функцию words(),  которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент d должен иметь значение 0

console.log('Task 10');

// 1 - товар
// 2,3,4 -товара
// 0, 5, 6, 7, 8, 9, - товаров
//11, 12, 13, 14 - товаров


const words = function (n = 0) {
    let word = 'товаров'

    if ( !(n%100 <=14 && n%100 >= 11) ) {
        if ( n%10 < 5 && n%10 > 1) {word = "товара"};
        if ( n%10 == 1) {word = "товар"};
    }
    console.log("В корзине " + n + " " + word)
}

words(13);