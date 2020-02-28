//Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.

var city1 = {
    name: "ГородN",
    population: 1e7,

    getName: function () {
        return this.name;
    },
    
    exportStr: function () {
        let info = '';
        for (let props in this) {
            if (typeof this[props] != "function") {
                info += props + '=' + this[props] +'\n';
            }
        }
        return info;
    },

    getCity: function () {
        return getObj(this);
    }
}

console.log(city1);

//Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

var city2 = {};

city2['name'] = 'ГородM';
city2.population = 1e6;

city2.getName = function () {
    return this.name;
}

city2.exportStr = city1.exportStr;

city2.getCity = function () {
    return getObj(city2);
}

console.log(city2);

//Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов



console.log(city1.getName());

console.log(city2.getName());


//Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно

console.log(city1.exportStr());
console.log(city2.exportStr());


//Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.

var getObj = function(obj) {
    return this;
}

console.log(city1.getCity());  // все равно возвращает window
console.log(city2.getCity());  // все равно возвращает window



//(*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

var obj = {
    name: "Вася",
    method1: function () {
        this.name = "Петя";
        return this;
    },
    method2: function () {
        this.surname = "Петров";
        return this;
    },
    method3: function () {
        this.age = 29;
        return "метод 3";
    },
}

obj.method1().method2().method3();
console.log(obj);



//Создайте массив d1 с числовыми величинами 45,78,10,3.  Добавьте в массив d1 еще одно число ( d1[7] = 100). Выведите в консоль весь массив и его элементы с индексами 6 и 7.

d1 = [45, 78, 10, 3];

d1[7] = 100;

console.log(d1, d1[6], d1[7]);

//Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .

d2 = [45, 78, 10, 3];

for (i = 0, sum = 0; i<d2.length; i++) {
    sum += d2[i];
};

console.log(sum);


//Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d[7] = 100) Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

d3 = [45, 78, 10, 3];

d3[7] = 100;
sum = 0
for (var i in d3) {
        sum += d3[i];
}

console.log(sum);

//Создайте массив d4 с числовыми величинами 45,78,10,3. Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)

d4 = [45, 78, 10, 3];

function my(a,b) {
    return b - a;
}

d4.sort(my);

console.log(d4);

//(*) Создайте двумерный массив d5 размером n=3 элементов в каждом из которых будет m=4 элементов из целых чисел (в каждый элемент поместить цифру 5). Примечание: при создании двумерного массива используйте циклы. Во внешнем цикле должна появиться конструкция d5[i] = [];

var d5 = [], n = 3; m = 4;

for (var i = 0; i < n; ++i) {
    d5[i] = [];
    for (var j = 0; j < m; ++j) {
        d5[i][j] = 5;  //ну или Math.round(Math.random()*10);
    }
}

console.log(d5);