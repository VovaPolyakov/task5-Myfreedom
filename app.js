// Задание 1

// Дан объект:
// let user = { name: 'Tom', age: 20, isMarried: false }
// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив.
// Использовать цикл for-in


// let user = { name: 'Tom', age: 20, isMarried: false };
// let trasformO = function (obj) {
//     let array = [];
//     for (let property in obj) {
//         array.push(`${property} - ${obj[property]}`);
//     }
//     return array;
// }

// console.log(trasformO(user))

// Задание 2.1

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, 
// должно выводиться ообщение об ошибке.

// let getMultiply = function (a, b) {
//     if (typeof a != 'number') {
//         console.log('Ошибка');
//     } else if (typeof b != 'number') {
//         console.log('Ошибка');
//     } else {
//         return a + b;
//     }

// }
// console.log(getMultiply('gsgs', 5));



// Задание 2.2

// Доработать задание 2.1 с проверкой на вызов функции без аргументов или с одним аргументом.
// sum(1)// введите два параметра
// sum() // введите два параметра

// let user = { name: 'Tom', age: 20, isMarried: false };
// let trasformO = function (obj) {

//     if (arguments.length == 2) {
//         let array = [];
//         for (let property in obj) {
//             array.push(`${property} - ${obj[property]}`);
//         }
//     } else {
//         console.log('Ошибка')
//     }
//     return array;
// }

// console.log(trasformO(user))


// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.


// let randomNum = (a) => {
//     if (a <= 0 && a >= 10) {
//         console.log('Введите другое число')
//     }
//     let b = Math.floor(Math.random() * 11);

//     if (a == b) {
//         console.log('Вы выйграли');
//     } else {
//         console.log(`Вы не угадали, ваше число - ${a} , a выпало число ${b}`)
//     }
// }

// randomNum(9);


// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. 
// Используйте подходящий метод массива.

// let arr = [1, 2, 3];
// let newArr = [];
// arr.forEach(item => {
//     newArr.push(item)
// })
// console.log(newArr)


// Задание 5

// На странице в html задать список элементов li с числами. 
// Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив.
// Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. 
// Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

// function wholeNum() {
//     let arr = [];

//     let listItems = document.querySelectorAll('li');
//     let ul = document.querySelectorAll('ul')
//     for (let i = 0; i < listItems.length; i++) {
//         if (listItems[i].innerText % 2 == 0) {
//             arr.push(listItems[i])
//         }
//     }
//     let tag = document.createElement('ul');
//     arr.forEach(item => {
//         let li = document.createElement('li')
//         li.innerText = item.innerText;
//         tag.appendChild(li);
//         console.log(item)
//     });
//     document.body.appendChild(tag);
// }

// wholeNum();


// Задание 6

// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). 
// Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li. 
// Для добавления можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

// function getInterval() {
//     let ul = document.createElement('ul');
//     let select = document.createElement('select');
//     function Interval() {
//         let li = document.createElement('li');
//         li.innerText = 'text';
//         ul.appendChild(li);
//     }
//     for (let i = 0; i < 4; i++) {
//         let option = document.createElement('option');
//         option.innerText = `Категория ${i}`;
//         select.appendChild(option);
//     }
//     setInterval(Interval, 1000);
//     document.body.appendChild(select);
//     document.body.appendChild(ul);
// }

// getInterval();