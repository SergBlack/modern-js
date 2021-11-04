/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/01.primitive-data-types.js":
/*!****************************************!*\
  !*** ./app/01.primitive-data-types.js ***!
  \****************************************/
/***/ (() => {

console.log('Topic: Primitive Data Types');

// Task 01
// Объявите переменную days и проинициализируйте ее числом от 1 до 10.
// Преобразуйте это число в количество секунд и выведите в консоль.



// Task 02
// Объявите две переменные: admin и name. Установите значение переменной name
// в ваше имя. Скопируйте это значение в переменную admin и выведите его в консоль.



// Task 03
// Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную result1 и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.



// Task 04
// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.



// Task 05
// Объявите переменную minute и проинициализируйте ее целым числом.
// Вычислите к какой четверти принадлежит это число и выведите в консоль.



// Task 06
// Объявите две переменные, которые содержат стоимость товаров:
// первый товар - 0.10 USD, второй - 0.20 USD
// Вычислите сумму и выведите в консоль. Используйте toFixed()



// Task 07
// Объявите переменную a.
// Если значение переменной равно 0, выведите в консоль "True", иначе "False".
// Проверьте, что будет появляться в консоли для значений 1, 0, -3.



// Task 08
// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножте его на 10
// и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.



// Task 09
// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.



// Task 10
// Выведите в консоль все числа от 1 до 10.



// Task 11
// Выведите в консоль все четные числа от 1 до 15.



// Task 12
// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
// x
// xx
// xxx
// xxxx
// ...



// Task 13
// Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
// 1
// 22
// 333
// 4444
// ...



// Task 14
// Запросите у пользователя какое либо значение и выведите его в консоль.



// Task 15
// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }



// Task 16
// Перепишите if..else используя несколько тернарных операторов.
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }



// Task 17
// Замените for на while без изменения поведения цикла
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }


// Task 18
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предусматривать обработку нечисловых строк в этой задаче необязательно.



// Task 19
// Переписать следующий код используя switch
// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// Task 20
// Объявите переменную и проинициализируйте ее строчным значением в переменном
// регистре. (Например так "таООооОддОО")
// Напишите код, который преобразует эту строку к виду:
// первая буква в верхнем регистре, остальные буквы в нижнем регистре.
// Выведите результат работы в консоль
// Используйте: toUpperCase/toLowerCase, slice.



// Task 21
// Напишите код, который выводит в консоль true, если строка str содержит
// „viagra“ или „XXX“, а иначе false.
// Тестовые данные: 'buy ViAgRA now', 'free xxxxx'



// Task 22
// Напишите код, который проверяет длину строки str, и если она превосходит
// maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом должна быть (при необходимости) усечённая строка.
// Выведите строку в консоль
// Тестовые данные:
//  "Вот, что мне хотелось бы сказать на эту тему:", 20
//  "Всем привет!", 20



// Task 23
// Напишите код, который из строки $100 получит число и выведите его в консоль.


// Task 24
// Напишите код, который проверит, является ли переменная промисом




/***/ }),

/***/ "./app/02.strings.js":
/*!***************************!*\
  !*** ./app/02.strings.js ***!
  \***************************/
/***/ (() => {

console.log('Topic: Strings');
// Task 01. padStart
// RU: Объявите три переменных: hour, minute, second.
//     Присвойте им следующие значения: 4, 35, 5.
//     Выведите в консоль время в формате 04:35:05.
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.

// Task 02. repeat
// RU: Создайте функцию, которая выведет в консоль пирамиду на 9 уровней как показано ниже
//     1
//     22
//     333
//     4444
//     ...
// EN: Create a function which displays a 9 level pyramid in the console according to the
//     following pattern
//     1
//     22
//     333
//     4444
//     ...

// Task 03. includes
// RU: Напишите код, который выводит в консоль true, если строка str содержит
//     'viagra' или 'XXX', а иначе false.
//     Тестовые данные: 'buy ViAgRA now', 'free xxxxx'
// EN: Create a snippet of code which displays the value true in the console
//     when str contains 'viagra' or 'XXX', otherwise it displays false.

// Task 04. includes + index
// RU: Проверить, содержит ли строка второе вхождение подстроки,
//     вернуть true/false.
// EN: Check whether the string contains a second occurrence of a substring,
//     return true / false.

// Task 05. Template literal
// RU: Создать строку: "ten times two totally is 20"
//     используя переменные:
//     const a = 10;
//     const b = 2;
//     и template literal
// EN: Create s string "ten times two totally is 20"
//     using the following variables:
//     const a = 10;
//     const b = 2;
//     and template literal

// Task 06. normalize
// RU: Создайте функцию, которая сравнивает юникод строки.
//     Сравните две строки
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';

// Task 07. endsWith
// RU: Создайте функцию, которая на вход получает массив имен файлов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

// Task 08. String.fromCodePoint
// RU: Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
//     для кодов в диапазоне 78000 - 80000.
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 78000 - 80000.

// Task 09
// RU: Создайте функцию, которая должна выводить в консоль следующую пирамиду
//     Пример:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// Task 10
// RU: Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
//     и добавляет знак доллара перед числом в шаблонном литерале.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.


/***/ }),

/***/ "./app/03.arrays.js":
/*!**************************!*\
  !*** ./app/03.arrays.js ***!
  \**************************/
/***/ (() => {

console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.




// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.

// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.


/***/ }),

/***/ "./app/04.objects.js":
/*!***************************!*\
  !*** ./app/04.objects.js ***!
  \***************************/
/***/ (() => {

console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Method should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Method should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.


/***/ }),

/***/ "./app/05.date.js":
/*!************************!*\
  !*** ./app/05.date.js ***!
  \************************/
/***/ (() => {

console.log('Topic: Date object');

// Task 1
// RU: Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy

// Task 2
// RU: Создать объект Date из строки '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.

// Task 3
// RU: Создать объект Date, который содержит:
//     1. завтрашнюю дату,
//     2. первое число текущего месяца,
//     3. последнее число текущего месяца
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month

// Task 4
// RU: Подсчитать время суммирования чисел от 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.

// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.


/***/ }),

/***/ "./app/06.functions.js":
/*!*****************************!*\
  !*** ./app/06.functions.js ***!
  \*****************************/
/***/ (() => {

console.log('Topic: Functions');

// Task 1. FDS
// RU: Создайте функцию conc, которая должна конкатенировать значения
//     двух параметров a и b и возвращать строку.
//     Используйте Function Declaration Statement (FDS).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'

// Task 2. FDE
// RU: Создайте функцию comp, которая должна сравнивать значения
//     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
//     Используйте Function Definition Expression (FDE).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     UseFunction Definition Expression (FDE).
//     Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1

// Task 3. AF
// RU: Создайте анонимную функцию, которая должна
//     выводить сообщение 'message in console' в коноль.
//     Используйте ее как обработчик события click для кнопки.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.

// Task 4. NFE
// RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
//     Fn = 1 * 2 *..*n.
//     Используйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).

// Task 5. FC
// RU: Объявите две строчные переменные: params и body и проинициализируйте
//     их строчными значениями, которые представляют список параметров и тело будущей функции.
//     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
//     Вызовите эту функцию.
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.

// Task 6. ArF
// RU: Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Используя стрелочные функции создайте новый массив из элементов elem * elem,
//     которые меньше 100 и отсортируйте его по возрастанию.
//     Выведите результат в консоль.
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.

// Task 7. IIFE
// RU: Создайте конструкцию, с помощью которой выполниться выше реализованная
//     функция conc.
// EN: Create a construction which allows to run the above function conc.

// Task 8. Arguments Object, Rest
// RU: Создайте функцию parts, которая принимает неизвестное количество параметров.
//     Каждый параметр – это группа предложений.
//     Функция должна вырезать из параметра подстроку, начиная с символа двоеточие (:)
//     и заканчивая символом точка (.).
//     Функция должна возвращать массив подстрок.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].


// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString. 
//     Если второй параметр не задан, используйте test = testString. 
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
// EN: Create a function find(testString, test), which should return the position 
//     of test string within testString.
//     If the second parameter is omitted, use default value  test = testString.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0

// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
// EN: Create a function str(), which takes one string parameter and display in the console 
//     string 'String is non empty' if the paramer is not empty string, otherwise it 
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty 
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить 
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов. 
//     Если второй параметр не задан, функция должна возвращать массив слов.
// EN: Create a function toConsole with one parameter. The function should display 
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display 
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']


// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
// EN: Create a function copyright, which ahould return anther function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.

// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes 
//     one parameter - sign (© ('\u00A9')).

// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann', 
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann', 
//     work – function, which display in the console the following string 
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."

// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name. 
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.

// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле 
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo 
//     and fiboMemo.


/***/ }),

/***/ "./app/07.promises.js":
/*!****************************!*\
  !*** ./app/07.promises.js ***!
  \****************************/
/***/ (() => {

console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const p1 = new Promise(() => {
//   console.log('Promise is created');
// });
// console.log(p1);



// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p2 = Promise.resolve('Promise Data');
// console.log(p2);
// p2.then(console.log);



// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const p3 = Promise.reject('Promise Error');
// p3.catch(console.log);



// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Promise Data');
//   }, 3000)
// });
// p4.then(console.log);



// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//   promise: null,
//   resolve: null,
//   reject: null,
//   onSuccess(paramName) {
//     console.log(`Promise is resolved with data: ${paramName}`);
//     return paramName;
//   },
//   onError(paramName) {
//     console.log(`Promise is rejected with error: ${paramName}`);
//   },
// }
//
// document.querySelector('#btn-create-promise').addEventListener(
//   'click',
//   () => {
//     handlePromise.promise = new Promise((resolve, reject) => {
//       handlePromise.resolve = resolve;
//       handlePromise.reject = reject;
//     })
//       .then(handlePromise.onSuccess)
//       .then(handlePromise.onSuccess)
//       .catch(handlePromise.onError);
//   }
// );
//
// document.querySelector('#btn-resolve-promise').addEventListener(
//   'click',
//   () => {
//     handlePromise.resolve('data');
//   }
//
// );
//
// document.querySelector('#btn-reject-promise').addEventListener(
//   'click',
//   () => {
//     handlePromise.reject('error-data');
//   }
// );


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// const onSuccess = (param) => {
//   throw new Error('error message');
//   return `Ваше имя ${param}`;
// }
//
// const print = (string) => {
//   console.log(string);
// }
//
// const p7 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('My name is');
//   }, 1000)
// }).then(onSuccess).then(print).catch(console.log);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// const person = {
//   name: 'Anna',
// };
//
// const getPromiseData = (promise) => {
//   promise.then(console.log);
// }
//
// getPromiseData(Promise.resolve(person));


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

// const personName = {
//   name: 'Anna',
// };
//
// const personAge = {
//   age: 16,
// };
//
// const createResolvedPromise = (data, delay) => new Promise((resolve) => {
//   setTimeout(resolve, delay, data);
// })
//
// const createRejectedPromise = (data, delay) => new Promise((_, reject) => {
//   setTimeout(reject, delay, data);
// })
//
// const promisesArray = [createResolvedPromise(personName, 2000), createRejectedPromise(personAge, 3000)];
//
// Promise.all(promisesArray)
//   .then((data) => {
//     const result = data.reduce((acc, obj) => ({ ...acc, ...obj }), {})
//     console.log(result);
//   })
//   .catch(() => console.log('Promise Error'));


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

// const p12 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Promise Data');
//   }, 5000)
// });
//
// let rejectP13;
// const p13 = new Promise((_, reject) => {
//   rejectP13 = reject;
// });
//
// document.querySelector('#btn-cancel-promise').addEventListener(
//   'click',
//   () => {
//     rejectP13('Promise is canceled');
//   }
// );
//
// Promise.race([p12, p13]).then(console.log).catch(console.log);


/***/ }),

/***/ "./app/08.async-functions.js":
/*!***********************************!*\
  !*** ./app/08.async-functions.js ***!
  \***********************************/
/***/ (() => {

console.log('Topic: Async Functions');
// Task 01
// RU: Создайте асинхронную функцию f1, используя FDS (Function Declaration Statement).
//     Функция должна принимать два параметра a и b и возвращать сумму a+b.
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f1 as a Function Declaration Statement.
//     The function should take two parameters a and b and return a sum a+b.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

// async function f1(a, b) {
//   return a + b;
// }
//
// f1(1, 2).then(console.log);

// Task 02
// RU: Создайте асинхронную функцию f2, используя FDE (Function Definition Expression).
//     Функция должна возвращать 'Promise Data', используя Promise.resolve()
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f2 as a Function Definition Expression.
//     The function should return the string 'Promise data' using Promise.resolve() method.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

// const f2 = async () => {
//   return Promise.resolve('Promise Data');
// }
//
// f2().then(console.log);

// Task 03
// RU: Создайте класс C1. Добавьте асинхронный метод f3.
//     Метод должен генерить исключение 'Error occurs in f3 method'.
//     Создайте экземпляр класса и вызовите метод f3.
//     Обработаете промис.
// EN: Create a class C1. Add async method f3.
//     Method should throw an exception 'Error occurs in f3 method'.
//     Create an instance of the class and call the method f3.
//     Process a promise and display value in the console.

// class C1 {
//   async f3() {
//     throw new Error('error')
//   }
// }
//
// const obj = new C1();
// obj.f3().catch(console.log);

// Task 04
// RU: Cоздайте функцию makeRequest, используя FDS (Function Declaration Statement).
//     Функция должна принимать один параметр - url и возвращать промис,
//     который перейдет в состояние resolved через 2с. и вернет значение параметра.
//     Первой строкой в функции выведите сообщение 'makeRequest is called'.
//     Cоздайте функцию f4, используя FDS (Function Declaration Statement).
//     Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
// EN: Create a functiom makeRequest as a Function Declaration Statement.
//     The function should take one parameter - url and return a promise,
//     which should be resolved after 2s and it should return the value of the parameter url.
//     The first line of code in the function should display message 'makeRequest is called' in the console.
//     Create a function f4 as a Function Declaration Statement.
//     The function f4 should call the function makeRequest, get its result and display it in the console.

// function makeRequest(url) {
//   console.log('makeRequest is called');
//
//   return new Promise((res) => setTimeout(res, 2000, url));
// }
//
// async function f4(url) {
//   console.log(await makeRequest(url));
// }
//
// f4('www.someurl.com');

// Task 05
// RU: Внесите изменения в функцию f4 из предыдущего задания так, чтобы в консоле появилось
//     значение переданого параметра в функцию makeRequest.
// EN: Make changes to the function f4 from the previous task. This function should display the value
//     of the parameter of the function makeRequest in the console.

// Task 06
// RU: Cоздайте асинхронную функцию f6, используя FDS (Function Declaration Statement).
//     Функция должна вызвать два раза функцию makeRequest с разными значениями параметра.
//     Перед вызовом и после каждого вызова makeRequest функция должна выводить в консоль любое сообщение.
//     Создать и вернуть массив, который должен содержать значения переданые функции makeRequest.
//     Обработаете результат работы функции f6.
// EN: Create an async function f6 as a Function Declaration Statement.
//     This function should call the function makeRequest two times with different values of its parameter.
//     The function f6 should display any message in the console before and after each call
//     of the function makeRequest.
//     Create and return the array from the function f6, which should contains the values of the
//     parameter of the function makeRequest.
//     Process the result of the function f6.

// async function f6([url1, url2]) {
//   let data = [];
//
//   data.push(await makeRequest(url1));
//   data.push(await makeRequest(url2));
//
//   // const data = await Promise.all(urls.map(url => makeRequest(url)));
//
//   return data;
// }
//
// f6(['example.com', 'mail.com']).then((data) => console.log(data.join(', ')));

// Task 07
// RU: Измените асинхронную функцию f6 из предыдущего задания так, чтобы вызовы функции
//     makeRequest выполнялись паралельно.
// EN: Make changes to the async function f6 from the previous task. This function should
//     call the function makeRequest with different values of its parameter simultaneously.

// Task 08
// RU: Создайте масив урлов ['http://a', 'http://b'].
//     Создайте функцию sendRequest, которая принимает один параметр - url.
//     Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called'
//     и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго
//     урла объект { age: 16 }.
//     Создайте асинхронную функцию f8 которая должна вызвать функцию sendRequest для каждого урла
//     и вернуть объект {name: 'Ann', age: 16}
//     Обработайте результат работы функции f8
// EN: Create the array of urls ['http://a', 'http://b'].
//     Create the function sendRequest which should take one parameter - url.
//     The function should display the message 'sendRequest is called' in the console
//     in its first line of code. Then the function should return the object { name: 'Ann' } for the
//     first url after 2s and the object { age: 16 } for the second url after 2s.
//     Create the async function f8, which should call the function sendRequest with each value
//     from the array and return the object {name: 'Ann', age: 16}.
//     Process the reuslt of the function f8

// const urls = ['http://a', 'http://b'];
// const data = {
//   'http://a': { name: 'Ann' },
//   'http://b': { age: 16 },
// }
//
// function sendRequest(url) {
//   console.log('sendRequest is called');
//   return new Promise((res, rej) => setTimeout(res, 2000, data[url]));
// }
//
// async function f8(urls) {
//   return Promise.all(urls.map(url => sendRequest(url))).then(data => data);
// }
//
// f8(urls).then(console.log);


/***/ }),

/***/ "./app/09.iterators.js":
/*!*****************************!*\
  !*** ./app/09.iterators.js ***!
  \*****************************/
/***/ (() => {

console.log('Topic: Iterators');
// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.
// const colors = {
//   green: '#0e0',
//   orange: '#f50',
//   pink: '#e07'
// };
//
// const keyValueIterable = (target) => {
//   target[Symbol.iterator] = () => {
//     const keys = Object.keys(target);
//
//     return {
//       next() {
//         const done = keys.length === 0;
//         const key = keys.shift();
//
//         return {
//           value: [key, target[key]],
//           done,
//         }
//       }
//     }
//   };
//
//   return target;
// }
//
// const itColors = keyValueIterable(colors);
// for (const [, color] of itColors) {
//   console.log(color);
// }


// Task 2
// RU: В коллекции хранятся все имена пользователей, которые присоединились к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте итератор, который возвращает только имена администраторов.
// EN: The following collection store all the names of the user that have joined a particular telegram group.
//     The boolean flag indicates whether a user is an administrator of the group.
//     Сreatereate an iterator that returns only the administrators' names.

// const users = {
//   anna: false,
//   boris: true, // admin
//   christina: false,
//   dave: false,
//   elena: false,
//   felix: true,  // admin
// };
//
// users[Symbol.iterator] = function () {
//   const entries = Object.entries(this).filter(([_, value]) => value);
//
//   return {
//     next() {
//       const done = entries.length === 0;
//       const entry = entries.shift();
//
//       return {
//         value: done ? undefined : entry[0],
//         done,
//       }
//     }
//   }
// };
//
// [...users].forEach(name => console.log(name)); // boris, felix


// Task 3
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random

// const random = {
//   [Symbol.iterator]: () => ({
//     next: () => ({
//       value: Math.random()
//     })
//   })
// };
//
// const take = (sequence, amount) => {
//   return {
//     [Symbol.iterator]() {
//       const iterator = sequence[Symbol.iterator]();
//
//       return {
//         next() {
//           if (amount-- < 1) {
//             return {
//               done: true,
//               value: undefined,
//             }
//           }
//           return iterator.next();
//         }
//       }
//     }
//   }
// };
//
// const a = [...take(random, 3)];
// console.log(a);


// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

// const fibIterator = {
//   [Symbol.iterator]: () => {
//     const done = false;
//     let prevValue = [...Array(2).keys()];
//
//     return {
//       next: () => {
//         const value = prevValue[0] + prevValue[1];
//
//         prevValue = [prevValue[1], value];
//
//         return { value, done };
//       }
//     }
//   }
// }
//
// const Fib = {
//   [Symbol.iterator]: () => {
//     const fibIter = fibIterator[Symbol.iterator]();
//
//     return {
//       next: fibIter.next,
//       return: () => ({ done: true }),
//     }
//   }
// }
//
// for (let v of Fib) {
//   console.log(v);
//   if (v > 50) break;
// }


// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

// Number.prototype[Symbol.iterator] = function () {
//   const number = this.valueOf();
//   const isNegative = -1 === Math.sign(number);
//   const limit = Math.abs(number);
//   let index = 0;
//
//   return {
//     next: () => {
//       const done = limit < index;
//       let currentValue = index;
//
//       if (isNegative && currentValue !== 0) {
//         currentValue = -currentValue;
//       }
//
//       index += 1;
//
//       return { value: currentValue, done };
//     }
//
//   }
// }
//
// console.log([...-5]);
// console.log([...5]);


/***/ }),

/***/ "./app/10.sync-generators.js":
/*!***********************************!*\
  !*** ./app/10.sync-generators.js ***!
  \***********************************/
/***/ (() => {

console.log('Topic: Sync-Generators');

// Task 1.
// RU: Наишите функцию-генератор generateSequence, которая генерирует числа в диапазоне от start до end.
// EN: Create function-generator generateSequence, which generates and returns numbers from start to end.

// function* generateSequence(start, end) {
//   while (start <= end){
//     yield start++;
//   }
// }
//
// console.log(...generateSequence(1, 10));

// Task 2. Long Sequences
// RU: Создать массив из чисел от 1 до 1000.
//     Реализовать функцию-генератор для формирования всех пар из этого массива.
//     Генератор возвращает одну пару за один раз.
//     Результат [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]
// EN: Create an array of numbers from 1 to 1000.
//     Implement a generator function to create all pairs from this array.
//     Result [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]

// const numbers = Array.from(Array(1000).keys());
//
// function* generatePair() {
//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = 0; j < numbers.length; j += 1) {
//       yield [numbers[i], numbers[j]]
//     }
//   }
// }
//
// const itGeneratePair = generatePair();
//
// console.log(itGeneratePair.next());
// console.log(itGeneratePair.next());
// console.log(itGeneratePair.next());

// Task 3.
// RU: Реализуйте функцию генерации чисел Фибоначчи до бесконечности
// EN: Implement the infinite function-generator of generating Fibonacci numbers

// function* generateFib() {
//   let firstNum = 0;
//   let secondNum = 1;
//
//   while (true){
//     const nextNum = secondNum + firstNum;
//     firstNum = secondNum;
//     secondNum = nextNum;
//
//     yield nextNum;
//   }
// }
//
// const itFib = generateFib();
//
// console.log(itFib.next().value);
// console.log(itFib.next().value);
// console.log(itFib.next().value);
// console.log(itFib.next().value);
// console.log(itFib.next().value);
// console.log(itFib.next().value);

// Task 4. yield*
// RU: Реализуйте функцию-генератор, которая будет генерировать последовательность
//     символов от 0 до 9, затем от a до z, затем от A до Z. Воспользуйтесь функцией генератором
//     generateSequence, реализованой выше, String.fromCharCode(code), и диапазоном чисел от 48 до 57,
//     от 65 до 90 и от 97 до 122
// EN: Create a function-generator that will generate a sequence
//     characters from 0 to 9, then from a to z, then from A to Z.
//     Use the function-generator generateSequence implemented above,
//     String.fromCharCode (code), and a range of numbers from 48 to 57,
//     65 to 90 and 97 to 122

// function* generateSequence(start, end) {
//   while (start <= end){
//     yield start++;
//   }
// }
//
// function* outerGenerator() {
//   yield* generateSequence(48, 57);
//   yield* generateSequence(65, 90);
//   yield* generateSequence(97, 122);
// }
//
// let s = '';
// for (let code of outerGenerator()) {
//   s += String.fromCharCode(code);
// }
//
// console.log(s);

// Task 5. Sync Piping
// RU: Создайте-функцию генератор multipleByTwo, которая принимает массив чисел,
//     умножает каждое число на 2 и возвращает их по одному
//     Создайте-функцию генератор minusOne, которая принимает массив чисел,
//     отнимает 1 и возвращает их по одному
//     Создайте-функцию генератор isMultipleOfThree, которая принимает массив чисел,
//     и возвращает только те, которые делятся на 3 без остатка по одному
//     Объявите массив от 0 до 9
//     Вызовите первую функцию и передайте ей массив, результат этой функции передайте второй
//     а затем результат второй передайтетретей.
//     Примените спред оператор к резульату третей функции и создайте массив тех чисел,
//     которые останутся
// EN: Create a function-generator multipleByTwo that takes an array of numbers,
//     multiplies each number by 2 and returns them one at a time
//     Create a function-generator minusOne that takes an array of numbers,
//     takes 1 and returns them one at a time
//     Create a function-generator isMultipleOfThree that takes an array of numbers,
//     and returns only those that are divided by 3 without remain part one at a time
//     Declare an array from 0 to 9
//     Call the first function and pass an array to it, pass the result of this function
//     to the second and then the result of the second pass to the third function.
//     Apply the spread operator to the result of the third function and create an array
//     of those numbers which will remain

// function* multipleByTwo(numbers) {
//   for (const number of numbers) {
//     yield number * 2;
//   }
// }
//
// function* minusOne(numbers) {
//   for (const number of numbers) {
//     yield number - 1;
//   }
// }
//
// function* isMultipleOfThree(numbers) {
//   for (const number of numbers) {
//     if (number % 3 === 0) {
//       yield number;
//     }
//   }
// }
//
// const arrOfNum = Array.from(Array(10).keys());
//
// console.log([...isMultipleOfThree(minusOne(multipleByTwo(arrOfNum)))]);

// Task 6. Communication with Infinite Generator
// RU: Реализуйте бесконечную функцию-генератор calculation, которая будет выводить выражения
//     a + b = ?, где a, b будет случайно генерировать и запрашивать у пользователя ответ.
//     Если ответ верный, то писать в консоль true, иначе false.
//     Запустите код в консоли браузера
// EN: Implement an infinite calculation generator-function that will output expressions
//     a + b = ?, where a, b will be randomly generated and request a response from the user.
//     If the answer is correct, then write true to the console, otherwise false.

// const getRandomNumber = (limit) => Math.floor(Math.random() * limit);
//
// function* calculation() {
//   const a = getRandomNumber(10);
//   const b = getRandomNumber(10);
//
//   try {
//     yield `${a} + ${b} = ?`;
//     let answer = prompt('Ваш ответ?','0');
//     yield answer;
//
//     (a + b) === Number(answer) ? console.log(true) : console.log(false);
//   } catch (e) {
//     console.log('Error');
//   }
// }
//
// let itCalculation = calculation();
// console.log(itCalculation.next());
// // itCalculation.throw('Error');
// console.log(itCalculation.next());
// console.log(itCalculation.next());

// Task 7. throw method
// RU: Модифицируйте код предыдущего задания так, чтобы при вызове it.throw() генератор
//     не прекращал свою работу
// EN: Modify the code of the previous task so that when it.throw() is called, the generator
//     did not stop its work

// Task 8.
// RU: В коллекции хранятся все имена пользователей, которые присоединились
//     к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте генератор, который на вход получает этот объект и
//     возвращает только имена администраторов по одному за вызов.
// EN: The collection stores all the usernames that joined
//     to a specific telegram group.
//     A boolean flag indicates whether the user is a group administrator.
//     Create a generator that receives this object as input
//     and returns only admin names.

// const users = {
//   anna: false,
//   boris: true, // admin
//   christina: false,
//   dave: false,
//   elena: false,
//   felix: true,  // admin
// };
//
// function* adminGenerator(users) {
//   const admins = Object.keys(users).filter((key) => users[key]);
//
//   for (const admin of admins) {
//     yield admin;
//   }
// }
//
// console.log(...adminGenerator(users));


/***/ }),

/***/ "./app/11.dom.js":
/*!***********************!*\
  !*** ./app/11.dom.js ***!
  \***********************/
/***/ (() => {

console.log('Topic: DOM');

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.


// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.


// Task 03
// Получить элементы <li> используя метод querySelectorAll() и вывети их в консоль
// Добавить новый <li> и снова вывести в консоль


// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00


// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку


// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06


// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().


// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</>

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем


// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_primitive_data_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01.primitive-data-types */ "./app/01.primitive-data-types.js");
/* harmony import */ var _01_primitive_data_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_01_primitive_data_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _02_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02.strings */ "./app/02.strings.js");
/* harmony import */ var _02_strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_02_strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _03_arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03.arrays */ "./app/03.arrays.js");
/* harmony import */ var _03_arrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_03_arrays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _04_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04.objects */ "./app/04.objects.js");
/* harmony import */ var _04_objects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_04_objects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _05_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./05.date */ "./app/05.date.js");
/* harmony import */ var _05_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_05_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _06_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./06.functions */ "./app/06.functions.js");
/* harmony import */ var _06_functions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_06_functions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _07_promises__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./07.promises */ "./app/07.promises.js");
/* harmony import */ var _07_promises__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_07_promises__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _08_async_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./08.async-functions */ "./app/08.async-functions.js");
/* harmony import */ var _08_async_functions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_08_async_functions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _09_iterators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./09.iterators */ "./app/09.iterators.js");
/* harmony import */ var _09_iterators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_09_iterators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _10_sync_generators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./10.sync-generators */ "./app/10.sync-generators.js");
/* harmony import */ var _10_sync_generators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_10_sync_generators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _11_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./11.dom */ "./app/11.dom.js");
/* harmony import */ var _11_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_11_dom__WEBPACK_IMPORTED_MODULE_10__);












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLFVBQVU7QUFDN0UsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxVQUFVO0FBQy9EO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0RBQXNELFVBQVU7QUFDaEUsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZUFBZTtBQUMxRSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0IsS0FBSztBQUN4RTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGNBQWM7QUFDN0YsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6Qyx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDYjtBQUNEO0FBQ0M7QUFDSDtBQUNLO0FBQ0Q7QUFDTztBQUNOO0FBQ007QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8wMS5wcmltaXRpdmUtZGF0YS10eXBlcy5qcyIsIndlYnBhY2s6Ly9qcy1mdW5kYW1lbnRhbHMvLi9hcHAvMDIuc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9qcy1mdW5kYW1lbnRhbHMvLi9hcHAvMDMuYXJyYXlzLmpzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8wNC5vYmplY3RzLmpzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8wNS5kYXRlLmpzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8wNi5mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vanMtZnVuZGFtZW50YWxzLy4vYXBwLzA3LnByb21pc2VzLmpzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8wOC5hc3luYy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vanMtZnVuZGFtZW50YWxzLy4vYXBwLzA5Lml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9qcy1mdW5kYW1lbnRhbHMvLi9hcHAvMTAuc3luYy1nZW5lcmF0b3JzLmpzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC8xMS5kb20uanMiLCJ3ZWJwYWNrOi8vanMtZnVuZGFtZW50YWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy1mdW5kYW1lbnRhbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLWZ1bmRhbWVudGFscy8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnVG9waWM6IFByaW1pdGl2ZSBEYXRhIFR5cGVzJyk7XHJcblxyXG4vLyBUYXNrIDAxXHJcbi8vINCe0LHRitGP0LLQuNGC0LUg0L/QtdGA0LXQvNC10L3QvdGD0Y4gZGF5cyDQuCDQv9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQudGC0LUg0LXQtSDRh9C40YHQu9C+0Lwg0L7RgiAxINC00L4gMTAuXHJcbi8vINCf0YDQtdC+0LHRgNCw0LfRg9C50YLQtSDRjdGC0L4g0YfQuNGB0LvQviDQsiDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdC10LrRg9C90LQg0Lgg0LLRi9Cy0LXQtNC40YLQtSDQsiDQutC+0L3RgdC+0LvRjC5cclxuXHJcblxyXG5cclxuLy8gVGFzayAwMlxyXG4vLyDQntCx0YrRj9Cy0LjRgtC1INC00LLQtSDQv9C10YDQtdC80LXQvdC90YvQtTogYWRtaW4g0LggbmFtZS4g0KPRgdGC0LDQvdC+0LLQuNGC0LUg0LfQvdCw0YfQtdC90LjQtSDQv9C10YDQtdC80LXQvdC90L7QuSBuYW1lXHJcbi8vINCyINCy0LDRiNC1INC40LzRjy4g0KHQutC+0L/QuNGA0YPQudGC0LUg0Y3RgtC+INC30L3QsNGH0LXQvdC40LUg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4gYWRtaW4g0Lgg0LLRi9Cy0LXQtNC40YLQtSDQtdCz0L4g0LIg0LrQvtC90YHQvtC70YwuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMDNcclxuLy8g0J7QsdGK0Y/QstC40YLQtSDRgtGA0Lgg0L/QtdGA0LXQvNC10L3QvdGL0YU6IGEsIGIsIGMuINCf0YDQuNGB0LLQvtC50YLQtSDQuNC8INGB0LvQtdC00YPRjtGJ0LjQtSDQt9C90LDRh9C10L3QuNGPOiAxMCwgMiwgNS5cclxuLy8g0J7QsdGK0Y/QstC40YLQtSDQv9C10YDQtdC80LXQvdC90YPRjiByZXN1bHQxINC4INCy0YvRh9C40YHQu9C40YLQtSDRgdGD0LzQvNGDINC30L3QsNGH0LXQvdC40Lkg0L/QtdGA0LXQvNC10L3QvdGL0YUgYSwgYiwgYy5cclxuLy8g0J7QsdGK0Y/QstC40YLQtSDQv9C10YDQtdC80LXQvdC90YPRjiBtaW4g0Lgg0LLRi9GH0LjRgdC70LjRgtC1INC80LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQv9C10YDQtdC80LXQvdC90YvRhSBhLCBiLCBjLlxyXG4vLyDQktGL0LLQtdC00LjRgtC1INGA0LXQt9GD0LvRjNGC0LDRgiDQsiDQutC+0L3RgdC+0LvRjC5cclxuXHJcblxyXG5cclxuLy8gVGFzayAwNFxyXG4vLyDQntCx0YrRj9Cy0LjRgtC1INGC0YDQuCDQv9C10YDQtdC80LXQvdC90YvRhTogaG91ciwgbWludXRlLCBzZWNvbmQuINCf0YDQuNGB0LLQvtC50YLQtSDQuNC8INGB0LvQtdC00YPRjtGJ0LjQtSDQt9C90LDRh9C10L3QuNGPOlxyXG4vLyAxMCwgNDAsIDI1LiDQktGL0LLQtdC00LjRgtC1INCyINC60L7QvdGB0L7Qu9GMINCy0YDQtdC80Y8g0LIg0YTQvtGA0LzQsNGC0LUgMTA6NDA6MjUuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMDVcclxuLy8g0J7QsdGK0Y/QstC40YLQtSDQv9C10YDQtdC80LXQvdC90YPRjiBtaW51dGUg0Lgg0L/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LnRgtC1INC10LUg0YbQtdC70YvQvCDRh9C40YHQu9C+0LwuXHJcbi8vINCS0YvRh9C40YHQu9C40YLQtSDQuiDQutCw0LrQvtC5INGH0LXRgtCy0LXRgNGC0Lgg0L/RgNC40L3QsNC00LvQtdC20LjRgiDRjdGC0L4g0YfQuNGB0LvQviDQuCDQstGL0LLQtdC00LjRgtC1INCyINC60L7QvdGB0L7Qu9GMLlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDA2XHJcbi8vINCe0LHRitGP0LLQuNGC0LUg0LTQstC1INC/0LXRgNC10LzQtdC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDRgdC+0LTQtdGA0LbQsNGCINGB0YLQvtC40LzQvtGB0YLRjCDRgtC+0LLQsNGA0L7QsjpcclxuLy8g0L/QtdGA0LLRi9C5INGC0L7QstCw0YAgLSAwLjEwIFVTRCwg0LLRgtC+0YDQvtC5IC0gMC4yMCBVU0RcclxuLy8g0JLRi9GH0LjRgdC70LjRgtC1INGB0YPQvNC80YMg0Lgg0LLRi9Cy0LXQtNC40YLQtSDQsiDQutC+0L3RgdC+0LvRjC4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSB0b0ZpeGVkKClcclxuXHJcblxyXG5cclxuLy8gVGFzayAwN1xyXG4vLyDQntCx0YrRj9Cy0LjRgtC1INC/0LXRgNC10LzQtdC90L3Rg9GOIGEuXHJcbi8vINCV0YHQu9C4INC30L3QsNGH0LXQvdC40LUg0L/QtdGA0LXQvNC10L3QvdC+0Lkg0YDQsNCy0L3QviAwLCDQstGL0LLQtdC00LjRgtC1INCyINC60L7QvdGB0L7Qu9GMIFwiVHJ1ZVwiLCDQuNC90LDRh9C1IFwiRmFsc2VcIi5cclxuLy8g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0LHRg9C00LXRgiDQv9C+0Y/QstC70Y/RgtGM0YHRjyDQsiDQutC+0L3RgdC+0LvQuCDQtNC70Y8g0LfQvdCw0YfQtdC90LjQuSAxLCAwLCAtMy5cclxuXHJcblxyXG5cclxuLy8gVGFzayAwOFxyXG4vLyDQntCx0YrRj9Cy0LjRgtC1INC00LLQtSDQv9C10YDQtdC80LXQvdC90YvRhTogYSwgYi4g0JLRi9GH0LjRgdC70LjRgtC1INC40YUg0YHRg9C80LzRgyDQuCDQv9GA0LjRgdCy0L7QudGC0LUg0L/QtdGA0LXQvNC10L3QvdC+0LkgcmVzdWx0LlxyXG4vLyDQldGB0LvQuCDRgNC10LfRg9C70YzRgtCw0YIg0LHQvtC70YzRiNC1IDUsINCy0YvQstC10LTQuNGC0LUg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLCDQuNC90LDRh9C1INGD0LzQvdC+0LbRgtC1INC10LPQviDQvdCwIDEwXHJcbi8vINC4INCy0YvQstC10LTQuNGC0LUg0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vINCU0LDQvdC90YvQtSDQtNC70Y8g0YLQtdGB0YLQuNGA0L7QstCw0L3QuNGPOiAyLCA1INC4IDMsIDEuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMDlcclxuLy8g0J7QsdGK0Y/QstC40YLQtSDQv9C10YDQtdC80LXQvdC90YPRjiBtb250aCDQuCDQv9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQudGC0LUg0LXQtSDRh9C40YHQu9C+0Lwg0L7RgiAxINC00L4gMTIuXHJcbi8vINCS0YvRh9C40YHQu9C40YLQtSDQstGA0LXQvNGPINCz0L7QtNCwINC4INCy0YvQstC10LTQuNGC0LUg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDEwXHJcbi8vINCS0YvQstC10LTQuNGC0LUg0LIg0LrQvtC90YHQvtC70Ywg0LLRgdC1INGH0LjRgdC70LAg0L7RgiAxINC00L4gMTAuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMTFcclxuLy8g0JLRi9Cy0LXQtNC40YLQtSDQsiDQutC+0L3RgdC+0LvRjCDQstGB0LUg0YfQtdGC0L3Ri9C1INGH0LjRgdC70LAg0L7RgiAxINC00L4gMTUuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMTJcclxuLy8g0J3QsNGA0LjRgdGD0LnRgtC1INCyINC60L7QvdGB0L7Qu9C1INC/0LjRgNCw0LzQuNC00YMg0L3QsCAxMCDRg9GA0L7QstC90LXQuSDQutCw0Log0L/QvtC60LDQt9Cw0L3QviDQvdC40LbQtVxyXG4vLyB4XHJcbi8vIHh4XHJcbi8vIHh4eFxyXG4vLyB4eHh4XHJcbi8vIC4uLlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDEzXHJcbi8vINCd0LDRgNC40YHRg9C50YLQtSDQsiDQutC+0L3RgdC+0LvQtSDQv9C40YDQsNC80LjQtNGDINC90LAgOSDRg9GA0L7QstC90LXQuSDQutCw0Log0L/QvtC60LDQt9Cw0L3QviDQvdC40LbQtVxyXG4vLyAxXHJcbi8vIDIyXHJcbi8vIDMzM1xyXG4vLyA0NDQ0XHJcbi8vIC4uLlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDE0XHJcbi8vINCX0LDQv9GA0L7RgdC40YLQtSDRgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LrQsNC60L7QtSDQu9C40LHQviDQt9C90LDRh9C10L3QuNC1INC4INCy0YvQstC10LTQuNGC0LUg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDE1XHJcbi8vINCf0LXRgNC10L/QuNGI0LjRgtC1IGlmINC40YHQv9C+0LvRjNC30YPRjyDRgtC10YDQvdCw0YDQvdGL0Lkg0L7Qv9C10YDRgtC+0YBcclxuLy8gaWYgKGEgKyBiIDwgNCkge1xyXG4vLyAgIHJlc3VsdCA9ICfQnNCw0LvQvic7XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgcmVzdWx0ID0gJ9Cc0L3QvtCz0L4nO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMTZcclxuLy8g0J/QtdGA0LXQv9C40YjQuNGC0LUgaWYuLmVsc2Ug0LjRgdC/0L7Qu9GM0LfRg9GPINC90LXRgdC60L7Qu9GM0LrQviDRgtC10YDQvdCw0YDQvdGL0YUg0L7Qv9C10YDQsNGC0L7RgNC+0LIuXHJcbi8vIHZhciBtZXNzYWdlO1xyXG4vLyBpZiAobG9naW4gPT0gJ9CS0LDRgdGPJykge1xyXG4vLyAgIG1lc3NhZ2UgPSAn0J/RgNC40LLQtdGCJztcclxuLy8gfSBlbHNlIGlmIChsb2dpbiA9PSAn0JTQuNGA0LXQutGC0L7RgCcpIHtcclxuLy8gICBtZXNzYWdlID0gJ9CX0LTRgNCw0LLRgdGC0LLRg9C50YLQtSc7XHJcbi8vIH0gZWxzZSBpZiAobG9naW4gPT0gJycpIHtcclxuLy8gICBtZXNzYWdlID0gJ9Cd0LXRgiDQu9C+0LPQuNC90LAnO1xyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIG1lc3NhZ2UgPSAnJztcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDE3XHJcbi8vINCX0LDQvNC10L3QuNGC0LUgZm9yINC90LAgd2hpbGUg0LHQtdC3INC40LfQvNC10L3QtdC90LjRjyDQv9C+0LLQtdC00LXQvdC40Y8g0YbQuNC60LvQsFxyXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4vLyAgIGFsZXJ0KCBcItC90L7QvNC10YAgXCIgKyBpICsgXCIhXCIgKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIFRhc2sgMThcclxuLy8g0J3QsNC/0LjRiNC40YLQtSDRhtC40LrQuywg0LrQvtGC0L7RgNGL0Lkg0L/RgNC10LTQu9Cw0LPQsNC10YIgcHJvbXB0INCy0LLQtdGB0YLQuCDRh9C40YHQu9C+LCDQsdC+0LvRjNGI0LXQtSAxMDAuXHJcbi8vINCV0YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQstCy0ZHQuyDQtNGA0YPQs9C+0LUg0YfQuNGB0LvQviDigJMg0L/QvtC/0YDQvtGB0LjRgtGMINCy0LLQtdGB0YLQuCDQtdGJ0ZEg0YDQsNC3LCDQuCDRgtCw0Log0LTQsNC70LXQtS5cclxuLy8g0KbQuNC60Lsg0LTQvtC70LbQtdC9INGB0L/RgNCw0YjQuNCy0LDRgtGMINGH0LjRgdC70L4g0L/QvtC60LAg0LvQuNCx0L4g0L/QvtGB0LXRgtC40YLQtdC70Ywg0L3QtSDQstCy0LXQtNGR0YIg0YfQuNGB0LvQvixcclxuLy8g0LHQvtC70YzRiNC10LUgMTAwLCDQu9C40LHQviDQvdC1INC90LDQttC80ZHRgiDQutC90L7Qv9C60YMgQ2FuY2VsIChFU0MpLlxyXG4vLyDQn9GA0LXQtNGD0YHQvNCw0YLRgNC40LLQsNGC0Ywg0L7QsdGA0LDQsdC+0YLQutGDINC90LXRh9C40YHQu9C+0LLRi9GFINGB0YLRgNC+0Log0LIg0Y3RgtC+0Lkg0LfQsNC00LDRh9C1INC90LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+LlxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDE5XHJcbi8vINCf0LXRgNC10L/QuNGB0LDRgtGMINGB0LvQtdC00YPRjtGJ0LjQuSDQutC+0LQg0LjRgdC/0L7Qu9GM0LfRg9GPIHN3aXRjaFxyXG4vLyB2YXIgYSA9ICtwcm9tcHQoJ2E/JywgJycpO1xyXG4vLyBpZiAoYSA9PSAwKSB7XHJcbi8vICAgYWxlcnQoIDAgKTtcclxuLy8gfVxyXG4vLyBpZiAoYSA9PSAxKSB7XHJcbi8vICAgYWxlcnQoIDEgKTtcclxuLy8gfVxyXG4vLyBpZiAoYSA9PSAyIHx8IGEgPT0gMykge1xyXG4vLyAgIGFsZXJ0KCAnMiwzJyApO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gVGFzayAyMFxyXG4vLyDQntCx0YrRj9Cy0LjRgtC1INC/0LXRgNC10LzQtdC90L3Rg9GOINC4INC/0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C50YLQtSDQtdC1INGB0YLRgNC+0YfQvdGL0Lwg0LfQvdCw0YfQtdC90LjQtdC8INCyINC/0LXRgNC10LzQtdC90L3QvtC8XHJcbi8vINGA0LXQs9C40YHRgtGA0LUuICjQndCw0L/RgNC40LzQtdGAINGC0LDQuiBcItGC0LDQntCe0L7QvtCe0LTQtNCe0J5cIilcclxuLy8g0J3QsNC/0LjRiNC40YLQtSDQutC+0LQsINC60L7RgtC+0YDRi9C5INC/0YDQtdC+0LHRgNCw0LfRg9C10YIg0Y3RgtGDINGB0YLRgNC+0LrRgyDQuiDQstC40LTRgzpcclxuLy8g0L/QtdGA0LLQsNGPINCx0YPQutCy0LAg0LIg0LLQtdGA0YXQvdC10Lwg0YDQtdCz0LjRgdGC0YDQtSwg0L7RgdGC0LDQu9GM0L3Ri9C1INCx0YPQutCy0Ysg0LIg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LUuXHJcbi8vINCS0YvQstC10LTQuNGC0LUg0YDQtdC30YPQu9GM0YLQsNGCINGA0LDQsdC+0YLRiyDQsiDQutC+0L3RgdC+0LvRjFxyXG4vLyDQmNGB0L/QvtC70YzQt9GD0LnRgtC1OiB0b1VwcGVyQ2FzZS90b0xvd2VyQ2FzZSwgc2xpY2UuXHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMjFcclxuLy8g0J3QsNC/0LjRiNC40YLQtSDQutC+0LQsINC60L7RgtC+0YDRi9C5INCy0YvQstC+0LTQuNGCINCyINC60L7QvdGB0L7Qu9GMIHRydWUsINC10YHQu9C4INGB0YLRgNC+0LrQsCBzdHIg0YHQvtC00LXRgNC20LjRglxyXG4vLyDigJ52aWFncmHigJwg0LjQu9C4IOKAnlhYWOKAnCwg0LAg0LjQvdCw0YfQtSBmYWxzZS5cclxuLy8g0KLQtdGB0YLQvtCy0YvQtSDQtNCw0L3QvdGL0LU6ICdidXkgVmlBZ1JBIG5vdycsICdmcmVlIHh4eHh4J1xyXG5cclxuXHJcblxyXG4vLyBUYXNrIDIyXHJcbi8vINCd0LDQv9C40YjQuNGC0LUg0LrQvtC0LCDQutC+0YLQvtGA0YvQuSDQv9GA0L7QstC10YDRj9C10YIg0LTQu9C40L3RgyDRgdGC0YDQvtC60Lggc3RyLCDQuCDQtdGB0LvQuCDQvtC90LAg0L/RgNC10LLQvtGB0YXQvtC00LjRglxyXG4vLyBtYXhsZW5ndGgg4oCTINC30LDQvNC10L3Rj9C10YIg0LrQvtC90LXRhiBzdHIg0L3QsCBcIi4uLlwiLCDRgtCw0Log0YfRgtC+0LHRiyDQtdC1INC00LvQuNC90LAg0YHRgtCw0LvQsCDRgNCw0LLQvdCwIG1heGxlbmd0aC5cclxuLy8g0KDQtdC30YPQu9GM0YLQsNGC0L7QvCDQtNC+0LvQttC90LAg0LHRi9GC0YwgKNC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCkg0YPRgdC10YfRkdC90L3QsNGPINGB0YLRgNC+0LrQsC5cclxuLy8g0JLRi9Cy0LXQtNC40YLQtSDRgdGC0YDQvtC60YMg0LIg0LrQvtC90YHQvtC70YxcclxuLy8g0KLQtdGB0YLQvtCy0YvQtSDQtNCw0L3QvdGL0LU6XHJcbi8vICBcItCS0L7Rgiwg0YfRgtC+INC80L3QtSDRhdC+0YLQtdC70L7RgdGMINCx0Ysg0YHQutCw0LfQsNGC0Ywg0L3QsCDRjdGC0YMg0YLQtdC80YM6XCIsIDIwXHJcbi8vICBcItCS0YHQtdC8INC/0YDQuNCy0LXRgiFcIiwgMjBcclxuXHJcblxyXG5cclxuLy8gVGFzayAyM1xyXG4vLyDQndCw0L/QuNGI0LjRgtC1INC60L7QtCwg0LrQvtGC0L7RgNGL0Lkg0LjQtyDRgdGC0YDQvtC60LggJDEwMCDQv9C+0LvRg9GH0LjRgiDRh9C40YHQu9C+INC4INCy0YvQstC10LTQuNGC0LUg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG5cclxuXHJcbi8vIFRhc2sgMjRcclxuLy8g0J3QsNC/0LjRiNC40YLQtSDQutC+0LQsINC60L7RgtC+0YDRi9C5INC/0YDQvtCy0LXRgNC40YIsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQv9C10YDQtdC80LXQvdC90LDRjyDQv9GA0L7QvNC40YHQvtC8XHJcblxyXG5cclxuIiwiY29uc29sZS5sb2coJ1RvcGljOiBTdHJpbmdzJyk7XHJcbi8vIFRhc2sgMDEuIHBhZFN0YXJ0XHJcbi8vIFJVOiDQntCx0YrRj9Cy0LjRgtC1INGC0YDQuCDQv9C10YDQtdC80LXQvdC90YvRhTogaG91ciwgbWludXRlLCBzZWNvbmQuXHJcbi8vICAgICDQn9GA0LjRgdCy0L7QudGC0LUg0LjQvCDRgdC70LXQtNGD0Y7RidC40LUg0LfQvdCw0YfQtdC90LjRjzogNCwgMzUsIDUuXHJcbi8vICAgICDQktGL0LLQtdC00LjRgtC1INCyINC60L7QvdGB0L7Qu9GMINCy0YDQtdC80Y8g0LIg0YTQvtGA0LzQsNGC0LUgMDQ6MzU6MDUuXHJcbi8vIEVOOiBEZWNsYXJlIHRocmVlIHZhcmlhYmxlczogaG91ciwgbWludXRlLCBzZWNvbmQuXHJcbi8vICAgICBBc3NpZ24gdGhlbSB0aGUgZm9sbG93aW5nIHZhbHVlczogNCwgMzUsIDUuXHJcbi8vICAgICBEaXNwbGF5IHRoZSB0aW1lIGluIHRoZSBmb3JtYXQgMDQ6MzU6MDUgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBUYXNrIDAyLiByZXBlYXRcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4sINC60L7RgtC+0YDQsNGPINCy0YvQstC10LTQtdGCINCyINC60L7QvdGB0L7Qu9GMINC/0LjRgNCw0LzQuNC00YMg0L3QsCA5INGD0YDQvtCy0L3QtdC5INC60LDQuiDQv9C+0LrQsNC30LDQvdC+INC90LjQttC1XHJcbi8vICAgICAxXHJcbi8vICAgICAyMlxyXG4vLyAgICAgMzMzXHJcbi8vICAgICA0NDQ0XHJcbi8vICAgICAuLi5cclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIGEgOSBsZXZlbCBweXJhbWlkIGluIHRoZSBjb25zb2xlIGFjY29yZGluZyB0byB0aGVcclxuLy8gICAgIGZvbGxvd2luZyBwYXR0ZXJuXHJcbi8vICAgICAxXHJcbi8vICAgICAyMlxyXG4vLyAgICAgMzMzXHJcbi8vICAgICA0NDQ0XHJcbi8vICAgICAuLi5cclxuXHJcbi8vIFRhc2sgMDMuIGluY2x1ZGVzXHJcbi8vIFJVOiDQndCw0L/QuNGI0LjRgtC1INC60L7QtCwg0LrQvtGC0L7RgNGL0Lkg0LLRi9Cy0L7QtNC40YIg0LIg0LrQvtC90YHQvtC70YwgdHJ1ZSwg0LXRgdC70Lgg0YHRgtGA0L7QutCwIHN0ciDRgdC+0LTQtdGA0LbQuNGCXHJcbi8vICAgICAndmlhZ3JhJyDQuNC70LggJ1hYWCcsINCwINC40L3QsNGH0LUgZmFsc2UuXHJcbi8vICAgICDQotC10YHRgtC+0LLRi9C1INC00LDQvdC90YvQtTogJ2J1eSBWaUFnUkEgbm93JywgJ2ZyZWUgeHh4eHgnXHJcbi8vIEVOOiBDcmVhdGUgYSBzbmlwcGV0IG9mIGNvZGUgd2hpY2ggZGlzcGxheXMgdGhlIHZhbHVlIHRydWUgaW4gdGhlIGNvbnNvbGVcclxuLy8gICAgIHdoZW4gc3RyIGNvbnRhaW5zICd2aWFncmEnIG9yICdYWFgnLCBvdGhlcndpc2UgaXQgZGlzcGxheXMgZmFsc2UuXHJcblxyXG4vLyBUYXNrIDA0LiBpbmNsdWRlcyArIGluZGV4XHJcbi8vIFJVOiDQn9GA0L7QstC10YDQuNGC0YwsINGB0L7QtNC10YDQttC40YIg0LvQuCDRgdGC0YDQvtC60LAg0LLRgtC+0YDQvtC1INCy0YXQvtC20LTQtdC90LjQtSDQv9C+0LTRgdGC0YDQvtC60LgsXHJcbi8vICAgICDQstC10YDQvdGD0YLRjCB0cnVlL2ZhbHNlLlxyXG4vLyBFTjogQ2hlY2sgd2hldGhlciB0aGUgc3RyaW5nIGNvbnRhaW5zIGEgc2Vjb25kIG9jY3VycmVuY2Ugb2YgYSBzdWJzdHJpbmcsXHJcbi8vICAgICByZXR1cm4gdHJ1ZSAvIGZhbHNlLlxyXG5cclxuLy8gVGFzayAwNS4gVGVtcGxhdGUgbGl0ZXJhbFxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0YHRgtGA0L7QutGDOiBcInRlbiB0aW1lcyB0d28gdG90YWxseSBpcyAyMFwiXHJcbi8vICAgICDQuNGB0L/QvtC70YzQt9GD0Y8g0L/QtdGA0LXQvNC10L3QvdGL0LU6XHJcbi8vICAgICBjb25zdCBhID0gMTA7XHJcbi8vICAgICBjb25zdCBiID0gMjtcclxuLy8gICAgINC4IHRlbXBsYXRlIGxpdGVyYWxcclxuLy8gRU46IENyZWF0ZSBzIHN0cmluZyBcInRlbiB0aW1lcyB0d28gdG90YWxseSBpcyAyMFwiXHJcbi8vICAgICB1c2luZyB0aGUgZm9sbG93aW5nIHZhcmlhYmxlczpcclxuLy8gICAgIGNvbnN0IGEgPSAxMDtcclxuLy8gICAgIGNvbnN0IGIgPSAyO1xyXG4vLyAgICAgYW5kIHRlbXBsYXRlIGxpdGVyYWxcclxuXHJcbi8vIFRhc2sgMDYuIG5vcm1hbGl6ZVxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiwg0LrQvtGC0L7RgNCw0Y8g0YHRgNCw0LLQvdC40LLQsNC10YIg0Y7QvdC40LrQvtC0INGB0YLRgNC+0LrQuC5cclxuLy8gICAgINCh0YDQsNCy0L3QuNGC0LUg0LTQstC1INGB0YLRgNC+0LrQuFxyXG4vLyAgICAgdmFyIHN0cjEgPSAnXFx1MDA2ZFxcdTAwNjFcXHUwMGYxJztcclxuLy8gICAgIHZhciBzdHIyID0gJ1xcdTAwNmRcXHUwMDYxXFx1MDA2ZVxcdTAzMDMnO1xyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgdW5pY29kZSBzdHJpbmdzLlxyXG4vLyAgICAgQ29tcGFyZSAyIHN0cmluZ3M6XHJcbi8vICAgICB2YXIgc3RyMSA9ICdcXHUwMDZkXFx1MDA2MVxcdTAwZjEnO1xyXG4vLyAgICAgdmFyIHN0cjIgPSAnXFx1MDA2ZFxcdTAwNjFcXHUwMDZlXFx1MDMwMyc7XHJcblxyXG4vLyBUYXNrIDA3LiBlbmRzV2l0aFxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiwg0LrQvtGC0L7RgNCw0Y8g0L3QsCDQstGF0L7QtCDQv9C+0LvRg9GH0LDQtdGCINC80LDRgdGB0LjQsiDQuNC80LXQvSDRhNCw0LnQu9C+0LIg0Lgg0YDQsNGB0YjQuNGA0LXQvdC40LUg0YTQsNC50LvQsFxyXG4vLyAgICAg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIsINC60L7RgtC+0YDRi9C5INGB0L7QtNC10YDQttC40YIg0YTQsNC50LvRiyDRg9C60LDQt9Cw0L3QvdC+0LPQviDRgNCw0YHRiNC40YDQtdC90LjRjy5cclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyBhbiBhcnJheSBvZiBmaWxlIG5hbWVzIGFuZCBhIGZpbGUgZXh0ZW5zaW9uIGFzIGl0cyBwYXJhbWV0ZXJzXHJcbi8vICAgICBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBmaWxlcyBvZiB0aGUgc3BlY2lmaWVkIGV4dGVuc2lvbi5cclxuXHJcbi8vIFRhc2sgMDguIFN0cmluZy5mcm9tQ29kZVBvaW50XHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDRhNGD0L3QutGG0LjRjiwg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0LIg0LrQvtC90YHQvtC70Ywg0YHRgtGA0L7Rh9C60YMg0LIg0YTQvtGA0LzQsNGC0LUgJ9GB0LjQvNCy0L7QuyAtINC60L7QtCdcclxuLy8gICAgINC00LvRjyDQutC+0LTQvtCyINCyINC00LjQsNC/0LDQt9C+0L3QtSA3ODAwMCAtIDgwMDAwLlxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyBhIGxpbmUgaW4gdGhlIGZvcm1hdCAnY2hhcmFjdGVyIC0gY29kZScgdG8gdGhlIGNvbnNvbGVcclxuLy8gICAgIGZvciBjb2RlcyBpbiB0aGUgcmFuZ2Ugb2YgNzgwMDAgLSA4MDAwMC5cclxuXHJcbi8vIFRhc2sgMDlcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4sINC60L7RgtC+0YDQsNGPINC00L7Qu9C20L3QsCDQstGL0LLQvtC00LjRgtGMINCyINC60L7QvdGB0L7Qu9GMINGB0LvQtdC00YPRjtGJ0YPRjiDQv9C40YDQsNC80LjQtNGDXHJcbi8vICAgICDQn9GA0LjQvNC10YA6XHJcbi8vICAgICBweXJhbWlkKDEpID0gJyMnXHJcbi8vXHJcbi8vICAgICBweXJhbWlkKDIpID0gJyAjICdcclxuLy8gICAgICAgICAgICAgICAgICAnIyMjJ1xyXG4vL1xyXG4vLyAgICAgcHlyYW1pZCgzKSA9ICcgICMgICdcclxuLy8gICAgICAgICAgICAgICAgICAnICMjIyAnXHJcbi8vICAgICAgICAgICAgICAgICAgJyMjIyMjJ1xyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgZGlzcGxheSB0aGUgbmV4dCBweXJhbWlkIGluIHRoZSBjb25zb2xlXHJcbi8vICAgICBFeGFtcGxlOlxyXG4vLyAgICAgcHlyYW1pZCgxKSA9ICcjJ1xyXG4vL1xyXG4vLyAgICAgcHlyYW1pZCgyKSA9ICcgIyAnXHJcbi8vICAgICAgICAgICAgICAgICAgJyMjIydcclxuLy9cclxuLy8gICAgIHB5cmFtaWQoMykgPSAnICAjICAnXHJcbi8vICAgICAgICAgICAgICAgICAgJyAjIyMgJ1xyXG4vLyAgICAgICAgICAgICAgICAgICcjIyMjIydcclxuXHJcbi8vIFRhc2sgMTBcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0YLQtdCzLdGE0YPQvdC60YbQuNGOIGN1cnJlbmN5LCDQutC+0YLQvtGA0LDRjyDRhNC+0YDQvNC40YLQuNGA0YPQtdGCINGH0LjRgdC70LAg0LTQviDQtNCy0YPRhSDQt9C90LDQutC+0LIg0L/QvtGB0LvQtSDQt9Cw0L/Rj9GC0L7QuVxyXG4vLyAgICAg0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC30L3QsNC6INC00L7Qu9C70LDRgNCwINC/0LXRgNC10LQg0YfQuNGB0LvQvtC8INCyINGI0LDQsdC70L7QvdC90L7QvCDQu9C40YLQtdGA0LDQu9C1LlxyXG4vLyBFTjogQ3JlYXRlIGEgY3VycmVuY3kgdGFnIGZ1bmN0aW9uIHRoYXQgZm9ybXMgbnVtYmVycyB1cCB0byB0d28gZGVjaW1hbCBkaWdpdHMuXHJcbi8vICAgICBhbmQgYWRkcyBhIGRvbGxhciBzaWduIGJlZm9yZSB0aGUgbnVtYmVyIGluIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsLlxyXG4iLCJjb25zb2xlLmxvZygnVG9waWM6IEFycmF5cycpO1xyXG5cclxuLy8gVGFzayAwMVxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyLiDQn9C+0LvRg9GH0LjRgtGMINC/0L7RgdC70LXQtNC90LjQuSDRjdC70LXQvNC10L3RgiDQvNCw0YHRgdC40LLQsC5cclxuLy8gICAgIDEuICAgINCR0LXQtyDRg9C00LDQu9C10L3QuNGPINGN0YLQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC3INC80LDRgdGB0LjQstCwLlxyXG4vLyAgICAgMi4gICAg0KEg0YPQtNCw0LvQtdC90LjQtdC8INGN0YLQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC3INC80LDRgdGB0LjQstCwXHJcbi8vICAgINCS0YvQstC10LTQuNGC0LUg0LzQsNGB0YHQuNCy0Ysg0LIg0LrQvtC90YHQvtC70YxcclxuLy8gRU46IENyZWF0ZSBhbiBhcnJheSBvZiBhbnkgZWxlbWVudHMuIEdldCB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhpcyBhcnJheS5cclxuLy8gICAgIDEuICAgIHdpdGhvdXQgZGVsZXRpbmcgdGhpcyBlbGVtZW50IGZyb20gYW4gYXJyYXk7XHJcbi8vICAgICAyLiAgICB3aXRoIGRlbGV0aW5nIHRoaXMgZWxlbWVudCBmcm9tIGFuIGFycmF5LlxyXG4vLyAgICAgRGlzcGxheSB0aGVtIGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAwMlxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyINC70Y7QsdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyLiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINCyINC60L7QvdC10YYg0LzQsNGB0YHQuNCy0LAuXHJcbi8vICAgICAxLiDQnNC+0LTQuNGE0LjRhtC40YDQvtCy0LDRgtGMINGC0LXQutGD0YnQuNC5INC80LDRgdGB0LjQslxyXG4vLyAgICAgMi4g0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LJcclxuLy8gICAgINCS0YvQstC10LTQuNGC0LUg0LzQsNGB0YHQuNCy0Ysg0LIg0LrQvtC90YHQvtC70YxcclxuLy8gRU46IENyZWF0ZSBhbiBhcnJheSBvZiBhbnkgZWxlbWVudHMuIEFkZCBuZXcgZWxlbWVudCB0byB0aGUgZW5kIG9mIHRoaXMgYXJyYXkuXHJcbi8vICAgICAxLiBtdXRhdGUgY3VycmVudCBhcnJheTtcclxuLy8gICAgIDIuIGNyZWF0ZSBhIG5ldyBhcnJheS5cclxuLy8gICAgIERpc3BseSB0aGVtIGluIHRoZSBjb25vbGUuXHJcblxyXG4vLyBUYXNrIDAzXHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LIg0LvRjtCx0YvRhSDRjdC70LXQvNC10L3RgtC+0LIuINCS0YHRgtCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RgiDQv9C+0LQg0LjQvdC00LXQutGB0L7QvCAzLlxyXG4vLyAgICAgMS4g0JzQvtC00LjRhNC40YbQuNGA0L7QstCw0YLRjCDRgtC10LrRg9GJ0LjQuSDQvNCw0YHRgdC40LJcclxuLy8gICAgIDIuINCh0L7Qt9C00LDRgtGMINC90L7QstGL0Lkg0LzQsNGB0YHQuNCyXHJcbi8vICAgICDQktGL0LLQtdC00LjRgtC1INC80LDRgdGB0LjQstGLINCyINC60L7QvdGB0L7Qu9GMXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXJyYXkgb2YgYW55IGVsZW1lbnRzLiBJbnNlcnQgYSBuZXcgZWxlbWVudCB3aXRoIGluZGV4IDMuXHJcbi8vICAgICAxLiBtdXRhdGUgY3VycmVudCBhcnJheTtcclxuLy8gICAgIDIuIGNyZWF0ZSBhIG5ldyBhcnJheS5cclxuLy8gICAgIERpc3BseSB0aGVtIGluIHRoZSBjb25vbGUuXHJcblxyXG5cclxuXHJcblxyXG4vLyBUYXNrIDA0XHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LIg0LvRjtCx0YvRhSDRjdC70LXQvNC10L3RgtC+0LIuXHJcbi8vICAgICDQntCx0L7QudGC0Lgg0Y3Qu9C10LzQtdC90YLRiyDQvNCw0YHRgdC40LLQsCDQuCDQstGL0LLQtdGB0YLQuCDQuNGFINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIGFueSBlbGVtZW50cy5cclxuLy8gICAgIEl0ZXJhdGUgb3ZlciB0aGlzIGFycmF5IGFuZCBkaXNwbGF5IGVhY2ggZWxlbWVudCBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMDVcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiDRh9C40YHQtdC7INCyINC00LjQsNC/0LDQt9C+0L3QtSDQvtGCIDAg0LTQviAxMDAuXHJcbi8vICAgICDQn9C+0LTRgdGH0LjRgtCw0YLRjCDQuCDQstGL0LLQtdGC0Lgg0YHRg9C80LzRgyDRgtC10YUg0Y3Qu9C10LzQtdC90YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQsdC+0LvRjNGI0LUgNTAuXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBpbiB0aGUgcmFuZ2UgZnJvbSAwIHRvIDEwMC5cclxuLy8gICAgIENhbGN1bGF0ZSBhbmQgZGlzcGxheSB0aGUgc3VtIG9mIHRoZSBlbGVtZW50cywgd2hpY2ggYXJlIGdyZWF0ZXIgdGhhbiA1MC5cclxuXHJcbi8vIFRhc2sgMDZcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiDRgdGC0YDQvtC6LiDQndCwINC+0YHQvdC+0LLQtSDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwINGB0L7Qt9C00LDRgtGMINGB0YLRgNC+0LrRgyDigJNcclxuLy8gICAgINC+0LHRitC00LjQvdC40YLRjCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQvNCw0YHRgdC40LLQsCwg0LjRgdC/0L7Qu9GM0LfRg9GPINC+0L/RgNC10LTQtdC70LXQvdC90YvQuSDRgNCw0LfQtNC10LvQuNGC0LXQu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIHN0cmluZ3MuIENyZWF0ZSBhIHN0cmluZyBvbiB0aGUgYmFzaXMgb2YgdGhpcyBhcnJheS5cclxuLy8gICAgIFRoaXMgc3RyaW5nIHNob3VsZCBjb250YWluIGFsbCBlbGVtZW50cyBmcm9tIGFuIGFycmF5IHNlcGFyYXRlZCBieSBjZXJ0YWluIGRlbGltZXRlci5cclxuXHJcbi8vIFRhc2sgMDdcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiDRh9C40YHQtdC7INC+0YIgMSDQtNC+IDIwINCyINGB0LvRg9GH0LDQudC90L7QvCDQv9C+0YDRj9C00LrQtS5cclxuLy8gICAgINCe0YJj0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0LzQsNGB0YHQuNCyINC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRji4g0JLRi9Cy0LXRgdGC0Lgg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyAgICAg0J/QvtC70YPRh9C40YLRjCDQvNCw0YHRgdC40LIsINC+0YLRgdC+0YDRgtGA0L7QstCw0L3QvdGL0Lkg0LIg0L7QsdGA0LDRgtC90L7QvCDQv9C+0YDRj9C00LrQtSwg0Lgg0LLRi9Cy0LXRgdGC0Lgg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgaW4gdGhlIHJhbmdlIGZyb20gMSB0byAyMCBpbiByYW5kb20gb3JkZXIuXHJcbi8vICAgICBTb3J0IHRoaXMgYXJyYXkgaW4gYXNjZW5kaW5nIG9yZGVyLiBEaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlLlxyXG4vLyAgICAgQ3JlYXRlIGEgY29weSBvZiB0aGUgcHJldmlvdXMgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlci4gRGlzcGx5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAwOFxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyIFszLCAwLCAtMSwgMTIsIC0yLCAtNCwgMCwgNywgMl1cclxuLy8gICAgINCd0LAg0LXQs9C+INC+0YHQvdC+0LLQtSDRgdC+0LfQtNCw0YLRjCDQvdC+0LLRi9C5INC80LDRgdGB0LjQsiBbLTEsIC0yLCAtNCwgMCwgMCwgMywgMTIsIDcsIDJdLlxyXG4vLyAgICAg0L/QtdGA0LLQsNGPINGH0LDRgdGC0YwgLSDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQtSDRh9C40YHQu9CwINCyINGC0L7QvCDQttC1INC/0L7RgNGP0LTQutC1XHJcbi8vICAgICDQstGC0L7RgNCw0Y8g0YfQsNGB0YLRjCAtINC90YPQu9C4XHJcbi8vICAgICDRgtGA0LXRgtGM0Y8g0YfQsNGB0YLRjCAtINC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Ri9C1INGH0LjRgdC70LAg0LIg0YLQvtC8INC20LUg0L/QvtGA0Y/QtNC60LUuXHJcbi8vIEVOOiBDcmVhdGUgdGhlIGFycmF5OiBbMywgMCwgLTEsIDEyLCAtMiwgLTQsIDAsIDcsIDJdXHJcbi8vICAgICBVc2UgdGhpcyBhcnJheSBhbmQgY3JlYXRlIG5ldyBvbmU6IFstMSwgLTIsIC00LCAwLCAwLCAzLCAxMiwgNywgMl0uXHJcbi8vICAgICBGaXJzdCBwYXJ0IC0gbmVnYXRpdmUgdmFsdWVzIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5IGluIHRoZSBzYW1lIG9yZGVyLFxyXG4vLyAgICAgTmV4dCBwYXJ0IC0gemVyb2VzXHJcbi8vICAgICBMYXN0IHBhcnQgLSBwb3NpdGl2ZSB2YWx1ZXMgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkgaW4gdGhlIHNhbWUgb3JkZXIuXHJcblxyXG4vLyBUYXNrIDA5XHJcbi8vIFJVOiAxLiDQodC+0LfQtNCw0LnRgtC1INC80LDRgdGB0LjQsiBzdHlsZXMg0YEg0Y3Qu9C10LzQtdC90YLQsNC80LggXCJKYXp6XCIsIFwiQmx1ZXNcIi5cclxuLy8gICAgIDIuINCU0L7QsdCw0LLRjNGC0LUg0LIg0LrQvtC90LXRhiDQt9C90LDRh9C10L3QuNC1IFwiUm9jay1uLVJvbGxcIi5cclxuLy8gICAgIDMuINCX0LDQvNC10L3QuNGC0LUg0L/RgNC10LTQv9C+0YHQu9C10LTQvdC10LUg0LfQvdCw0YfQtdC90LjQtSDRgSDQutC+0L3RhtCwINC90LAgXCJDbGFzc2ljc1wiLlxyXG4vLyAgICAgNC4g0KPQtNCw0LvQuNGC0LUg0L/QtdGA0LLRi9C5INGN0LvQtdC80LXQvdGCINC40Lcg0LzQsNGB0YHQuNCy0LAg0Lgg0LLRi9Cy0LXQtNC40YLQtSDQtdCz0L4g0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vICAgICA1LiDQlNC+0LHQsNCy0YzRgtC1INCyINC90LDRh9Cw0LvQviDQtNCy0LAg0Y3Qu9C10LzQtdC90YLQsCDRgdC+INC30L3QsNGH0LXQvdC40Y/QvNC4IFwiUmFwXCIg0LggXCJSZWdnYWVcIi5cclxuLy8gICAgIDYuINCS0YvQstC10LTQuNGC0LUg0LzQsNGB0YHQuNCyINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogMS4gQ3JlYXRlIGFuIGFycmF5IHN0eWxlcyB3aXRoIHR3byBlbGVtZW50cyBcIkphenpcIiwgXCJCbHVlc1wiLlxyXG4vLyAgICAgMi4gQWRkIG5ldyBlbGVtZW50IFwiUm9jay1uLVJvbGxcIiB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cclxuLy8gICAgIDMuIFJlcGxhY2UgdGhlIGxhc3QgYnV0IG9uZSBlbGVtZW50IHdpdGggbmV3IHZhbHVlIFwiQ2xhc3NpY3NcIi5cclxuLy8gICAgIDQuIFJlbW92ZSB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBhcnJheSBhbmQgZGlzcGx5IGl0IGluIHRoZSBjb25zb2xlLlxyXG4vLyAgICAgNS4gQWRkIHR3byBuZXcgZWxlbWVudHMgXCJSYXBcIiBhbmQgXCJSZWdnYWVcIiBhdCB0aGUgYmVnaW5pbmcgb2YgdGhlIGFycmF5LlxyXG4vLyAgICAgNi4gRGlzcGxheSBhbiBhcnJheSBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMTBcclxuLy8gUlU6INCf0L7QtNGB0YfQuNGC0LDRgtGMINCyINGB0YLRgNC+0LrQtSBcImRza2pkaGZranNoZGZramhzZGtqdXJleXRlaXJ1eWlxeXdlaGpraFwiXHJcbi8vICAgICDQvtGC0LTQtdC70YzQvdC+INC60L7Qu9C40YfQtdGB0YLQstC+INCx0YPQutCyIHIsIGssIHQg0Lgg0LLRi9Cy0LXRgdGC0Lgg0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vIEVOOiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBsZXR0ZXJzIHIsIGssIHQgaW4gdGhpcyBzdHJpbmdcclxuLy8gICAgIFwiZHNramRoZmtqc2hkZmtqaHNka2p1cmV5dGVpcnV5aXF5d2VoamtoXCIgYW5kIGRpc3BsYXkgdGhlbSBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMTFcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiDQu9GO0LHRi9GFINGN0LvQtdC80LXQvdGC0L7Qsi5cclxuLy8gICAgINCf0L7Qu9GD0YfQuNGC0Ywg0YHQu9GD0YfQsNC50L3Ri9C5INGN0LvQtdC80LXQvdGCINC40Lcg0LzQsNGB0YHQuNCy0LAg0Lgg0LLRi9Cy0LXRgdGC0Lgg0LXQs9C+INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIGFueSBlbGVtZW50cy5cclxuLy8gICAgIEdldCB0aGUgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGlzIGFycmF5IGFuZCBkaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAxMlxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LTQstGD0LzQtdGA0L3Ri9C5INC80LDRgdGB0LjQsjpcclxuLy8gICAgIDEgMiAzXHJcbi8vICAgICA0IDUgNlxyXG4vLyAgICAgNyA4IDlcclxuLy8gICAgINCS0YvQstC10YHRgtC4INC10LPQviDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IENyZWF0ZSB0d28tZGVtZW50aW9uYWwgYXJyYXk6XHJcbi8vICAgICAxIDIgM1xyXG4vLyAgICAgNCA1IDZcclxuLy8gICAgIDcgOCA5XHJcbi8vICAgICBEaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAxM1xyXG4vLyBSVTog0J/RgNC10L7QsdGA0LDQt9C+0LLQsNGC0Ywg0LzQsNGB0YHQuNCyINC40Lcg0L/RgNC10LTRi9C00YPRidC10LPQviDQt9Cw0LTQsNC90LjRjyDQsiDQvtC00L3QvtC80LXRgNC90YvQuS5cclxuLy8gICAgINCS0YvQstC10YHRgtC4INC10LPQviDQsiDQutC+0L3RgdC+0LvRjFxyXG4vLyBFTjogVHJhbnNmb3JtIGFuIGFycmF5IGZyb20gdGhlIHByZXZpb3VzIHRhc2sgaW50byBvbmUtZGVtZW50aW9uYWwgYXJyYXkuXHJcbi8vICAgICBEaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAxNFxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyINC70Y7QsdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyLlxyXG4vLyAgICAg0J3QsCDQtdCz0L4g0L7RgdC90L7QstC1INC/0L7Qu9GD0YfQuNGC0Ywg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIg4oCTINC/0L7QtNC80L3QvtC20LXRgdGC0LLQviDRjdC70LXQvNC10L3RgtC+0LJcclxuLy8gICAgINC+0YDQuNCz0LjQvdCw0LvRjNC90L7Qs9C+INC80LDRgdGB0LjQstCwINC90LDRh9C40L3QsNGPINGBINC40L3QtNC10LrRgdCwIGEg0Lgg0LfQsNC60LDQvdGH0LjQstCw0Y8g0LjQvdC00LXQutGB0L7QvCBiLlxyXG4vLyAgICAg0JLRi9Cy0LXRgdGC0Lgg0LzQsNGB0YHQuNCyINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIGFueSBlbGVtZW50cy5cclxuLy8gICAgIENyZWF0ZSBuZXcgb25lIG9uIHRoZSBiYXNpcyBvZiB0aGUgb3JpZ2lubCBhcnJheS4gTmV3IGFycmF5IHNob3VsZFxyXG4vLyAgICAgY29udGFpbiBlbGVtZW50cyBmcm9tIGluZGV4IGEgdG8gaW5kZXggYi5cclxuLy8gICAgIERpc3BsYXkgaXQgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBUYXNrIDE1XHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LIg0LvRjtCx0YvRhSDRjdC70LXQvNC10L3RgtC+0LIuXHJcbi8vICAgICDQndCw0LnRgtC4INC40L3QtNC10LrRgSDRg9C60LDQt9Cw0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQsiDQvNCw0YHRgdC40LLQtSDQuCDQstGL0LLQtdGB0YLQuCDQtdCz0L4g0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXJyYXkgb2YgYW55IGVsZW1lbnRzLlxyXG4vLyAgICAgRmluZCB0aGUgaW5kZXggb2YgYSBwYXJ0aWN1bGFyIGVsZW1lbnQgaW4gdGhlIGFycmF5IGFuZCBkaXNwbHkgaXQgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBUYXNrIDE2XHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LIg0YEg0LTRg9Cx0LvRj9C80Lgg0Y3Qu9C10LzQtdC90YLQvtCyLiDQndCwINC10LPQviDQvtGB0L3QvtCy0LUg0YHQvtC30LTQsNGC0Ywg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LJcclxuLy8gICAgINGD0L3QuNC60LDQu9GM0L3Ri9GFINGN0LvQtdC80LXQvdGC0L7QsiAo0YPQtNCw0LvQuNGC0Ywg0LTRg9Cx0LvQuCkuXHJcbi8vICAgICDQktGL0LLQtdGB0YLQuCDQvdC+0LLRi9C5INC80LDRgdGB0LjQsiDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IENyZWF0ZSBhbiBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50cy4gQ3JlYXRlIG5ldyBvbmUgb24gdGhlIGJhc2lzIG9mIHRoZSBvcmlnaW5sIGFycmF5LlxyXG4vLyAgICAgUmVtb3ZlIGR1cGxpY2F0ZWQgZWxlbWVudHMuXHJcbi8vICAgICBEaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAxN1xyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyINGBINC00YPQsdC70Y/QvNC4LiDQndCw0LnRgtC4INC/0LXRgNCy0YvQuSDRjdC70LXQvNC10L3Rgiwg0LrQvtGC0L7RgNGL0Lkg0LTRg9Cx0LvQuNGA0YPQtdGC0YHRjy5cclxuLy8gICAgINCX0LDQvNC10L3QuNGC0Ywg0Y3RgtC+0YIg0Y3Qu9C10LzQtdC90YIg0Lgg0LLRgdC1INC10LPQviDQutC+0L/QuNC4INC90LAg0YHQuNC80LLQvtC7ICcqJy5cclxuLy8gICAgINCS0YvQstC10YHRgtC4INC80LDRgdGB0LjQsiDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IENyZWF0ZSBhbiBhcnJheSB3aXRoIGR1cGxpY2F0ZSBlbGVtZW50cy4gRmluZCBmaXJzdCBkdXBsaWNhdGVkIGVsZW1lbnQuXHJcbi8vICAgICBSZXBsYWNlIHRoaXMgZWxlbWVudCBhbmQgYWxsIGl0cyBjb3BpZXMgd2l0aCBzeW1ib2wgJyonLlxyXG4vLyAgICAgRGlzcGxheSBpdCBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMThcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiDRhtC10LvRi9GFINGH0LjRgdC10LsuINCd0LAg0LXQs9C+INC+0YHQvdC+0LLQtSDRgdC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LLRiyDigJMg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40Y9cclxuLy8gICAgINGN0YLQuNGFINC20LUg0YfQuNGB0LXQuyDQsiDQsdC40L3QsNGA0L3QvtC8LCDQstC+0YHRjNC80LXRgNC40YfQvdC+0Lwg0Lgg0YjQtdGB0YLQvdCw0LTRhtCw0YLQtdGA0LjRh9C90L7QvCDQstC40LTQtS5cclxuLy8gICAgINCS0YvQstC10YHRgtC4INGN0YLQuCDQvNCw0YHRgdC40LLRiyDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IENyZWF0ZSBhbiBhcnJheSBvZiBpbnRlZ2VyIG51bWJlcnMuIENyZWF0ZSAzIG5ldyBvbmVzIG9uIHRoZSBiYXNpcyBvZiB0aGUgb3JpZ2lubCBhcnJheS5cclxuLy8gICAgIEZpcnN0IGFycmF5IGNvbnRhaW5zIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5LlxyXG4vLyAgICAgU2Vjb25kIGFycmF5IGNvbnRhaW5zIHRoZSBvY3RhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkuXHJcbi8vICAgICBUaGlyZCBhcnJheSBjb250YWlucyB0aGUgaGV4YWRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5LlxyXG4vLyAgICAgRGlzcGxheSB0aGVtIGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAxOVxyXG4vLyBSVTog0J/QvtC70YPRh9C40YLRjCDQuNC3INGB0YLRgNC+0LrQuCAnYSBiaWcgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyDQvNCw0YHRgdC40LIg0YHQu9C+0LIsXHJcbi8vICAgICDQutC+0YLQvtGA0YvQuSDRgdC+0LTQtdGA0LbQuNGCINGN0LvQtdC80LXQvdGC0YssINC00LvQuNC90LAg0LrQvtGC0L7RgNGL0YUg0L3QtSDQsdC+0LvRjNGI0LUgMyDRgdC40LzQstC+0LvQsC5cclxuLy8gICAgINCS0YvQstC10YHRgtC4INC80LDRgdGB0LjQsiDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IEdldCB0aGUgYXJyYXkgb2Ygd29yZHMgZnJvbSB0aGUgc3RyaW5nICdhIGJpZyBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnLlxyXG4vLyAgICAgVGhpcyBhcnJheSBzaG91bGQgY29udGFpbiBvbmx5IHdvcmRzLCB0aGUgbGVuZ3RoIG9mIHdoaWNoIGlzIDMgb3IgbGVzcyBjaGFyYWN0ZXJzLlxyXG4vLyAgICAgRGlzcGxheSBpdCBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMjBcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC80LDRgdGB0LjQsiwg0LrQvtGC0L7RgNGL0Lkg0YHQvtC00LXRgNC20LjRgiDRgdGC0YDQvtC60Lgg0Lgg0YfQuNGB0LvQsC5cclxuLy8gICAgINCf0YDQvtCy0LXRgNC40YLRjCwg0YHQvtC00LXRgNC20LjRgiDQu9C4INC80LDRgdGB0LjQsiDRgtC+0LvRjNC60L4g0YHRgtGA0L7QutC4LlxyXG4vLyAgICAg0JLRi9Cy0LXRgtC4INGA0LXQt9GD0LvRjNGC0LDRgiDQsiDQutC+0L3RgdC+0LvRjFxyXG4vLyBFTjogQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIHN0cmluZ3MuXHJcbi8vICAgICBDaGVjayB3aGV0aGVyIHRoaXMgYXJyYXkgY29udGFpbnMgb25seSBzdHJpbmdzLlxyXG4vLyAgICAgRGlzcGxheSB0aGUgcmVzdWx0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAyMVxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0L7RgtGB0L7RgNGC0LjRgNC+0LLQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDRh9C40YHQtdC7LlxyXG4vLyAgICAg0KDQtdCw0LvQuNC30L7QstCw0YLRjCDRhNGD0L3QutGG0LjRjiBiaW5hcnlTZWFyY2goYXJyLCB2YWx1ZSksINC60L7RgtC+0YDQsNGPINC/0YDQuNC90LjQvNCw0LXRgiDQvNCw0YHRgdC40LJcclxuLy8gICAgINC4INC30L3QsNGH0LXQvdC40LUg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdC00LXQutGBINC30L3QsNGH0LXQvdC40Y8g0LIg0LzQsNGB0YHQuNCy0LUg0LjQu9C4IC0xLlxyXG4vLyAgICAg0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsdC40L3QsNGA0L3Ri9C5INC/0L7QuNGB0LouXHJcbi8vICAgICDQktGL0LLQtdGB0YLQuCDRgNC10LfRg9C70YzRgtCw0YIg0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBpbiBzb3J0IG9yZGVyLlxyXG4vLyAgICAgSW1wbGVtZW50IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnIsIHZhbHVlKSwgd2hpY2ggdGFrZXMgYW4gYXJyYXlcclxuLy8gICAgIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGlzIHZhbHVlIGluIHRoZSBhcnJheSBvciAtMS5cclxuLy8gICAgIEZ1bmN0aW9uIHNob3VsZCB1c2UgYmluYXJ5IHNlYXJjaC5cclxuLy8gICAgIERpc3BsYXkgdGhlIHJlc3VsdCBpbiB0aGUgY29uc29sZS5cclxuIiwiY29uc29sZS5sb2coJ1RvcGljOiBPYmplY3RzJyk7XHJcblxyXG4vLyBUYXNrIDAxXHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDRhNGD0L3QutGG0LjRji3QutC+0L3RgdGC0YDRg9C60YLQvtGAIFR1bmUodGl0bGUsIGFydGlzdCkg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L7QsdGK0LXQutGC0L7QslxyXG4vLyAgICAg0YEg0L/Rg9Cx0LvQuNGH0L3Ri9C80Lgg0YHQstC+0LnRgdGC0LLQsNC80LggdGl0bGUsIGFydGlzdCDQuCDQvNC10YLQvtC00L7QvCBjb25jYXQoKS5cclxuLy8gICAgINCc0LXRgtC+0LQg0LTQvtC70LbQtdC9INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINC60L7QvdC60LDRgtC10L3QsNGG0LjRjiDQt9C90LDRh9C10L3QuNC5INGB0LLQvtC50YHRgtCyIHRpdGxlINC4IGFydGlzdC5cclxuLy8gICAgINCh0L7Qt9C00LDRgtGMINC90LXRgdC60L7Qu9GM0LrQviDQvtCx0YrQtdC60YLQvtCyLiDQktGL0LfQstCw0YLRjCDQuNGFINC80LXRgtC+0LQgY29uY2F0KCkuXHJcbi8vIEVOOiBDcmVhdGUgZnVuY3Rpb24tY29uc3RydWN0b3IgVHVuZSh0aXRsZSwgYXJ0aXN0KSBmb3IgY3JlYXRpbmcgb2JqZWN0c1xyXG4vLyAgICAgd2l0aCBwdWJsaWMgcHJvcGVydGllcyB0aXRsZSwgYXJ0aXN0IGFuZCBtZXRob2QgY29uY2F0KCkuXHJcbi8vICAgICBNZXRob2Qgc2hvdWxkIHJldHVybiB0aGUgY29uY2F0ZW5hdGlvbiBvZiB2YWx1ZXMgb2YgcHJvcGV0aWVzIHRpdGxlIGFuZCBhcnRpc3QuXHJcbi8vICAgICBDcmVhdGUgYSBmZXcgb2JqZWN0cy4gQ2FsbCB0aGVpciBtZXRob2QgY29uY2F0KCkuXHJcblxyXG4vLyBUYXNrIDAyXHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDRhNGD0L3QutGG0LjRji3QutC+0L3RgdGC0YDRg9C60YLQvtGAIFR1bmUodGl0bGUsIGFydGlzdCkg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L7QsdGK0LXQutGC0L7QslxyXG4vLyAgICAg0YEg0L/RgNC40LLQsNGC0L3Ri9C80Lgg0YHQstC+0LnRgdGC0LLQsNC80LggdGl0bGUsIGFydGlzdCDQuCDQv9GD0LHQu9C40YfQvdGL0Lwg0LzQtdGC0L7QtNC+0LwgY29uY2F0KCkuXHJcbi8vICAgICDQnNC10YLQvtC0INC00L7Qu9C20LXQvSDQstC+0LfQstGA0LDRidCw0YLRjCDQutC+0L3QutCw0YLQtdC90LDRhtC40Y4g0LfQvdCw0YfQtdC90LjQuSDRgdCy0L7QudGB0YLQsiB0aXRsZSDQuCBhcnRpc3QuXHJcbi8vICAgICDQodC+0LfQtNCw0YLRjCDQvdC10YHQutC+0LvRjNC60L4g0L7QsdGK0LXQutGC0L7Qsi4g0JLRi9C30LLQsNGC0Ywg0LjRhSDQvNC10YLQvtC0IGNvbmNhdCgpLlxyXG4vLyBFTjogQ3JlYXRlIGZ1bmN0aW9uLWNvbnN0cnVjdG9yIFR1bmUodGl0bGUsIGFydGlzdCkgZm9yIGNyZWF0aW5nIG9iamVjdHNcclxuLy8gICAgIHdpdGggcHJpdmF0ZSBwcm9wZXJ0aWVzIHRpdGxlLCBhcnRpc3QgYW5kIG1ldGhvZCBjb25jYXQoKS5cclxuLy8gICAgIE1ldGhvZCBzaG91bGQgcmV0dXJuIHRoZSBjb25jYXRlbmF0aW9uIG9mIHZhbHVlcyBvZiBwcm9wZXRpZXMgdGl0bGUgYW5kIGFydGlzdC5cclxuLy8gICAgIENyZWF0ZSBhIGZldyBvYmplY3RzLiBDYWxsIHRoZWlyIG1ldGhvZCBjb25jYXQoKS5cclxuXHJcbi8vIFRhc2sgMDNcclxuLy8gUlU6INCg0LDRgdGI0LjRgNC40YLRjCDQv9GA0L7RgtC+0YLQuNC/INC+0LHRitC10LrRgtCwIFN0cmluZyDQvNC10YLQvtC00L7QvCBleGNsYWltKCkg0LXRgdC70Lgg0LXQs9C+INC90LXRgiDQsiDQv9GA0L7RgtC+0YLQuNC/0LUuXHJcbi8vICAgICDQnNC10YLQvtC0INC00L7Qu9C20LXQvSDQtNC+0LHQsNCy0LvRj9GC0Ywg0LfQvdCw0Log0LLQvtGB0LrQu9C40YbQsNC90LjRjyDQuiDRgdGC0YDQvtC60LUg0Lgg0LLRi9Cy0L7QtNC40YLRjCDQtdC1INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogRXh0ZW5kIHRoZSBwcm90b3R5cGUgb2Ygb2JqZWN0IFN0cmluZyB3aXRoIHRoZSBtZXRob2QgZXhjbGFpbSgpLCBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG4vLyAgICAgTWV0aG9kIHNob3VsZCBhZGQgZXhjbGFpbWF0aW9uIG1hcmsgdG8gdGhlIHN0cmluZyBhbmQgZGlzcGx5IGl0IGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAwNFxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0YTRg9C90LrRhtC40Y4t0LrQvtC90YHRgtGA0YPQutGC0L7RgCBCb29rKHRpdGxlLCBhdXRob3IpLlxyXG4vLyAgICAg0JTQvtCx0LDQstC40YLRjCDQtNCy0LAg0LzQtdGC0L7QtNCwOiBnZXRUaXRsZSwgZ2V0QXV0aG9yLlxyXG4vLyAgICAg0KHQvtC30LTQsNGC0Ywg0YTRg9C90LrRhtC40Y4t0LrQvtC90YHRgtGA0YPQutGC0L7RgCBUZWNoQm9vayh0aXRsZSwgYXV0aG9yLCBjYXRlZ29yeSkuXHJcbi8vICAgICDQn9C10YDQtdC00LDRgtGMINC30L3QsNGH0LXQvdC40Y8gdGl0bGUsIGF1dGhvciDRhNGD0L3QutGG0LjQuC3QutC+0L3RgdGC0YDRg9C60YLQvtGA0YMgQm9vay5cclxuLy8gICAgINCU0L7QsdCw0LLQuNGC0Ywg0LTQstCwINC80LXRgtC+0LTQsDogZ2V0Q2F0ZWdvcnksIGdldEJvb2sg4oCTINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRgyDRgdC+INC30L3QsNGH0LXQvdC40Y/QvNC4INC/0LDRgNCw0LzQtdGC0YDQvtCyLlxyXG4vLyAgICAg0JTQu9GPINGA0LXQsNC70LjQt9Cw0YbQuNC4INC90LDRgdC70LXQtNC+0LLQsNC90LjRjyDQuNGB0L/QvtC70YzQt9GD0LnRgtC1OlxyXG4vLyAgICAgMS4gT2JqZWN0LmNyZWF0ZSgpXHJcbi8vICAgICAyLiBDbGFzc1xyXG4vLyBFTjogQ3JlYXRlIGZ1bmN0aW9uLWNvbnN0cnVjdG9yIEJvb2sodGl0bGUsIGF1dGhvcikuXHJcbi8vICAgICBBZGQgdHdvIG1ldGhvZHM6IGdldFRpdGxlLCBnZXRBdXRob3IuXHJcbi8vICAgICBDcmVhdGUgZnVuY3Rpb24tY29uc3RydWN0b3IgVGVjaEJvb2sodGl0bGUsIGF1dGhvciwgY2F0ZWdvcnkpLlxyXG4vLyAgICAgUGFzcyB0aGUgdmFsdWUgb2YgdGl0bGUsIGF1dGhvciB0byB0aGUgZnVuY3Rpb24tY29uc3RydWN0b3IgQm9vay5cclxuLy8gICAgIEFkZCB0d28gbWV0aG9kczogZ2V0Q2F0ZWdvcnksIGdldEJvb2sgLSByZXR1cm5zIHRoZSBzdHJpbmcgd2l0aCB2YWx1ZXMgb2YgYWxsIHBhcmFtZXRlcnMuXHJcbi8vICAgICBJbXBsZW1lbnQgaW5oZXJpdGFuY2UgdXNpbmc6XHJcbi8vICAgICAxLiBPYmplY3QuY3JlYXRlKClcclxuLy8gICAgIDIuIENsYXNzXHJcblxyXG4vLyBUYXNrIDA1XHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INC60LvQsNGB0YEgU2hhcGUg0YHQviDRgdGC0LDRgtC40YfQtdGB0LrQuNC8INGB0LLQvtC50YHRgtCy0L7QvCBjb3VudC5cclxuLy8gICAgINCf0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C50YLQtSDRjdGC0L4g0YHQstC+0LnRgdGC0LLQviAwLlxyXG4vLyAgICAg0JIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1INC60LvQsNGB0YHQsCDRg9Cy0LXQu9C40YfQuNCy0LDQudGC0LUgY291bnQg0L3QsCAxLlxyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtSDQv9GA0L7QuNC30LLQvtC00L3Ri9C5INC60LvQsNGB0YEgUmVjdGFuZ2xlLiDQlNC+0LHQsNCy0YzRgtC1INC80LXRgtC+0LQg0LTQu9GPINC/0L7QtNGB0YfQtdGC0LAg0L/Qu9C+0YnQsNC00LguXHJcbi8vICAgICDQodC+0LfQtNCw0LnRgtC1INC90LXRgdC60L7Qu9GM0LrQviDQvtCx0YrQtdC60YLQvtCyLiDQktGL0LLQtdC00LjRgtC1INCyINC60L7QvdGB0L7Qu9GMINC60L7Qu9C40YfQtdGB0YLQstC+INGB0L7Qt9C00LDQvdC90YvRhSDQvtCx0YrQtdC60YLQvtCyLlxyXG4vLyBFTjogQ3JlYXRlIGNsYXNzIFNoYXBlIHdpdGggc3RhdGljIHByb3BlcnR5IGNvdW50LlxyXG4vLyAgICAgSW5pdGlhbGl6ZSB0aGUgcHJvcGVydHkgY291bnQgd2l0aCAwLlxyXG4vLyAgICAgSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiBjb3VudCBieSAxIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuLy8gICAgIENyZWF0ZSBkZXJpdmVkIGNsYXNzIFJlY3RhbmdsZS4gQWRkIG1ldGhvZCB0byBjYWxjdWxhdGUgYXJlYS5cclxuLy8gICAgIENyZWF0ZSBhIGZldyBvYmplY3RzLiBEaXNwbGF5IHRoZSBudW1iZXIgb2YgY3JlYXRlZCBvYmplY3RzIGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gVGFzayAwNlxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0YTRg9C90LrRhtC40Y4t0LrQvtC90YHRgtGA0YPQutGC0L7RgCBQZXJzb24oKSDQtNC70Y8g0LrQvtC90YHRgtGA0YPQuNGA0L7QstCw0L3QuNGPINC+0LHRitC10LrRgtC+0LIuXHJcbi8vICAgICDQlNC+0LHQsNCy0LjRgtGMINC00LLQsCDQvNC10YLQvtC00LA6IHNldEZpcnN0TmFtZSgpINC4IHNldExhc3ROYW1lKCkuXHJcbi8vICAgICDQnNC10YLQvtC00Ysg0LTQvtC70LbQvdGLINCy0YvQt9GL0LLQsNGC0YzRgdGPINCyINGG0LXQv9C+0YfQutC1LCDQvdCw0L/RgNC40LzQtdGAIG9iai5zZXRGaXJzdE5hbWUoLi4uKS5zZXRMYXN0TmFtZSguLi4pXHJcbi8vIEVOOiBDcmVhdGUgZnVuY3Rpb24tY29uc3RydWN0b3IgUGVyc29uKCkgZm9yIGNyZWF0aW5nIG9iamVjdHMuXHJcbi8vICAgICBBZGQgdHdvIG1ldGhvZHM6IHNldEZpcnN0TmFtZSgpINC4IHNldExhc3ROYW1lKCkuXHJcbi8vICAgICBUaGVzZSBtZXRob2RzIHNob3VsZCBiZSBjYWxsZWQgaW4gY2hhaW4gbGlrZSB0aGlzIG9iai5zZXRGaXJzdE5hbWUoLi4uKS5zZXRMYXN0TmFtZSguLi4pXHJcblxyXG4vLyBUYXNrIDA3XHJcbi8vIFJVOiBD0L7Qt9C00LDRgtGMINC+0LHRitC10LrRgiBkYXRhINC4INGB0LrQvtC90YTQuNCz0YPRgNC40YDQstCw0YLRjCDQtdCz0L4g0YHQstC+0LnRgdGC0LLQsDpcclxuLy8gICAgIDEuIGlkOiDQt9C90LDRh9C10L3QuNC1ID0gMSwg0LjQt9C80LXQvdGP0LXQvNC+0LUuXHJcbi8vICAgICAyLiB0eXBlOiDQt9C90LDRh9C10L3QuNC1ID0gJ3ByaW1hcnknLCDQv9C10YDQtdGH0LjRgdC70Y/QtdC80L7QtVxyXG4vLyAgICAgMy4gY2F0ZWdvcnk6IGdldHRlciDQstC+0LfQstGA0LDRidCw0LXRgiDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPIF9jYXRlZ29yeSxcclxuLy8gICAgICAgICAgICAgICAgICBzZXR0ZXIg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvRjyBfY2F0ZWdvcnksINC/0LXRgNC10YfQuNGB0LvRj9C10LzQvtC1LCDQutC+0L3RhNC40LPRg9GA0LjRgNGD0LXQvNC+0LUuXHJcbi8vICAgICDQmNGB0L/QvtC70YzQt9GD0Y8gZm9yLWluINCy0YvQstC10YHRgtC4INGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LAg0LIg0LrQvtC90YHQvtC70YxcclxuLy8gRU46IENyZWF0ZSBhbiBvYmplY3QgZGF0YSBhbmQgY29uZmlndXJlIGl0cyBwcm9wZXJ0aWVzOlxyXG4vLyAgICAgMS4gaWQ6IHZhbHVlID0gMSwgd3JpdGFibGVcclxuLy8gICAgIDIuIHR5cGU6IHZhbHVlID0gJ3ByaW1hcnknLCBlbnVtZXJhYmxlXHJcbi8vICAgICAzLiBjYXRlZ29yeTogZ2V0dGVyIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBfY2F0ZWdvcnksXHJcbi8vICAgICAgICAgICAgICAgICAgc2V0dGVyIHNldHMgdGhlIHZhbHVlIGlmIHRoZSBwcm9wZXJ0eSBfY2F0ZWdvcnksIGVudW1lcmFibGUsIGNvbmZpZ3VyYWJsZS5cclxuLy8gICAgIFVzaW5nIGZvci1pbiBkaXNwbGF5IHByb3BlcnR5IG9mIGFuIG9iamVjdCBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIFRhc2sgMDhcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC70LjRgtC10YDQsNC7INC+0LHRitC10LrRgtCwINGBINC00LLRg9C80Y8g0YHQstC+0LnRgdGC0LLQsNC80LguINCX0LDQv9GA0LXRgtC40YLRjCDRgNCw0YHRiNC40YDRj9GC0Ywg0L7QsdGK0LXQutGCLlxyXG4vLyBFTjogQ3JlYXRlIG9iamVjdCBsaXRlcmFsIHdpdGggdHdvIHByb3BlcnRpZXMuIERlbnkgZXh0ZW5kIHRoZSBvYmplY3QuXHJcblxyXG4vLyBUYXNrIDA5IFRvZG9MaXN0IEFwcGxpY2F0aW9uXHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQutC70LDRgdGB0YsgJ9C30LDQtNCw0YfQsCcg0LggJ9GB0L/QuNGB0L7QuiDQt9Cw0LTQsNGHJyDRgdC+INGB0LvQtdC00Y7RidC40Lwg0YTRg9C90LrRhtC40L7QvdCw0LvQvtC8OlxyXG4vLyAgICAgMS4g0JTQvtCx0LDQstC40YLRjCDQt9Cw0LTQsNGH0YMg0LIg0YHQv9C40YHQvtC6XHJcbi8vICAgICAyLiDQn9C+0LvRg9GH0LjRgtGMINC4INCy0YvQstC10YHRgtC4INCyINC60L7QvdGB0L7Qu9GMINGB0L/QuNGB0L7QuiDQstGB0LXRhSDQt9Cw0LTQsNGHXHJcbi8vICAgICAgICDQsiDRhNC+0YDQvNCw0YLQtSBcIltuZXddIFRhc2sgMVwiLCBcIltjb21wbGV0ZWRdIFRhc2syXCJcclxuLy8gICAgIDMuINCe0YLQvNC10YLQuNGC0Ywg0YPQutCw0LfQsNC90L3Rg9GOINC30LDQtNCw0YfRgyDQutCw0Log0LLRi9C/0L7Qu9C90LXQvdC90YPRjlxyXG4vLyAgICAgNC4g0KPQtNCw0LvQuNGC0Ywg0LfQsNC00LDRh9GDINC40Lcg0YHQv9C40YHQutCwXHJcbi8vICAgICA1LiDQntGC0YHQvtGA0YLQuNGA0L7QstCw0YLRjCDQt9Cw0LTQsNGH0Lgg0L/QviDQsNC70YTQsNCy0LjRgtGDINC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjiDQuNC70Lgg0L/QviDRg9Cx0YvQstCw0L3QuNGOXHJcbi8vICAgICA2LiDQntGH0LjRgdGC0LjRgtGMINGB0L/QuNGB0L7QuiDQt9Cw0LTQsNGHXHJcbi8vIEVOOiBDcmVhdGUgY2xhc3NlcyAndGFzaycgYW5kICd0YXNrIGxpc3QnIHdpdGggdGhlIGZvbGxvd2luZyBmZWF0dXJlczpcclxuLy8gICAgIDEuIEFkZCB0YXNrIHRvIHRoZSBsaXN0XHJcbi8vICAgICAyLiBHZXQgYW5kIGRpc3BsYXkgdGhlIGxpc3Qgb2YgYWxsIHRhc2tzIGluIHRoZSBjb25zb2xlXHJcbi8vICAgICAgICB1c2luZyB0aGUgZm9sbG93aW5nIGZvcm1hdCBcIltuZXddIFRhc2sgMVwiLCBcIltjb21wbGV0ZWRdIFRhc2syXCJcclxuLy8gICAgIDMuIENoZWNrIHRhc2sgYXMgYSBjb21wbGV0ZWQgdGFza1xyXG4vLyAgICAgNC4gUmVtb3ZlIHRhc2sgZnJvbSB0aGUgbGlzdCBvZiB0YXNrcy5cclxuLy8gICAgIDUuIFNvcnQgdGFza3MgYWxwaGFiZXRpY2FsbHkgaW4gYXNjIG9yIGRlc2Mgb3JkZXJcclxuLy8gICAgIDYuIENsZWFyIHRoZSBsaXN0IG9mIHRhc2tzLlxyXG4iLCJjb25zb2xlLmxvZygnVG9waWM6IERhdGUgb2JqZWN0Jyk7XHJcblxyXG4vLyBUYXNrIDFcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINGC0LXQutGD0YnRg9GOINC00LDRgtGDINC4INCy0YvQstC10YHRgtC4INC10LUg0LIg0YTQvtGA0LzQsNGC0LUgZGQubW0ueXl5eSDQuCBkZCBNb250aCB5eXl5XHJcbi8vIEVOOiBDcmVhdGUgY3VycmVudCBkYXRlIGFuZCBkaXNwbGF5IGl0IGluIHRoZSBjb25zb2xlIGFjY29yZGluZyB0byB0aGUgZm9ybWF0XHJcbi8vICAgICBkZC5tbS55eXl5INC4IGRkIE1vbnRoIHl5eXlcclxuXHJcbi8vIFRhc2sgMlxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0L7QsdGK0LXQutGCIERhdGUg0LjQtyDRgdGC0YDQvtC60LggJzE1LjAzLjIwMjUnLlxyXG4vLyBFTjogQ3JlYXRlIGFuIG9iamVjdCBEYXRlIGZyb20gdGhlIHN0cmluZyAnMTUuMDMuMjAyNScuXHJcblxyXG4vLyBUYXNrIDNcclxuLy8gUlU6INCh0L7Qt9C00LDRgtGMINC+0LHRitC10LrRgiBEYXRlLCDQutC+0YLQvtGA0YvQuSDRgdC+0LTQtdGA0LbQuNGCOlxyXG4vLyAgICAgMS4g0LfQsNCy0YLRgNCw0YjQvdGO0Y4g0LTQsNGC0YMsXHJcbi8vICAgICAyLiDQv9C10YDQstC+0LUg0YfQuNGB0LvQviDRgtC10LrRg9GJ0LXQs9C+INC80LXRgdGP0YbQsCxcclxuLy8gICAgIDMuINC/0L7RgdC70LXQtNC90LXQtSDRh9C40YHQu9C+INGC0LXQutGD0YnQtdCz0L4g0LzQtdGB0Y/RhtCwXHJcbi8vIEVOOiBDcmVhdGUgYW4gb2JqZWN0IERhdGUsIHdoaWNoIHJlcHJlc2VudHM6XHJcbi8vICAgICAxLiB0b21vcnJvd1xyXG4vLyAgICAgMi4gZmlyc3QgZGF5IG9mIHRoZSBjdXJyZW50IG1vbnRoXHJcbi8vICAgICAzLiBsYXN0IGRheSBvZiB0aGUgY3VycmVudCBtb250aFxyXG5cclxuLy8gVGFzayA0XHJcbi8vIFJVOiDQn9C+0LTRgdGH0LjRgtCw0YLRjCDQstGA0LXQvNGPINGB0YPQvNC80LjRgNC+0LLQsNC90LjRjyDRh9C40YHQtdC7INC+0YIgMSDQtNC+IDEwMDAuXHJcbi8vIEVOOiBDYWxjdWxhdGUgdGhlIHRpbWUgb2Ygc3VtbWluZyBudW1iZXJzIGZyb20gMSB0byAxMDAwLlxyXG5cclxuLy8gVGFzayA1XHJcbi8vIFJVOiDQn9C+0LTRgdGH0LjRgtCw0YLRjCDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSDRgSDRgtC10LrRg9GJ0LXQuSDQtNCw0YLRiyDQtNC+INCd0L7QstC+0LPQviDQs9C+0LTQsC5cclxuLy8gRU46IENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgY3VycmVudCBkYXRlIHRvIHRoZSBOZXcgWWVhci5cclxuIiwiY29uc29sZS5sb2coJ1RvcGljOiBGdW5jdGlvbnMnKTtcclxuXHJcbi8vIFRhc2sgMS4gRkRTXHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIGNvbmMsINC60L7RgtC+0YDQsNGPINC00L7Qu9C20L3QsCDQutC+0L3QutCw0YLQtdC90LjRgNC+0LLQsNGC0Ywg0LfQvdCw0YfQtdC90LjRj1xyXG4vLyAgICAg0LTQstGD0YUg0L/QsNGA0LDQvNC10YLRgNC+0LIgYSDQuCBiINC4INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINGB0YLRgNC+0LrRgy5cclxuLy8gICAgINCY0YHQv9C+0LvRjNC30YPQudGC0LUgRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50IChGRFMpLlxyXG4vLyAgICAg0JLRi9C30L7QstC40YLQtSDRhNGD0L3QutGG0LjRjiDQtNC+INC10LUg0L7QsdGK0Y/QstC70LXQvdC40Y8uXHJcbi8vICAgICDQotC10YHRgtC+0LLRi9C1INC00LDQvdC90YvQtTpcclxuLy8gICAgIGEgPSAnMScsIGIgPSAnMScsIHJlc3VsdCA9ICcxMSdcclxuLy8gICAgIGEgPSAxLCBiID0gMSwgcmVzdWx0ID0gJzExJ1xyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gY29uYywgd2hpY2ggc2hvdWxkIGNvbmNhdGVuYXRlIHRoZSB2YWx1ZXNcclxuLy8gICAgIG9mIHR3byBwYXJhbWV0ZXJzIGEgYW5kIGIgYW5kIHJldHVybiBhIHN0cmluZy5cclxuLy8gICAgIFVzZSBGdW5jdGlvbiBEZWNsYXJhdGlvbiBTdGF0ZW1lbnQgKEZEUykuXHJcbi8vICAgICBDYWxsIGEgZnVuY3Rpb24gYmVmb3JlIGl0IGRlY2xhcmF0aW9uLlxyXG4vLyAgICAgVGVzdCBkYXRhOlxyXG4vLyAgICAgYSA9ICcxJywgYiA9ICcxJywgcmVzdWx0ID0gJzExJ1xyXG4vLyAgICAgYSA9IDEsIGIgPSAxLCByZXN1bHQgPSAnMTEnXHJcblxyXG4vLyBUYXNrIDIuIEZERVxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBjb21wLCDQutC+0YLQvtGA0LDRjyDQtNC+0LvQttC90LAg0YHRgNCw0LLQvdC40LLQsNGC0Ywg0LfQvdCw0YfQtdC90LjRj1xyXG4vLyAgICAg0LTQstGD0YUg0L/QsNGA0LDQvNC10YLRgNC+0LIgYSDQuCBiINC4INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMIDEsINC10YHQu9C4INC+0L3QuCDRgNCw0LLQvdGLINC4IC0xLCDQtdGB0LvQuCDQvtC90Lgg0L3QtSDRgNCw0LLQvdGLLlxyXG4vLyAgICAg0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSBGdW5jdGlvbiBEZWZpbml0aW9uIEV4cHJlc3Npb24gKEZERSkuXHJcbi8vICAgICDQktGL0LfQvtCy0LjRgtC1INGE0YPQvdC60YbQuNGOINC00L4g0LXQtSDQvtCx0YrRj9Cy0LvQtdC90LjRjy5cclxuLy8gICAgINCi0LXRgdGC0L7QstGL0LUg0LTQsNC90L3Ri9C1OlxyXG4vLyAgICAgYSA9ICdhYmMnLCBiID0gJ2FiYycsIHJlc3VsdCA9IDFcclxuLy8gICAgIGEgPSAnYWJDJywgYiA9ICdhYmMnLCByZXN1bHQgPSAtMVxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gY29tcCwgd2hpY2ggc2hvdWxkIGNvbXBhcmUgdGhlIHZhbHVlc1xyXG4vLyAgICAgb2YgdHdvIHBhcmFtZXRlcnMgYSBhbmQgYiwgYW5kIHJldHVybiAxLCB3aGVuIHRoZXkgZXF1YWwgYW5kIHJldHVybiAtMSxcclxuLy8gICAgIHdoZW4gdGhleSBhcmUgbm90IGVxdWFsLlxyXG4vLyAgICAgVXNlRnVuY3Rpb24gRGVmaW5pdGlvbiBFeHByZXNzaW9uIChGREUpLlxyXG4vLyAgICAgQ2FsbCBhIGZ1bmN0aW9uIGJlZm9yZSBpdCBkZWNsYXJhdGlvbi5cclxuLy8gICAgIFRlc3QgZGF0YTpcclxuLy8gICAgIGEgPSAnYWJjJywgYiA9ICdhYmMnLCByZXN1bHQgPSAxXHJcbi8vICAgICBhID0gJ2FiQycsIGIgPSAnYWJjJywgcmVzdWx0ID0gLTFcclxuXHJcbi8vIFRhc2sgMy4gQUZcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0LDQvdC+0L3QuNC80L3Rg9GOINGE0YPQvdC60YbQuNGOLCDQutC+0YLQvtGA0LDRjyDQtNC+0LvQttC90LBcclxuLy8gICAgINCy0YvQstC+0LTQuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1ICdtZXNzYWdlIGluIGNvbnNvbGUnINCyINC60L7QvdC+0LvRjC5cclxuLy8gICAgINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0LXQtSDQutCw0Log0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8gY2xpY2sg0LTQu9GPINC60L3QvtC/0LrQuC5cclxuLy8gRU46IENyZWF0ZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24sIHdoaWNoIHNob3VsZCBkaXNwbGF5XHJcbi8vICAgICBtZXNzYWdlICdtZXNzYWdlIGluIGNvbnNvbGUnIGluIGNvbnNvbGUuXHJcbi8vICAgICBVc2UgaXQgYXMgYW4gZXZlbnQgaGFuZGxlciBvZiBldmVudCBjbGljayBvZiB0aGUgYnV0dG9uLlxyXG5cclxuLy8gVGFzayA0LiBORkVcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4gZmlibywg0LrQvtGC0L7RgNCw0Y8g0LTQvtC70LbQvdCwINCy0YvRh9C40YHQu9GP0YLRjCDRh9C40YHQu9CwINCk0LjQsdC+0L3QsNGH0YfQuCDQv9C+INGE0L7RgNC80YPQu9C1XHJcbi8vICAgICBGMCA9IDAsIEYxID0gMSwgRm4gPSBGbi0xICsgRm4tMi5cclxuLy8gICAgINCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4gZmFjdG9yaWFsLCDQutC+0YLQvtGA0LDRjyDQtNC+0LvQttC90LAg0LLRi9GH0LjRgdC70Y/RgtGMINGE0LDQutGC0L7RgNC40LDQuyDRh9C40YHQu9CwINC/0L4g0YTQvtGA0LzRg9C70LVcclxuLy8gICAgIEZuID0gMSAqIDIgKi4uKm4uXHJcbi8vICAgICDQmNGB0L/QvtC70YzQt9GD0LnRgtC1IE5hbWVkIEZ1bmN0aW9uIEV4cHJlc3Npb24gKE5GRSkuXHJcbi8vIEVOOiBDcmVhdGUgYSBmdW5jdGlvbiBmaWJvIHNob3VsZCBjYWxjdWxhdGUgRmlib25hY2NpIG51bWJlcnMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhXHJcbi8vICAgICBGMCA9IDAsIEYxID0gMSwgRm4gPSBGbi0xICsgRm4tMi5cclxuLy8gICAgIENyZWF0ZSBhIGZ1bmN0aW9uIGZhY3RvcmlhbCB3aGljaCBzaG91bGQgY2FsY3VsYXRlIGZhY3RvcmlhbCBvZiBhIG51bWJlciBuXHJcbi8vICAgICBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGEgRm4gPSAxICogMiAqLi4qbi5cclxuLy8gICAgIFVzZSBOYW1lZCBGdW5jdGlvbiBFeHByZXNzaW9uIChORkUpLlxyXG5cclxuLy8gVGFzayA1LiBGQ1xyXG4vLyBSVTog0J7QsdGK0Y/QstC40YLQtSDQtNCy0LUg0YHRgtGA0L7Rh9C90YvQtSDQv9C10YDQtdC80LXQvdC90YvQtTogcGFyYW1zINC4IGJvZHkg0Lgg0L/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LnRgtC1XHJcbi8vICAgICDQuNGFINGB0YLRgNC+0YfQvdGL0LzQuCDQt9C90LDRh9C10L3QuNGP0LzQuCwg0LrQvtGC0L7RgNGL0LUg0L/RgNC10LTRgdGC0LDQstC70Y/RjtGCINGB0L/QuNGB0L7QuiDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQuCDRgtC10LvQviDQsdGD0LTRg9GJ0LXQuSDRhNGD0L3QutGG0LjQuC5cclxuLy8gICAgINCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4sINC40YHQv9C+0LvRjNC30YPRjyDRjdGC0YMg0LjQvdGE0L7RgNC80LDRhtC40Y4g0YEg0L/QvtC80L7RidGM0Y4gRnVuY3Rpb24gQ29uc3RydWN0b3IgKEZDKS5cclxuLy8gICAgINCS0YvQt9C+0LLQuNGC0LUg0Y3RgtGDINGE0YPQvdC60YbQuNGOLlxyXG4vLyBFTjogRGVjbGFyZSB0d28gc3RyaW5nIHZhcmlhYmxlczogcGFyYW1zIGFuZCBib2R5IGFuZCBpbml0aWFsaXplIHRoZW0gd2l0aCBzdHJpbmcgdmFsdWVzLFxyXG4vLyAgICAgd2hpY2ggcmVwcmVzZW50IHRoZSBsaXN0IG9mIHBhcmFtZXRlcnMgYW5kIHRoZSBib2R5IG9mIGZ1dHVyZSBmdW5jdGlvbi5cclxuLy8gICAgIENyZWF0ZSBmdW5jdGlvbiB1c2luZyB0aGVzZSB2YXJpYWJsZXMgd2l0aCBoZWxwIG9mIEZ1bmN0aW9uIENvbnN0cnVjdG9yIChGQykuXHJcbi8vICAgICBDYWxsIHRoaXMgZnVuY3Rpb24uXHJcblxyXG4vLyBUYXNrIDYuIEFyRlxyXG4vLyBSVTog0J7QsdGK0Y/QstC40YLQtSDQvNCw0YHRgdC40LIgYXJyID0gWzEsIDgsIDMsIDUsIDEyLCA3LCA5LCAxMV1cclxuLy8gICAgINCY0YHQv9C+0LvRjNC30YPRjyDRgdGC0YDQtdC70L7Rh9C90YvQtSDRhNGD0L3QutGG0LjQuCDRgdC+0LfQtNCw0LnRgtC1INC90L7QstGL0Lkg0LzQsNGB0YHQuNCyINC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyIGVsZW0gKiBlbGVtLFxyXG4vLyAgICAg0LrQvtGC0L7RgNGL0LUg0LzQtdC90YzRiNC1IDEwMCDQuCDQvtGC0YHQvtGA0YLQuNGA0YPQudGC0LUg0LXQs9C+INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRji5cclxuLy8gICAgINCS0YvQstC10LTQuNGC0LUg0YDQtdC30YPQu9GM0YLQsNGCINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogRGVjbGFyZSBhbiBhcnJheSBhcnIgPSBbMSwgOCwgMywgNSwgMTIsIDcsIDksIDExXVxyXG4vLyAgICAgVXNpbmcgYXJyb3cgZnVuY3Rpb25zIGNyZWF0ZSBuZXcgYXJyYXkgd2hpY2ggY29udGFpbnMgZWxlbSAqIGVsZW0uXHJcbi8vICAgICBUaGVzZSBlbGVtZW50cyBzaG91bGQgYmUgbGVzcyB0aGFuIDEwMCwgc29ydCBpdCBpbiBhc2NlbmRpbmcgb3JkZXIuXHJcbi8vICAgICBEaXNwbGF5IHRoZSByZXN1bHQgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBUYXNrIDcuIElJRkVcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0LrQvtC90YHRgtGA0YPQutGG0LjRjiwg0YEg0L/QvtC80L7RidGM0Y4g0LrQvtGC0L7RgNC+0Lkg0LLRi9C/0L7Qu9C90LjRgtGM0YHRjyDQstGL0YjQtSDRgNC10LDQu9C40LfQvtCy0LDQvdC90LDRj1xyXG4vLyAgICAg0YTRg9C90LrRhtC40Y8gY29uYy5cclxuLy8gRU46IENyZWF0ZSBhIGNvbnN0cnVjdGlvbiB3aGljaCBhbGxvd3MgdG8gcnVuIHRoZSBhYm92ZSBmdW5jdGlvbiBjb25jLlxyXG5cclxuLy8gVGFzayA4LiBBcmd1bWVudHMgT2JqZWN0LCBSZXN0XHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIHBhcnRzLCDQutC+0YLQvtGA0LDRjyDQv9GA0LjQvdC40LzQsNC10YIg0L3QtdC40LfQstC10YHRgtC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9Cw0YDQsNC80LXRgtGA0L7Qsi5cclxuLy8gICAgINCa0LDQttC00YvQuSDQv9Cw0YDQsNC80LXRgtGAIOKAkyDRjdGC0L4g0LPRgNGD0L/Qv9CwINC/0YDQtdC00LvQvtC20LXQvdC40LkuXHJcbi8vICAgICDQpNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLRi9GA0LXQt9Cw0YLRjCDQuNC3INC/0LDRgNCw0LzQtdGC0YDQsCDQv9C+0LTRgdGC0YDQvtC60YMsINC90LDRh9C40L3QsNGPINGBINGB0LjQvNCy0L7Qu9CwINC00LLQvtC10YLQvtGH0LjQtSAoOilcclxuLy8gICAgINC4INC30LDQutCw0L3Rh9C40LLQsNGPINGB0LjQvNCy0L7Qu9C+0Lwg0YLQvtGH0LrQsCAoLikuXHJcbi8vICAgICDQpNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQsNGB0YHQuNCyINC/0L7QtNGB0YLRgNC+0LouXHJcbi8vICAgICDQmNGB0L/QvtC70YzQt9GD0LnRgtC1IEZ1bmN0aW9uIERlZmluaXRpb24gRXhwcmVzc2lvbiAoRkRFKS5cclxuLy8gICAgINCi0LXRgdGC0L7QstGL0LUg0LTQsNC90L3Ri9C1OlxyXG4vLyAgICAgcGFyYW0xID0gXCJUaGlzIGlzIHRoZSBmaXJzdCBzZW50ZW5jZS4gVGhpcyBpcyBhIHNlbnRlbmNlIHdpdGggYSBsaXN0IG9mIGl0ZW1zOlxyXG4vLyAgICAgICAgICAgICAgIGNoZXJyaWVzLCBvcmFuZ2VzLCBhcHBsZXMsIGJhbmFuYXMuXCJcclxuLy8gICAgIHBhcmFtMiA9IFwiVGhpcyBpcyB0aGUgc2Vjb25kIHNlbnRlbmNlLiBUaGlzIGlzIGEgc2VudGVuY2Ugd2l0aCBhIGxpc3Qgb2YgaXRlbXM6XHJcbi8vICAgICAgICAgICAgICAgcmVkLCBibHVlLCB5ZWxsb3csIGJsYWNrLlwiXHJcbi8vICAgICByZXN1bHQgPSBbXCJjaGVycmllcywgb3JhbmdlcywgYXBwbGVzLCBiYW5hbmFzXCIsIFwicmVkLCBibHVlLCB5ZWxsb3csIGJsYWNrXCJdLlxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gcGFydHMsIHdoaWNoIHRha2VzIHVua25vd24gcXVhbnRpdHkgb2YgcGFyYW1ldGVycy5cclxuLy8gICAgIEVhY2ggcGFyYW1ldGVyIGlzIGEgZ3JvdXAgb2Ygc2VudGFuY2VzLlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIHNob3VsZCBjdXQgb3V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgcGFyYW1ldGVyLCBzdGFydGluZyB3aXRoIHRoZSBjb2xvbiAoOilcclxuLy8gICAgIGFuZCBlbmRpbmcgd2l0aCBhIHBlcmlvZCAoLikgY2hhcmFjdGVyLlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2Ygc3Vic3RyaW5ncy5cclxuLy8gICAgIFVzZSBGdW5jdGlvbiBEZWZpbml0aW9uIEV4cHJlc3Npb24gKEZERSkuXHJcbi8vICAgICBUZXN0IERhdGE6XHJcbi8vICAgICBwYXJhbTEgPSBcIlRoaXMgaXMgdGhlIGZpcnN0IHNlbnRlbmNlLiBUaGlzIGlzIGEgc2VudGVuY2Ugd2l0aCBhIGxpc3Qgb2YgaXRlbXM6XHJcbi8vICAgICAgICAgICAgICAgY2hlcnJpZXMsIG9yYW5nZXMsIGFwcGxlcywgYmFuYW5hcy5cIlxyXG4vLyAgICAgcGFyYW0yID0gXCJUaGlzIGlzIHRoZSBzZWNvbmQgc2VudGVuY2UuIFRoaXMgaXMgYSBzZW50ZW5jZSB3aXRoIGEgbGlzdCBvZiBpdGVtczpcclxuLy8gICAgICAgICAgICAgICByZWQsIGJsdWUsIHllbGxvdywgYmxhY2suXCJcclxuLy8gICAgIHJlc3VsdCA9IFtcImNoZXJyaWVzLCBvcmFuZ2VzLCBhcHBsZXMsIGJhbmFuYXNcIiwgXCJyZWQsIGJsdWUsIHllbGxvdywgYmxhY2tcIl0uXHJcblxyXG5cclxuLy8gVGFzayA5LiBPcHRpb25hbCBBcmd1bWVudHNcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4gZmluZCh0ZXN0U3RyaW5nLCB0ZXN0KSwg0LrQvtGC0L7RgNCw0Y8g0LTQvtC70LbQvdCwINCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINC/0L7Qt9C40YbQuNGOXHJcbi8vICAgICDRgdGC0YDQvtC60LggdGVzdCDQsiDRgdGC0YDQvtC60LUgdGVzdFN0cmluZy4gXHJcbi8vICAgICDQldGB0LvQuCDQstGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCDQvdC1INC30LDQtNCw0L0sINC40YHQv9C+0LvRjNC30YPQudGC0LUgdGVzdCA9IHRlc3RTdHJpbmcuIFxyXG4vLyAgICAg0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSBGdW5jdGlvbiBEZWZpbml0aW9uIEV4cHJlc3Npb24gKEZERSkuXHJcbi8vICAgICDQotC10YHRgtC+0LLRi9C1INC00LDQvdC90YvQtTpcclxuLy8gICAgIHRlc3RTdHJpbmcgPSAnYWJjJywgdGVzdCA9J2InLCByZXN1bHQgPSAxXHJcbi8vICAgICB0ZXN0U3RyaW5nID0gJ2FiYycsIHJlc3VsdCA9IDBcclxuLy8gICAgIHRlc3RTdHJpbmcgPSAnYWJjJywgdGVzdCA9ICdkJywgcmVzdWx0ID0gLTFcclxuLy8gICAgIHRlc3RTdHJpbmcgPSAnYWJjJywgdGVzdD0nYScsIHRlc3QyPSdiJywgcmVzdWx0ID0gMFxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gZmluZCh0ZXN0U3RyaW5nLCB0ZXN0KSwgd2hpY2ggc2hvdWxkIHJldHVybiB0aGUgcG9zaXRpb24gXHJcbi8vICAgICBvZiB0ZXN0IHN0cmluZyB3aXRoaW4gdGVzdFN0cmluZy5cclxuLy8gICAgIElmIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGlzIG9taXR0ZWQsIHVzZSBkZWZhdWx0IHZhbHVlICB0ZXN0ID0gdGVzdFN0cmluZy5cclxuLy8gICAgIFVzZSBGdW5jdGlvbiBEZWZpbml0aW9uIEV4cHJlc3Npb24gKEZERSkuXHJcbi8vICAgICBUZXN0IERhdGE6XHJcbi8vICAgICB0ZXN0U3RyaW5nID0gJ2FiYycsIHRlc3QgPSdiJywgcmVzdWx0ID0gMVxyXG4vLyAgICAgdGVzdFN0cmluZyA9ICdhYmMnLCByZXN1bHQgPSAwXHJcbi8vICAgICB0ZXN0U3RyaW5nID0gJ2FiYycsIHRlc3QgPSAnZCcsIHJlc3VsdCA9IC0xXHJcbi8vICAgICB0ZXN0U3RyaW5nID0gJ2FiYycsIHRlc3Q9J2EnLCB0ZXN0Mj0nYicsIHJlc3VsdCA9IDBcclxuXHJcbi8vIFRhc2sgMTAuIEZ1bmN0aW9uIGFzIGFuIE9iamVjdFxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBzdHIoKSwg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC+0LTQuNC9INGB0YLRgNC+0YfQvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDQuFxyXG4vLyAgICAg0LLRi9Cy0L7QtNC40YIg0LIg0LrQvtC90YHQvtC70YwgJ1N0cmluZyBpcyBub24gZW1wdHknLCDQtdGB0LvQuCDQv9Cw0YDQsNC80LXRgtGAIC0g0L3QtdC/0YPRgdGC0LDRjyDRgdGC0YDQvtC60LAg0LhcclxuLy8gICAgICdTdHJpbmcgaXMgZW1wdHknLCDQtdGB0LvQuCDQv9Cw0YDQsNC80LXRgtGAIOKAkyDQv9GD0YHRgtCw0Y8g0YHRgtGA0L7QutCwLlxyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBzdHIuaXNOb25FbXB0eVN0cigpLCDQutCw0Log0YHQstC+0LnRgdGC0LLQviDRhNGD0L3QutGG0LjQuCBzdHIuINCt0YLQsCDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LBcclxuLy8gICAgINC/0YDQuNC90LjQvNCw0YLRjCDQvtC00LjQvSDQv9Cw0YDQsNC80LXRgtGAINC4INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMIHRydWUsINC10YHQu9C4INC/0LDRgNCw0LzQtdGC0YAg0L3QtdC/0YPRgdGC0LDRjyDRgdGC0YDQvtC60LAsXHJcbi8vICAgICDQuNC90LDRh9C1IGZhbHNlLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INGN0YLRgyDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0YDQtdCw0LvQuNC30LDRhtC40Lgg0YPRgdC70L7QstC40Y8g0LIg0L7RgdC90L7QstC90L7QuSDRhNGD0L3QutGG0LjQuC5cclxuLy8gICAgINCi0LXRgdGC0L7QstGL0LUg0LTQsNC90L3Ri9C1OlxyXG4vLyAgICAgc3RyLmlzTm9uRW1wdHlTdHIoKSwgcmVzdWx0ID0gZmFsc2VcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKCcnKSwgcmVzdWx0ID0gZmFsc2VcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKCdhJyksIHJlc3VsdCA9IHRydWVcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKDEpLCByZXN1bHQgPSBmYWxzZVxyXG4vLyAgICAgc3RyKCksIGNvbnNvbGUubG9nKCdTdHJpbmcgaXMgZW1wdHknKVxyXG4vLyAgICAgc3RyKCdhJyksIGNvbnNvbGUubG9nKCdTdHJpbmcgaXMgbm9uIGVtcHR5JylcclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9uIHN0cigpLCB3aGljaCB0YWtlcyBvbmUgc3RyaW5nIHBhcmFtZXRlciBhbmQgZGlzcGxheSBpbiB0aGUgY29uc29sZSBcclxuLy8gICAgIHN0cmluZyAnU3RyaW5nIGlzIG5vbiBlbXB0eScgaWYgdGhlIHBhcmFtZXIgaXMgbm90IGVtcHR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IFxyXG4vLyAgICAgc2hvdWxkIGRpc3BsYXkgJ1N0cmluZyBpcyBlbXB0eScuXHJcbi8vICAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHIuaXNOb25FbXB0eVN0cigpIGFzIGEgcHJvcGVydHkgb2YgZnVuY3Rpb24gc3RyLiBUaGlzIGZ1bmN0aW9uXHJcbi8vICAgICBzaG91bGQgdGFrZSBvbmUgcGFyYW1ldGVyIGFuZCByZXR1cm4gdHJ1ZSwgd2hlbiB0aGUgdmFsdWUgb2YgcGFyYW1ldGVyIGlzIG5vdCBlbXB0eSBcclxuLy8gICAgIHN0cmluZywgb3RoZXJ3aXNlIGl0IHNob3VsZCByZXR1cm4gZmFsc2UuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGltcGxlbWVudCBpZiBzdGF0ZW1lbnRcclxuLy8gICAgIGluIHRoZSBzdHIoKSBmdW50aW9uLlxyXG4vLyAgICAgVGVzdCBEYXRhOlxyXG4vLyAgICAgc3RyLmlzTm9uRW1wdHlTdHIoKSwgcmVzdWx0ID0gZmFsc2VcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKCcnKSwgcmVzdWx0ID0gZmFsc2VcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKCdhJyksIHJlc3VsdCA9IHRydWVcclxuLy8gICAgIHN0ci5pc05vbkVtcHR5U3RyKDEpLCByZXN1bHQgPSBmYWxzZVxyXG4vLyAgICAgc3RyKCksIGNvbnNvbGUubG9nKCdTdHJpbmcgaXMgZW1wdHknKVxyXG4vLyAgICAgc3RyKCdhJyksIGNvbnNvbGUubG9nKCdTdHJpbmcgaXMgbm9uIGVtcHR5JylcclxuXHJcbi8vIFRhc2sgMTEuIEZ1bmN0aW9uIGFzIGEgUGFyYW1ldGVyXHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIHRvQ29uc29sZSDRgSDQvtC00L3QuNC8INC/0LDRgNCw0LzQtdGC0YDQvtC8LiDQpNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLRi9Cy0L7QtNC40YLRjCBcclxuLy8gICAgINC30L3QsNGH0LXQvdC40LUg0L/QsNGA0LDQvNC10YLRgNCwINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiB0b0FsZXJ0INGBINC+0LTQvdC40Lwg0L/QsNGA0LDQvNC10YLRgNC+0LwuINCk0YPQvdC60YbQuNGPINC00L7Qu9C20L3QsCDQstGL0LLQvtC00LjRgtGMINC30L3QsNGH0LXQvdC40LVcclxuLy8gICAgINC/0LDRgNCw0LzQtdGC0YDQsCDQuNGB0L/QvtC70YzQt9GD0Y8gYWxlcnQoKS5cclxuLy8gICAgINCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4gc3BsaXRUb1dvcmRzINGBINC00LLRg9C80Y8g0L/QsNGA0LDQvNC10YLRgNCw0LzQuDogbXNnINC4IGNhbGxiYWNrLlxyXG4vLyAgICAg0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINGA0LDQt9C00LXQu9GP0YLRjCDRgdGC0YDQvtC60YMg0L3QsCDRgdC70L7QstCwINC4INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQutC+0LvQsdC10Log0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0YHQu9C+0LIuIFxyXG4vLyAgICAg0JXRgdC70Lgg0LLRgtC+0YDQvtC5INC/0LDRgNCw0LzQtdGC0YAg0L3QtSDQt9Cw0LTQsNC9LCDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQsNGB0YHQuNCyINGB0LvQvtCyLlxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gdG9Db25zb2xlIHdpdGggb25lIHBhcmFtZXRlci4gVGhlIGZ1bmN0aW9uIHNob3VsZCBkaXNwbGF5IFxyXG4vLyAgICAgdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIGNvbnNvbGUuXHJcbi8vICAgICBDcmVhdGUgYSBmdW5jdGlvbiB0b0FsZXJ0IHdpdGggb25lIHBhcmFtZXRlci4gVGhlIGZ1bmN0aW9uIHNob3VsZCBkaXNwbGF5IFxyXG4vLyAgICAgdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgdXNpbmcgYWxlcnQuXHJcbi8vICAgICBDcmVhdGUgYSBmdW5jdGlvbiBzcGxpdFRvV29yZHMsIHdoaWNoIHRha2VzIHR3byBwYXJhbWV0ZXJzOiBtc2cg0LggY2FsbGJhY2suXHJcbi8vICAgICBUaGUgZnVuY3Rpb24gc2hvdWxkIHNwbGl0IHRoZSB2YWx1ZSBvZiBwYXJhbWV0ZXIgbXNnIGJ5IHRoZSB3b3JkcyBhbmQgdXNlIGNhbGxiYWNrXHJcbi8vICAgICB0byBkaXNwbGF5IHRoZXNlIHdvcmRzLlxyXG4vLyAgICAgSWYgdGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgb21pdHRlZCwgdGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYXJyYXkgb2Ygd29yZHMuXHJcbi8vICAgICBUZXN0IERhdGE6XHJcbi8vICAgICBzcGxpdFRvV29yZHMoXCJNeSB2ZXJ5IGxvbmcgdGV4dCBtc2dcIiwgdG9Db25zb2xlKTtcclxuLy8gICAgIHJlc3VsdDpcclxuLy8gICAgIE15XHJcbi8vICAgICB2ZXJ5XHJcbi8vICAgICBsb25nXHJcbi8vICAgICB0ZXh0XHJcbi8vICAgICBtc2dcclxuLy8gICAgIHNwbGl0VG9Xb3JkcyhcIk15IHZlcnkgbG9uZyB0ZXh0IG1zZ1wiLCB0b0FsZXJ0KTtcclxuLy8gICAgIHJlc3VsdCA9IGFsZXJ0KE15KSwg4oCmLlxyXG4vLyAgICAgY29uc29sZS5sb2coIHNwbGl0VG9Xb3JkcyhcIk15IHZlcnkgbG9uZyB0ZXh0IG1zZ1wiKSApO1xyXG4vLyAgICAgcmVzdWx0ID0gWydNeScsICd2ZXJ5JywgJ2xvbmcnLCAndGV4dCcsICdtc2cnXVxyXG5cclxuXHJcbi8vIFRhc2sgMTIuIEZ1bmN0aW9uIGFzIGEgUmVzdWx0XHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIGNvcHlyaWdodCwg0LrQvtGC0L7RgNCw0Y8g0LTQvtC70LbQvdCwINCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINC00YDRg9Cz0YPRjiDRhNGD0L3QutGG0LjRjiDRgVxyXG4vLyAgICAg0L7QtNC90LjQvCDQv9Cw0YDQsNC80LXRgtGA0L7QvC4g0JLQvtC30YDQsNGJ0LDQtdC80LDRjyDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0L/RgNC40LHQsNCy0LvRj9GC0Ywg0LfQvdCw0LogwqkgKCdcXHUwMEE5JylcclxuLy8gICAgINCy0L3QsNGH0LDQu9C1INGB0LLQvtC10LPQviDQv9Cw0YDQsNC80LXRgtGA0LAg0Lgg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCLiDQntCx0YrRj9Cy0LjRgtC1INGN0YLQvtGCINC30L3QsNC6INCyINGE0YPQvdC60YbQuNC4IGNvcHlyaWdodC5cclxuLy8gICAgINCi0LXRgdGC0L7QstGL0LUg0LTQsNC90L3Ri9C1OlxyXG4vLyAgICAgY29uc29sZS5sb2coIGNvcHlyaWdodCgpKCdFUEFNJykgKTsgcmVzdWx0ID0gwqkgRVBBTS5cclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9uIGNvcHlyaWdodCwgd2hpY2ggYWhvdWxkIHJldHVybiBhbnRoZXIgZnVuY3Rpb24gd2l0aCBvbmUgcGFyYW1ldGVyLlxyXG4vLyAgICAgVGhpcyByZXR1cm5lZCBmdW5jdGlvbiBzaG91bGQgcHJlcGVuZCBzaWduIMKpICgnXFx1MDBBOScpIHRvIGl0cyBwYXJhbWV0ZXIgYW5kXHJcbi8vICAgICByZXR1cm4gdGhlIHJlc3VsdC4gRGVjbGFyZSB0aGUgc2lnbiDCqSAoJ1xcdTAwQTknKSBpbnNpZGUgY29weXJpZ2h0IGZ1bmN0aW9uLlxyXG4vLyAgICAgVGVzdCBEYXRhOlxyXG4vLyAgICAgY29uc29sZS5sb2coIGNvcHlyaWdodCgpKCdFUEFNJykgKTsgcmVzdWx0ID0gwqkgRVBBTS5cclxuXHJcbi8vIFRhc2sgMTMuIEZ1bmN0aW9uIGFzIGEgUmVzdWx0XHJcbi8vIFJVOiDQl9Cw0LTQsNC90LjQtSDQsNC90LDQu9C+0LPQuNGH0L3QviDQv9GA0LXQtNGL0LTRg9GJ0LXQvNGDLCDQvdC+INCyINGN0YLQvtGCINGA0LDQtyDRhNGD0L3QutGG0LjRjyBjb3B5cmlnaHQg0L/QvtC70YPRh9Cw0LXRgiDQt9C90LDQulxyXG4vLyAgICAg0LrQsNC6INGB0LLQvtC5INC/0LDRgNCw0LzQtdGC0YAuXHJcbi8vIEVOOiBUaGlzIHRhc2sgaXMgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgb25lLCBidXQgaW4gdGhpcyBjYXNlIHRoZSBmdW5jdGlvbiBjb3B5cmlnaHQgdGFrZXMgXHJcbi8vICAgICBvbmUgcGFyYW1ldGVyIC0gc2lnbiAowqkgKCdcXHUwMEE5JykpLlxyXG5cclxuLy8gVGFzayAxNC4gRnVuY3Rpb24gYXMgYSBNZXRob2RcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0LvQuNGC0LXRgNCw0Lsg0L7QsdGK0LXQutGC0LAgZW1wbG95ZWUg0YHQviDRgdC70LXQtNGD0Y7RidC40LzQuCDRgdCy0L7QudGB0YLQstCw0LzQuDpcclxuLy8gICAgIG5hbWU6ICdBbm4nLCBcclxuLy8gICAgIHdvcmsg4oCTINGE0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQstGL0LLQvtC00LjRgiDQsiDQutC+0L3RgdC+0LvRjCDRgdC+0L7QsdGJ0LXQvdC40LUgXCJJIGFtIEFubi4gSSBhbSB3b3JraW5nLi4uXCJcclxuLy8gICAgINCi0LXRgdGC0L7QstGL0LUg0LTQsNC90L3Ri9C1XHJcbi8vICAgICBlbXBsb3llZS53b3JrKCkgINGA0LXQt9GD0LvRjNGC0LDRgiDQsiDQutC+0L3RgdC+0LvQtSBcIkkgYW0gQW5uLiBJIGFtIHdvcmtpbmcuLi5cIlxyXG4vLyBFTjogQ3JlYXRlIGFuIG9iamVjdCBsaXRlcmFsIGVtcGxveWVlIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxyXG4vLyAgICAgbmFtZTogJ0FubicsIFxyXG4vLyAgICAgd29yayDigJMgZnVuY3Rpb24sIHdoaWNoIGRpc3BsYXkgaW4gdGhlIGNvbnNvbGUgdGhlIGZvbGxvd2luZyBzdHJpbmcgXHJcbi8vICAgICBcIkkgYW0gQW5uLiBJIGFtIHdvcmtpbmcuLi5cIlxyXG4vLyAgICAgVGVzdCBEYXRhOlxyXG4vLyAgICAgZW1wbG95ZWUud29yaygpICByZXN1bHQgaW4gdGhlIGNvbnNvbGUgXCJJIGFtIEFubi4gSSBhbSB3b3JraW5nLi4uXCJcclxuXHJcbi8vIFRhc2sgMTUuIEJvcnJvdyBNZXRob2RcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0LvQuNGC0LXRgNCw0Lsg0L7QsdGK0LXQutGC0LAgcGVyc29uINGB0L4g0YHQstC+0LnRgdGC0LLQvtC8IG5hbWUuIFxyXG4vLyAgICAg0JLRi9C30L7QstC40YLQtSDQvNC10YLQvtC0IHdvcmsg0L7QsdGK0LXQutGC0LAgZW1wbG95ZWUg0LjQtyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPLlxyXG4vLyBFTjogQ3JlYXRlIGFuIG9iamVjdCBsaXRlcmFsIHBlcnNvbiB3aXRoIHByb3BlcnR5IG5hbWUuXHJcbi8vICAgICBDYWxsIHRoZSBtZXRob2Qgd29yayBvZiB0aGUgb2JqZWN0IGVtcGxveWVlIGZyb20gdGhlIHByZXZpb3VzIHRhc2suXHJcblxyXG4vLyBUYXNrIDE2LiBNZW1vaXphdGlvblxyXG4vLyBSVTog0KHQvtC30LTQsNGC0Ywg0YTRg9C90LrRhtC40Y4gZmlib01lbW8g0LTQu9GPINCy0YvRh9C40YHQu9C10L3QuNGPINGH0LjRgdC10Lsg0KTQuNCx0L7QvdCw0YfRh9C4INC/0L4g0YTQvtGA0LzRg9C70LUgXHJcbi8vICAgICBGMCA9IDAsIEYxID0gMSwgRm4gPSBGbi0xICsgRm4tMi4g0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINGF0YDQsNC90LjRgtGMINGC0LUg0LfQvdCw0YfQtdC90LjRjyxcclxuLy8gICAgINC60L7RgtC+0YDRi9C1INC+0L3QsCDRg9C20LUg0LLRi9GH0LjRgdC70Y/Qu9CwLiDQmNGB0L/QvtC70YzQt9GD0Y8g0LzQtdGC0L7QtNGLIGNvbnNvbGUudGltZSgpLCBjb25zb2xlLnRpbWVFbmQoKVxyXG4vLyAgICAg0L7Qv9GA0LXQtNC10LvQuNGC0LUg0LLRgNC10LzRjyDQstGL0YfQuNGB0LvQtdC90LjRjyDRhNGD0L3QutGG0LjQuCBmaWJvINC4INGE0YPQvdC60YbQuNC4IGZpYm9NZW1vLlxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24gZmlib01lbW8gZm9yIGNhbGN1bGF0aW5nIEZpYm9uYWNjaSBudW1iZXJzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYVxyXG4vLyAgICAgRjAgPSAwLCBGMSA9IDEsIEZuID0gRm4tMSArIEZuLTIuIFRoZSBmdW5jdGlvbiBzaG91bGQgc3RvcmUgdGhlIHZhbHVlcyBjb21wdXRlZCBlYXJsaWVyLlxyXG4vLyAgICAgVXNpbmcgbWV0aG9kcyBjb25zb2xlLnRpbWUoKSwgY29uc29sZS50aW1lRW5kKCkgY2FsY3VsYXRlIHRoZSB0aW1lIGZvciBmdW5jdGlvbiBmaWJvIFxyXG4vLyAgICAgYW5kIGZpYm9NZW1vLlxyXG4iLCJjb25zb2xlLmxvZygnVG9waWM6IFByb21pc2VzJyk7XHJcbi8vIFRhc2sgMDFcclxuLy8g0KHQvtC30LTQsNC50YLQtSDQv9GA0L7QvNC40YEsINC60L7RgtC+0YDRi9C5INC/0L7RgdGC0L7Rj9C90L3QviDQvdCw0YXQvtC00LjRgtGM0YHRjyDQsiDRgdC+0YHRgtC+0Y/QvdC40LggcGVuZGluZy5cclxuLy8g0JIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1INC/0YDQvtC80LjRgdCwINCy0YvQstC10LTQuNGC0LUg0LIg0LrQvtC90YHQvtC70Ywg0YHQvtC+0LHRidC10L3QuNC1IFwiUHJvbWlzZSBpcyBjcmVhdGVkXCIuXHJcblxyXG4vLyBjb25zdCBwMSA9IG5ldyBQcm9taXNlKCgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnUHJvbWlzZSBpcyBjcmVhdGVkJyk7XHJcbi8vIH0pO1xyXG4vLyBjb25zb2xlLmxvZyhwMSk7XHJcblxyXG5cclxuXHJcbi8vIFRhc2sgMDJcclxuLy8g0KHQvtC30LTQsNC50YLQtSDQv9GA0L7QvNC40YEsINC60L7RgtC+0YDRi9C5INC/0L7RgdC70LUg0YHQvtC30LTQsNC90LjRjyDRgdGA0LDQt9GDINC20LUg0L/QtdGA0LXRhdC+0LTQuNGCINCyINGB0L7RgdGC0L7Rj9C90LjQtSByZXNvbHZlXHJcbi8vINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRgyAnUHJvbWlzZSBEYXRhJ1xyXG4vLyDQn9C+0LvRg9GH0LjRgtC1INC00LDQvdC90YvQtSDQv9GA0L7QvNC40YHQsCDQuCDQstGL0LLQtdC00LjRgtC1INC40YUg0LIg0LrQvtC90YHQvtC70YxcclxuXHJcbi8vIGNvbnN0IHAyID0gUHJvbWlzZS5yZXNvbHZlKCdQcm9taXNlIERhdGEnKTtcclxuLy8gY29uc29sZS5sb2cocDIpO1xyXG4vLyBwMi50aGVuKGNvbnNvbGUubG9nKTtcclxuXHJcblxyXG5cclxuLy8gVGFzayAwM1xyXG4vLyDQodC+0LfQtNCw0LnRgtC1INC/0YDQvtC80LjRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QvtGB0LvQtSDRgdC+0LfQtNCw0L3QuNGPINGB0YDQsNC30YMg0LbQtSDQv9C10YDQtdGF0L7QtNC40YIg0LIg0YHQvtGB0YLQvtGP0L3QuNC1IHJlamVjdGVkXHJcbi8vINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRgyAnUHJvbWlzZSBFcnJvcidcclxuLy8g0J/QvtC70YPRh9C40YLQtSDQtNCw0L3QvdGL0LUg0L/RgNC+0LzQuNGB0LAg0Lgg0LLRi9Cy0LXQtNC40YLQtSDQuNGFINCyINC60L7QvdGB0L7Qu9GMXHJcblxyXG4vLyBjb25zdCBwMyA9IFByb21pc2UucmVqZWN0KCdQcm9taXNlIEVycm9yJyk7XHJcbi8vIHAzLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcblxyXG5cclxuLy8gVGFzayAwNFxyXG4vLyDQodC+0LfQtNCw0LnRgtC1INC/0YDQvtC80LjRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXRhdC+0LTQuNGCINCyINGB0L7RgdGC0L7Rj9C90LjQtSByZXNvbHZlZCDRh9C10YDQtdC3IDPRgS5cclxuLy8gKNCY0YHQv9C+0LvRjNC30YPQudGC0LUgc2V0VGltZW91dClcclxuLy8g0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YHRgtGA0L7QutGDICdQcm9taXNlIERhdGEnXHJcbi8vINCf0L7Qu9GD0YfQuNGC0LUg0LTQsNC90L3Ri9C1INC/0YDQvtC80LjRgdCwINC4INCy0YvQstC10LTQuNGC0LUg0LjRhSDQsiDQutC+0L3RgdC+0LvRjFxyXG5cclxuLy8gY29uc3QgcDQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4vLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgcmVzb2x2ZSgnUHJvbWlzZSBEYXRhJyk7XHJcbi8vICAgfSwgMzAwMClcclxuLy8gfSk7XHJcbi8vIHA0LnRoZW4oY29uc29sZS5sb2cpO1xyXG5cclxuXHJcblxyXG4vLyBUYXNrIDA1XHJcbi8vINCh0L7Qt9C00LDQudGC0LUg0LvQuNGC0LXRgNCw0Lsg0L7QsdGK0LXQutGC0LAgaGFuZGxlUHJvbWlzZSDRgdC+INGB0LvQtdC00YPRjtGJ0LjQvNC4INGB0LLQvtC50YHRgtCy0LDQvNC4OlxyXG4vLyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QsIG9uU3VjY2Vzcywgb25FcnJvclxyXG4vLyDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQudGC0LUg0L/QtdGA0LLRi9C1INGC0YDQuCDRgdCy0L7QudGB0YLQstCwIG51bGwsXHJcbi8vINCwINC/0L7RgdC70LXQtNC90LjQtSDQtNCy0LAg0YTRg9C90LrRhtC40Y/QvNC4LCDQutC+0YLQvtGA0YvQtSDQv9GA0LjQvdC40LzQsNGO0YIg0L7QtNC40L0g0L/QsNGA0LDQvNC10YLRgCDQuCDQstGL0LLQvtC00Y/RglxyXG4vLyDQsiDQutC+0L3RgdC+0LvRjCDRgdC+0L7QsdGJ0LXQvdC40Y86INC/0LXRgNCy0LDRjyAtIGBQcm9taXNlIGlzIHJlc29sdmVkIHdpdGggZGF0YTogJHtwYXJhbU5hbWV9YFxyXG4vLyDQstGC0L7RgNCw0Y8gLSBgUHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIGVycm9yOiAke3BhcmFtTmFtZX1gXHJcbi8vINCh0L7Qt9C00LDQudGC0LUg0YLRgNC4INC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0YHQvtCx0YvRgtC40Y8gY2xpY2sg0LTQu9GPINC60L3QvtC/0L7QuiBcIkNyZWF0ZSBQcm9taXNlXCIsIFwiUmVzb2x2ZSBQcm9taXNlXCIsIFwiUmVqZWN0IFByb21pc2VcIi5cclxuLy8g0J/QtdGA0LLRi9C5INC+0LHRgNCw0LHQvtGC0YfQuNC6LCDRgdC+0LfQtNCw0LXRgiDQv9GA0L7QvNC40YEsINC30LDQv9C+0LvQvdGP0LXRgiDQv9C10YDQstGL0LUg0YLRgNC4INGB0LLQvtC50YHRgtCy0LAsXHJcbi8vINC+0L/QuNGB0LDQvdC+0LPQviDQstGL0YjQtSDQvtCx0YrQtdC60YLQsDog0YHQstC+0LnRgdGC0LLQviBwcm9taXNlINC/0L7Qu9GD0YfQsNC10YIg0L3QvtCy0YvQuSDRgdC+0LfQtNCw0L3QvdGL0Lkg0L/RgNC+0LzQuNGBLFxyXG4vLyDRgdCy0L7QudGB0YLQstCwIHJlc29sdmUg0LggcmVqZWN0INC/0L7Qu9GD0YfQsNGO0YIg0YHRgdGL0LvQutC4INC90LAg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC1INGE0YPQvdC60YbQuNC4XHJcbi8vIHJlc29sdmUg0LggcmVqZWN0LiDQodC70LXQtNGD0Y7RidC40LUg0LTQstCwINC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0LfQsNC/0YPRgdC60LDRjtGCINC80LXRgtC+0LTRiyByZXNvbHZlINC4IHJlamVjdC5cclxuXHJcbi8vIGNvbnN0IGhhbmRsZVByb21pc2UgPSB7XHJcbi8vICAgcHJvbWlzZTogbnVsbCxcclxuLy8gICByZXNvbHZlOiBudWxsLFxyXG4vLyAgIHJlamVjdDogbnVsbCxcclxuLy8gICBvblN1Y2Nlc3MocGFyYW1OYW1lKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgUHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIGRhdGE6ICR7cGFyYW1OYW1lfWApO1xyXG4vLyAgICAgcmV0dXJuIHBhcmFtTmFtZTtcclxuLy8gICB9LFxyXG4vLyAgIG9uRXJyb3IocGFyYW1OYW1lKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgUHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIGVycm9yOiAke3BhcmFtTmFtZX1gKTtcclxuLy8gICB9LFxyXG4vLyB9XHJcbi8vXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tY3JlYXRlLXByb21pc2UnKS5hZGRFdmVudExpc3RlbmVyKFxyXG4vLyAgICdjbGljaycsXHJcbi8vICAgKCkgPT4ge1xyXG4vLyAgICAgaGFuZGxlUHJvbWlzZS5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICBoYW5kbGVQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xyXG4vLyAgICAgICBoYW5kbGVQcm9taXNlLnJlamVjdCA9IHJlamVjdDtcclxuLy8gICAgIH0pXHJcbi8vICAgICAgIC50aGVuKGhhbmRsZVByb21pc2Uub25TdWNjZXNzKVxyXG4vLyAgICAgICAudGhlbihoYW5kbGVQcm9taXNlLm9uU3VjY2VzcylcclxuLy8gICAgICAgLmNhdGNoKGhhbmRsZVByb21pc2Uub25FcnJvcik7XHJcbi8vICAgfVxyXG4vLyApO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXJlc29sdmUtcHJvbWlzZScpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbi8vICAgJ2NsaWNrJyxcclxuLy8gICAoKSA9PiB7XHJcbi8vICAgICBoYW5kbGVQcm9taXNlLnJlc29sdmUoJ2RhdGEnKTtcclxuLy8gICB9XHJcbi8vXHJcbi8vICk7XHJcbi8vXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcmVqZWN0LXByb21pc2UnKS5hZGRFdmVudExpc3RlbmVyKFxyXG4vLyAgICdjbGljaycsXHJcbi8vICAgKCkgPT4ge1xyXG4vLyAgICAgaGFuZGxlUHJvbWlzZS5yZWplY3QoJ2Vycm9yLWRhdGEnKTtcclxuLy8gICB9XHJcbi8vICk7XHJcblxyXG5cclxuLy8gVGFzayAwNlxyXG4vLyDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC/0YDQtdC00YvQtNGD0YnQtdC1INC30LDQtNCw0L3QuNC1LiDQn9GA0L7QtNGD0LHQu9C40YDRg9C50YLQtSDRgdGC0YDQvtGH0LrRgyDRgSDQvNC10YLQvtC00L7QvCB0aGVuXHJcblxyXG5cclxuLy8gVGFzayAwN1xyXG4vLyDQodC+0LfQtNCw0LnRgtC1INC/0YDQvtC80LjRgSwg0LrQvtGC0L7RgNGL0Lkg0YfQtdGA0LXQtyAxINGBINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRgyBcIk15IG5hbWUgaXNcIi5cclxuLy8g0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBvblN1Y2Nlc3MsINC60L7RgtC+0YDQsNGPINC/0L7Qu9GD0YfQsNC10YIg0L7QtNC40L0g0L/QsNGA0LDQvNC10YLRgCxcclxuLy8g0L/RgNC40LHQsNCy0LvRj9C10YIg0Log0L3QtdC80YMg0JLQsNGI0LUg0LjQvNGPINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7QstGD0Y4g0YHRgtGA0L7QutGDINC40Lcg0YTRg9C90LrRhtC40LhcclxuLy8g0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBwcmludCwg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0LIg0LrQvtC90YHQvtC70Ywg0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QtdCz0L4g0L/QsNGA0LDQvNC10YLRgNCwXHJcbi8vINCU0L7QsdCw0LLRjNGC0LUg0LTQstCwINC80LXRgtC+0LTQsCB0aGVuINC4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtSDRgdC+0LfQtNCw0L3QvdGL0LUg0YTRg9C90LrRhtC40LguXHJcblxyXG4vLyBjb25zdCBvblN1Y2Nlc3MgPSAocGFyYW0pID0+IHtcclxuLy8gICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIG1lc3NhZ2UnKTtcclxuLy8gICByZXR1cm4gYNCS0LDRiNC1INC40LzRjyAke3BhcmFtfWA7XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgcHJpbnQgPSAoc3RyaW5nKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coc3RyaW5nKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBwNyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgIHJlc29sdmUoJ015IG5hbWUgaXMnKTtcclxuLy8gICB9LCAxMDAwKVxyXG4vLyB9KS50aGVuKG9uU3VjY2VzcykudGhlbihwcmludCkuY2F0Y2goY29uc29sZS5sb2cpO1xyXG5cclxuLy8gVGFzayAwOFxyXG4vLyDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC/0YDQtdC00YvQtNGD0YnQuNC5INC60L7QtC4g0JTQvtCx0LDQstGM0YLQtSDQsiDRhNGD0L3QutGG0Lggb25TdWNjZXNzINCz0LXQvdC10YDQsNGG0LjRjiDQuNGB0LrQu9GO0YfQtdC90LjRj1xyXG4vLyDQntCx0YDQsNCx0L7RgtCw0LnRgtC1INC00LDQvdC+0LUg0LjRgdC60LvRjtGH0LXQvdC40LUsINC40YHQv9C+0LvRjNC30YPRjyBjYXRjaC4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LFxyXG4vLyDRh9GC0L4g0LzQtdGC0L7QtCBwcmludCDQv9GA0Lgg0Y3RgtC+0Lwg0L3QtSDQstGL0L/QvtC70L3Rj9C10YLRgdGPLlxyXG5cclxuXHJcbi8vIFRhc2sgMDlcclxuLy8g0J3QsNC/0LjRiNC40YLQtSDRhNGD0L3QutGG0LjRjiBnZXRQcm9taXNlRGF0YSwg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC+0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAgLSDQv9GA0L7QvNC40YEuINCk0YPQvdC60YbQuNGPINC/0L7Qu9GD0YfQsNC10YJcclxuLy8g0LfQvdCw0YfQtdC90LjQtSDQv9GA0L7QvNC40YHQsCDQuCDQstGL0LLQvtC00LjRgiDQtdCz0L4g0LIg0LrQvtC90YHQvtC70YxcclxuLy8g0J7QsdGK0Y/QstC40YLQtSDQvtCx0YrQtdC60YIg0YHQviDRgdCy0L7QudGC0LLQvtC8IG5hbWUg0Lgg0LfQvdCw0YfQtdC90LjQtdC8IEFubmEuXHJcbi8vINCh0L7Qt9C00LDQudGC0LUg0LLRgNCw0L/QtdGAINC00LvRjyDRjdGC0L7Qs9C+INC+0LHRitC10LrRgtCwINC4INCy0YvQt9C+0LLQuNGC0LUg0LTQu9GPINC90LXQs9C+INGE0YPQvdC60YbQuNGOIGdldFByb21pc2VEYXRhXHJcblxyXG4vLyBjb25zdCBwZXJzb24gPSB7XHJcbi8vICAgbmFtZTogJ0FubmEnLFxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBnZXRQcm9taXNlRGF0YSA9IChwcm9taXNlKSA9PiB7XHJcbi8vICAgcHJvbWlzZS50aGVuKGNvbnNvbGUubG9nKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBnZXRQcm9taXNlRGF0YShQcm9taXNlLnJlc29sdmUocGVyc29uKSk7XHJcblxyXG5cclxuLy8gVGFzayAxMFxyXG4vLyDQodC+0LfQtNCw0LnRgtC1INC00LLQsCDQv9GA0L7QvNC40YHQsC4g0J/QtdGA0LLRi9C5INC/0YDQvtC80LjRgSDQstC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIgeyBuYW1lOiBcIkFubmFcIiB9INGH0LXRgNC10LcgMtGBLFxyXG4vLyDQsCDQstGC0L7RgNC+0Lkg0L/RgNC+0LzQuNGBINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiB7YWdlOiAxNn0g0YfQtdGA0LXQtyAzINGBLlxyXG4vLyDQn9C+0LvRg9GH0LjRgtC1INGA0LXQt9GD0LvRjNGC0LDRgtGLINGA0LDQsdC+0YLRiyDQtNCy0YPRhSDQv9GA0L7QvNC40YHQvtCyLCDQvtCx0YrQtdC00LjQvdC40YLQtSDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtC+0LJcclxuLy8g0Lgg0LLRi9Cy0LXQtNC40YLQtSDQsiDQutC+0L3RgdC+0LvRjFxyXG5cclxuLy8gY29uc3QgcGVyc29uTmFtZSA9IHtcclxuLy8gICBuYW1lOiAnQW5uYScsXHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IHBlcnNvbkFnZSA9IHtcclxuLy8gICBhZ2U6IDE2LFxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBjcmVhdGVSZXNvbHZlZFByb21pc2UgPSAoZGF0YSwgZGVsYXkpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbi8vICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSwgZGF0YSk7XHJcbi8vIH0pXHJcbi8vXHJcbi8vIGNvbnN0IGNyZWF0ZVJlamVjdGVkUHJvbWlzZSA9IChkYXRhLCBkZWxheSkgPT4gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xyXG4vLyAgIHNldFRpbWVvdXQocmVqZWN0LCBkZWxheSwgZGF0YSk7XHJcbi8vIH0pXHJcbi8vXHJcbi8vIGNvbnN0IHByb21pc2VzQXJyYXkgPSBbY3JlYXRlUmVzb2x2ZWRQcm9taXNlKHBlcnNvbk5hbWUsIDIwMDApLCBjcmVhdGVSZWplY3RlZFByb21pc2UocGVyc29uQWdlLCAzMDAwKV07XHJcbi8vXHJcbi8vIFByb21pc2UuYWxsKHByb21pc2VzQXJyYXkpXHJcbi8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVkdWNlKChhY2MsIG9iaikgPT4gKHsgLi4uYWNjLCAuLi5vYmogfSksIHt9KVxyXG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICB9KVxyXG4vLyAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZygnUHJvbWlzZSBFcnJvcicpKTtcclxuXHJcblxyXG4vLyBUYXNrIDExXHJcbi8vINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0L/RgNC10LTRi9C00YPRidC10LUg0LfQsNC00LDQvdC40LUuINCf0YPRgdGC0Ywg0YLQtdC/0LXRgNGMINCy0YLQvtGA0L7QuSDQv9GA0L7QvNC40YEg0L/QtdGA0LXRhdC+0LTQuNGCINCyXHJcbi8vINGB0L7RgdGC0L7Rj9C90LjQtSByZWplY3RlZCDRgdC+INC30L3QsNGH0LXQvdC40LXQvCBcIlByb21pc2UgRXJyb3JcIi4g0JjQt9C80LXQvdC40YLQtSDQutC+0LQsINGH0YLQvtCx0Ysg0L7QsdGA0LDQsdC+0YLQsNGC0YxcclxuLy8g0Y3RgtGDINGB0LjRgtGD0LDRhtC40Y4uXHJcblxyXG5cclxuLy8gVGFzayAxMlxyXG4vLyDQodC+0LfQtNCw0LnRgtC1INC/0YDQvtC80LjRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQudC00LXRgiDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgcmVzb2x2ZSDRh9C10YDQtdC3IDXRgSDQuCDQstC10YDQvdC10YIg0YHRgtGA0L7QutGDXHJcbi8vICdQcm9taXNlIERhdGEnLlxyXG4vLyDQodC+0LfQtNCw0LnRgtC1INCy0YLQvtGA0L7QuSDQv9GA0L7QvNC40YEsINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LnQtNC10YIg0LIg0YHQvtGB0YLQvtGP0L3QuNC1IHJlamVjdGVkINC/0L4g0LrQu9C40LrRgyDQvdCwXHJcbi8vINC60L3QvtC/0LrRgyBcIkNhbmNlbCBQcm9taXNlXCIuINCU0L7QsdCw0LLRjNGC0LUg0L7QsdGA0LDQsdC+0YLRh9C40Log0LTQu9GPINC60L3QvtC/0LrQuC5cclxuLy8g0JjRgdC/0L7Qu9GM0LfRg9GPINC80LXRgtC+0LQgcmFjZSDQvtGA0LPQsNC90LjQt9GD0LnRgtC1IFwi0L7RgtC80LXQvdGDINC/0YDQvtC80LjRgdCwXCIuXHJcblxyXG4vLyBjb25zdCBwMTIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4vLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgcmVzb2x2ZSgnUHJvbWlzZSBEYXRhJyk7XHJcbi8vICAgfSwgNTAwMClcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGxldCByZWplY3RQMTM7XHJcbi8vIGNvbnN0IHAxMyA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcclxuLy8gICByZWplY3RQMTMgPSByZWplY3Q7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWNhbmNlbC1wcm9taXNlJykuYWRkRXZlbnRMaXN0ZW5lcihcclxuLy8gICAnY2xpY2snLFxyXG4vLyAgICgpID0+IHtcclxuLy8gICAgIHJlamVjdFAxMygnUHJvbWlzZSBpcyBjYW5jZWxlZCcpO1xyXG4vLyAgIH1cclxuLy8gKTtcclxuLy9cclxuLy8gUHJvbWlzZS5yYWNlKFtwMTIsIHAxM10pLnRoZW4oY29uc29sZS5sb2cpLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuIiwiY29uc29sZS5sb2coJ1RvcGljOiBBc3luYyBGdW5jdGlvbnMnKTtcclxuLy8gVGFzayAwMVxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDQsNGB0LjQvdGF0YDQvtC90L3Rg9GOINGE0YPQvdC60YbQuNGOIGYxLCDQuNGB0L/QvtC70YzQt9GD0Y8gRkRTIChGdW5jdGlvbiBEZWNsYXJhdGlvbiBTdGF0ZW1lbnQpLlxyXG4vLyAgICAg0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINC/0YDQuNC90LjQvNCw0YLRjCDQtNCy0LAg0L/QsNGA0LDQvNC10YLRgNCwIGEg0LggYiDQuCDQstC+0LfQstGA0LDRidCw0YLRjCDRgdGD0LzQvNGDIGErYi5cclxuLy8gICAgINCS0YvQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtSwg0LrQvtGC0L7RgNC+0LUg0LLQtdGA0L3QtdGCINGE0YPQvdC60YbQuNGPINCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyAgICAg0J7QsdGA0LDQsdC+0YLQsNC10YLQtSDQv9GA0L7QvNC40YEg0Lgg0LLRi9Cy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyBFTjogQ3JlYXRlIGFuIGFzeW5jIGZ1bmN0aW9uIGYxIGFzIGEgRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50LlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIHNob3VsZCB0YWtlIHR3byBwYXJhbWV0ZXJzIGEgYW5kIGIgYW5kIHJldHVybiBhIHN1bSBhK2IuXHJcbi8vICAgICBEaXNwbGF5IHRoZSByZXN1bHQgb2YgZnVuY3Rpb24gaW4gdGhlIGNvbnNvbGUuXHJcbi8vICAgICBQcm9jZXNzIGEgcHJvbWlzZSBhbmQgZGlzcGxheSB2YWx1ZSBpbiB0aGUgY29uc29sZS5cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGYxKGEsIGIpIHtcclxuLy8gICByZXR1cm4gYSArIGI7XHJcbi8vIH1cclxuLy9cclxuLy8gZjEoMSwgMikudGhlbihjb25zb2xlLmxvZyk7XHJcblxyXG4vLyBUYXNrIDAyXHJcbi8vIFJVOiDQodC+0LfQtNCw0LnRgtC1INCw0YHQuNC90YXRgNC+0L3QvdGD0Y4g0YTRg9C90LrRhtC40Y4gZjIsINC40YHQv9C+0LvRjNC30YPRjyBGREUgKEZ1bmN0aW9uIERlZmluaXRpb24gRXhwcmVzc2lvbikuXHJcbi8vICAgICDQpNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLQvtC30LLRgNCw0YnQsNGC0YwgJ1Byb21pc2UgRGF0YScsINC40YHQv9C+0LvRjNC30YPRjyBQcm9taXNlLnJlc29sdmUoKVxyXG4vLyAgICAg0JLRi9Cy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQstC10YDQvdC10YIg0YTRg9C90LrRhtC40Y8g0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vICAgICDQntCx0YDQsNCx0L7RgtCw0LXRgtC1INC/0YDQvtC80LjRgSDQuCDQstGL0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUg0LIg0LrQvtC90YHQvtC70YwuXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXN5bmMgZnVuY3Rpb24gZjIgYXMgYSBGdW5jdGlvbiBEZWZpbml0aW9uIEV4cHJlc3Npb24uXHJcbi8vICAgICBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nICdQcm9taXNlIGRhdGEnIHVzaW5nIFByb21pc2UucmVzb2x2ZSgpIG1ldGhvZC5cclxuLy8gICAgIERpc3BsYXkgdGhlIHJlc3VsdCBvZiBmdW5jdGlvbiBpbiB0aGUgY29uc29sZS5cclxuLy8gICAgIFByb2Nlc3MgYSBwcm9taXNlIGFuZCBkaXNwbGF5IHZhbHVlIGluIHRoZSBjb25zb2xlLlxyXG5cclxuLy8gY29uc3QgZjIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnUHJvbWlzZSBEYXRhJyk7XHJcbi8vIH1cclxuLy9cclxuLy8gZjIoKS50aGVuKGNvbnNvbGUubG9nKTtcclxuXHJcbi8vIFRhc2sgMDNcclxuLy8gUlU6INCh0L7Qt9C00LDQudGC0LUg0LrQu9Cw0YHRgSBDMS4g0JTQvtCx0LDQstGM0YLQtSDQsNGB0LjQvdGF0YDQvtC90L3Ri9C5INC80LXRgtC+0LQgZjMuXHJcbi8vICAgICDQnNC10YLQvtC0INC00L7Qu9C20LXQvSDQs9C10L3QtdGA0LjRgtGMINC40YHQutC70Y7Rh9C10L3QuNC1ICdFcnJvciBvY2N1cnMgaW4gZjMgbWV0aG9kJy5cclxuLy8gICAgINCh0L7Qt9C00LDQudGC0LUg0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCDQuCDQstGL0LfQvtCy0LjRgtC1INC80LXRgtC+0LQgZjMuXHJcbi8vICAgICDQntCx0YDQsNCx0L7RgtCw0LXRgtC1INC/0YDQvtC80LjRgS5cclxuLy8gRU46IENyZWF0ZSBhIGNsYXNzIEMxLiBBZGQgYXN5bmMgbWV0aG9kIGYzLlxyXG4vLyAgICAgTWV0aG9kIHNob3VsZCB0aHJvdyBhbiBleGNlcHRpb24gJ0Vycm9yIG9jY3VycyBpbiBmMyBtZXRob2QnLlxyXG4vLyAgICAgQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjbGFzcyBhbmQgY2FsbCB0aGUgbWV0aG9kIGYzLlxyXG4vLyAgICAgUHJvY2VzcyBhIHByb21pc2UgYW5kIGRpc3BsYXkgdmFsdWUgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBjbGFzcyBDMSB7XHJcbi8vICAgYXN5bmMgZjMoKSB7XHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yJylcclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3Qgb2JqID0gbmV3IEMxKCk7XHJcbi8vIG9iai5mMygpLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbi8vIFRhc2sgMDRcclxuLy8gUlU6IEPQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBtYWtlUmVxdWVzdCwg0LjRgdC/0L7Qu9GM0LfRg9GPIEZEUyAoRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50KS5cclxuLy8gICAgINCk0YPQvdC60YbQuNGPINC00L7Qu9C20L3QsCDQv9GA0LjQvdC40LzQsNGC0Ywg0L7QtNC40L0g0L/QsNGA0LDQvNC10YLRgCAtIHVybCDQuCDQstC+0LfQstGA0LDRidCw0YLRjCDQv9GA0L7QvNC40YEsXHJcbi8vICAgICDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC50LTQtdGCINCyINGB0L7RgdGC0L7Rj9C90LjQtSByZXNvbHZlZCDRh9C10YDQtdC3IDLRgS4g0Lgg0LLQtdGA0L3QtdGCINC30L3QsNGH0LXQvdC40LUg0L/QsNGA0LDQvNC10YLRgNCwLlxyXG4vLyAgICAg0J/QtdGA0LLQvtC5INGB0YLRgNC+0LrQvtC5INCyINGE0YPQvdC60YbQuNC4INCy0YvQstC10LTQuNGC0LUg0YHQvtC+0LHRidC10L3QuNC1ICdtYWtlUmVxdWVzdCBpcyBjYWxsZWQnLlxyXG4vLyAgICAgQ9C+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIGY0LCDQuNGB0L/QvtC70YzQt9GD0Y8gRkRTIChGdW5jdGlvbiBEZWNsYXJhdGlvbiBTdGF0ZW1lbnQpLlxyXG4vLyAgICAg0KTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINCy0YvQt9Cy0LDRgtGMINGE0YPQvdC60YbQuNGOIG1ha2VSZXF1ZXN0LCDQv9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiDQtdC1INGA0LDQsdC+0YLRiyDQuCDQstGL0LLQtdGB0YLQuCDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9tIG1ha2VSZXF1ZXN0IGFzIGEgRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50LlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIgLSB1cmwgYW5kIHJldHVybiBhIHByb21pc2UsXHJcbi8vICAgICB3aGljaCBzaG91bGQgYmUgcmVzb2x2ZWQgYWZ0ZXIgMnMgYW5kIGl0IHNob3VsZCByZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgdXJsLlxyXG4vLyAgICAgVGhlIGZpcnN0IGxpbmUgb2YgY29kZSBpbiB0aGUgZnVuY3Rpb24gc2hvdWxkIGRpc3BsYXkgbWVzc2FnZSAnbWFrZVJlcXVlc3QgaXMgY2FsbGVkJyBpbiB0aGUgY29uc29sZS5cclxuLy8gICAgIENyZWF0ZSBhIGZ1bmN0aW9uIGY0IGFzIGEgRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50LlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIGY0IHNob3VsZCBjYWxsIHRoZSBmdW5jdGlvbiBtYWtlUmVxdWVzdCwgZ2V0IGl0cyByZXN1bHQgYW5kIGRpc3BsYXkgaXQgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdCh1cmwpIHtcclxuLy8gICBjb25zb2xlLmxvZygnbWFrZVJlcXVlc3QgaXMgY2FsbGVkJyk7XHJcbi8vXHJcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAyMDAwLCB1cmwpKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBhc3luYyBmdW5jdGlvbiBmNCh1cmwpIHtcclxuLy8gICBjb25zb2xlLmxvZyhhd2FpdCBtYWtlUmVxdWVzdCh1cmwpKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmNCgnd3d3LnNvbWV1cmwuY29tJyk7XHJcblxyXG4vLyBUYXNrIDA1XHJcbi8vIFJVOiDQktC90LXRgdC40YLQtSDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YTRg9C90LrRhtC40Y4gZjQg0LjQtyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINGC0LDQuiwg0YfRgtC+0LHRiyDQsiDQutC+0L3RgdC+0LvQtSDQv9C+0Y/QstC40LvQvtGB0YxcclxuLy8gICAgINC30L3QsNGH0LXQvdC40LUg0L/QtdGA0LXQtNCw0L3QvtCz0L4g0L/QsNGA0LDQvNC10YLRgNCwINCyINGE0YPQvdC60YbQuNGOIG1ha2VSZXF1ZXN0LlxyXG4vLyBFTjogTWFrZSBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBmNCBmcm9tIHRoZSBwcmV2aW91cyB0YXNrLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBkaXNwbGF5IHRoZSB2YWx1ZVxyXG4vLyAgICAgb2YgdGhlIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gbWFrZVJlcXVlc3QgaW4gdGhlIGNvbnNvbGUuXHJcblxyXG4vLyBUYXNrIDA2XHJcbi8vIFJVOiBD0L7Qt9C00LDQudGC0LUg0LDRgdC40L3RhdGA0L7QvdC90YPRjiDRhNGD0L3QutGG0LjRjiBmNiwg0LjRgdC/0L7Qu9GM0LfRg9GPIEZEUyAoRnVuY3Rpb24gRGVjbGFyYXRpb24gU3RhdGVtZW50KS5cclxuLy8gICAgINCk0YPQvdC60YbQuNGPINC00L7Qu9C20L3QsCDQstGL0LfQstCw0YLRjCDQtNCy0LAg0YDQsNC30LAg0YTRg9C90LrRhtC40Y4gbWFrZVJlcXVlc3Qg0YEg0YDQsNC30L3Ri9C80Lgg0LfQvdCw0YfQtdC90LjRj9C80Lgg0L/QsNGA0LDQvNC10YLRgNCwLlxyXG4vLyAgICAg0J/QtdGA0LXQtCDQstGL0LfQvtCy0L7QvCDQuCDQv9C+0YHQu9C1INC60LDQttC00L7Qs9C+INCy0YvQt9C+0LLQsCBtYWtlUmVxdWVzdCDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LLRi9Cy0L7QtNC40YLRjCDQsiDQutC+0L3RgdC+0LvRjCDQu9GO0LHQvtC1INGB0L7QvtCx0YnQtdC90LjQtS5cclxuLy8gICAgINCh0L7Qt9C00LDRgtGMINC4INCy0LXRgNC90YPRgtGMINC80LDRgdGB0LjQsiwg0LrQvtGC0L7RgNGL0Lkg0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQt9C90LDRh9C10L3QuNGPINC/0LXRgNC10LTQsNC90YvQtSDRhNGD0L3QutGG0LjQuCBtYWtlUmVxdWVzdC5cclxuLy8gICAgINCe0LHRgNCw0LHQvtGC0LDQtdGC0LUg0YDQtdC30YPQu9GM0YLQsNGCINGA0LDQsdC+0YLRiyDRhNGD0L3QutGG0LjQuCBmNi5cclxuLy8gRU46IENyZWF0ZSBhbiBhc3luYyBmdW5jdGlvbiBmNiBhcyBhIEZ1bmN0aW9uIERlY2xhcmF0aW9uIFN0YXRlbWVudC5cclxuLy8gICAgIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGNhbGwgdGhlIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0IHR3byB0aW1lcyB3aXRoIGRpZmZlcmVudCB2YWx1ZXMgb2YgaXRzIHBhcmFtZXRlci5cclxuLy8gICAgIFRoZSBmdW5jdGlvbiBmNiBzaG91bGQgZGlzcGxheSBhbnkgbWVzc2FnZSBpbiB0aGUgY29uc29sZSBiZWZvcmUgYW5kIGFmdGVyIGVhY2ggY2FsbFxyXG4vLyAgICAgb2YgdGhlIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0LlxyXG4vLyAgICAgQ3JlYXRlIGFuZCByZXR1cm4gdGhlIGFycmF5IGZyb20gdGhlIGZ1bmN0aW9uIGY2LCB3aGljaCBzaG91bGQgY29udGFpbnMgdGhlIHZhbHVlcyBvZiB0aGVcclxuLy8gICAgIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gbWFrZVJlcXVlc3QuXHJcbi8vICAgICBQcm9jZXNzIHRoZSByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGY2LlxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZjYoW3VybDEsIHVybDJdKSB7XHJcbi8vICAgbGV0IGRhdGEgPSBbXTtcclxuLy9cclxuLy8gICBkYXRhLnB1c2goYXdhaXQgbWFrZVJlcXVlc3QodXJsMSkpO1xyXG4vLyAgIGRhdGEucHVzaChhd2FpdCBtYWtlUmVxdWVzdCh1cmwyKSk7XHJcbi8vXHJcbi8vICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHVybHMubWFwKHVybCA9PiBtYWtlUmVxdWVzdCh1cmwpKSk7XHJcbi8vXHJcbi8vICAgcmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuLy9cclxuLy8gZjYoWydleGFtcGxlLmNvbScsICdtYWlsLmNvbSddKS50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhLmpvaW4oJywgJykpKTtcclxuXHJcbi8vIFRhc2sgMDdcclxuLy8gUlU6INCY0LfQvNC10L3QuNGC0LUg0LDRgdC40L3RhdGA0L7QvdC90YPRjiDRhNGD0L3QutGG0LjRjiBmNiDQuNC3INC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0YLQsNC6LCDRh9GC0L7QsdGLINCy0YvQt9C+0LLRiyDRhNGD0L3QutGG0LjQuFxyXG4vLyAgICAgbWFrZVJlcXVlc3Qg0LLRi9C/0L7Qu9C90Y/Qu9C40YHRjCDQv9Cw0YDQsNC70LXQu9GM0L3Qvi5cclxuLy8gRU46IE1ha2UgY2hhbmdlcyB0byB0aGUgYXN5bmMgZnVuY3Rpb24gZjYgZnJvbSB0aGUgcHJldmlvdXMgdGFzay4gVGhpcyBmdW5jdGlvbiBzaG91bGRcclxuLy8gICAgIGNhbGwgdGhlIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0IHdpdGggZGlmZmVyZW50IHZhbHVlcyBvZiBpdHMgcGFyYW1ldGVyIHNpbXVsdGFuZW91c2x5LlxyXG5cclxuLy8gVGFzayAwOFxyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtSDQvNCw0YHQuNCyINGD0YDQu9C+0LIgWydodHRwOi8vYScsICdodHRwOi8vYiddLlxyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBzZW5kUmVxdWVzdCwg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC+0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAgLSB1cmwuXHJcbi8vICAgICDQpNGD0L3QutGG0LjRjyDQsiDQv9C10YDQstC+0Lkg0YHRgtGA0L7QutC1INC00L7Qu9C20L3QsCDQstGL0LLQvtC00LjRgtGMINCyINC60L7QvdGB0L7Qu9GMINGB0L7QvtCx0YnQtdC90LjQtSAnc2VuZFJlcXVlc3QgaXMgY2FsbGVkJ1xyXG4vLyAgICAg0Lgg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0YfQtdGA0LXQtyAyINGBINC00LvRjyDQv9C10YDQstC+0LPQviDRg9GA0LvQsCDQvtCx0YrQtdC60YIgeyBuYW1lOiAnQW5uJyB9LCDQsCDQtNC70Y8g0LLRgtC+0YDQvtCz0L5cclxuLy8gICAgINGD0YDQu9CwINC+0LHRitC10LrRgiB7IGFnZTogMTYgfS5cclxuLy8gICAgINCh0L7Qt9C00LDQudGC0LUg0LDRgdC40L3RhdGA0L7QvdC90YPRjiDRhNGD0L3QutGG0LjRjiBmOCDQutC+0YLQvtGA0LDRjyDQtNC+0LvQttC90LAg0LLRi9C30LLQsNGC0Ywg0YTRg9C90LrRhtC40Y4gc2VuZFJlcXVlc3Qg0LTQu9GPINC60LDQttC00L7Qs9C+INGD0YDQu9CwXHJcbi8vICAgICDQuCDQstC10YDQvdGD0YLRjCDQvtCx0YrQtdC60YIge25hbWU6ICdBbm4nLCBhZ2U6IDE2fVxyXG4vLyAgICAg0J7QsdGA0LDQsdC+0YLQsNC50YLQtSDRgNC10LfRg9C70YzRgtCw0YIg0YDQsNCx0L7RgtGLINGE0YPQvdC60YbQuNC4IGY4XHJcbi8vIEVOOiBDcmVhdGUgdGhlIGFycmF5IG9mIHVybHMgWydodHRwOi8vYScsICdodHRwOi8vYiddLlxyXG4vLyAgICAgQ3JlYXRlIHRoZSBmdW5jdGlvbiBzZW5kUmVxdWVzdCB3aGljaCBzaG91bGQgdGFrZSBvbmUgcGFyYW1ldGVyIC0gdXJsLlxyXG4vLyAgICAgVGhlIGZ1bmN0aW9uIHNob3VsZCBkaXNwbGF5IHRoZSBtZXNzYWdlICdzZW5kUmVxdWVzdCBpcyBjYWxsZWQnIGluIHRoZSBjb25zb2xlXHJcbi8vICAgICBpbiBpdHMgZmlyc3QgbGluZSBvZiBjb2RlLiBUaGVuIHRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHRoZSBvYmplY3QgeyBuYW1lOiAnQW5uJyB9IGZvciB0aGVcclxuLy8gICAgIGZpcnN0IHVybCBhZnRlciAycyBhbmQgdGhlIG9iamVjdCB7IGFnZTogMTYgfSBmb3IgdGhlIHNlY29uZCB1cmwgYWZ0ZXIgMnMuXHJcbi8vICAgICBDcmVhdGUgdGhlIGFzeW5jIGZ1bmN0aW9uIGY4LCB3aGljaCBzaG91bGQgY2FsbCB0aGUgZnVuY3Rpb24gc2VuZFJlcXVlc3Qgd2l0aCBlYWNoIHZhbHVlXHJcbi8vICAgICBmcm9tIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBvYmplY3Qge25hbWU6ICdBbm4nLCBhZ2U6IDE2fS5cclxuLy8gICAgIFByb2Nlc3MgdGhlIHJldXNsdCBvZiB0aGUgZnVuY3Rpb24gZjhcclxuXHJcbi8vIGNvbnN0IHVybHMgPSBbJ2h0dHA6Ly9hJywgJ2h0dHA6Ly9iJ107XHJcbi8vIGNvbnN0IGRhdGEgPSB7XHJcbi8vICAgJ2h0dHA6Ly9hJzogeyBuYW1lOiAnQW5uJyB9LFxyXG4vLyAgICdodHRwOi8vYic6IHsgYWdlOiAxNiB9LFxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KHVybCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdzZW5kUmVxdWVzdCBpcyBjYWxsZWQnKTtcclxuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiBzZXRUaW1lb3V0KHJlcywgMjAwMCwgZGF0YVt1cmxdKSk7XHJcbi8vIH1cclxuLy9cclxuLy8gYXN5bmMgZnVuY3Rpb24gZjgodXJscykge1xyXG4vLyAgIHJldHVybiBQcm9taXNlLmFsbCh1cmxzLm1hcCh1cmwgPT4gc2VuZFJlcXVlc3QodXJsKSkpLnRoZW4oZGF0YSA9PiBkYXRhKTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmOCh1cmxzKS50aGVuKGNvbnNvbGUubG9nKTtcclxuIiwiY29uc29sZS5sb2coJ1RvcGljOiBJdGVyYXRvcnMnKTtcclxuLy8gVGFzayAxXHJcbi8vIFJVOiDQndCw0L/QuNGB0LDRgtGMINGE0YPQvdC60YbQuNGOIGtleVZhbHVlSXRlcmFibGUodGFyZ2V0KSxcclxuLy8gICAgINC60L7RgtC+0YDQsNGPINC90LAg0LLRhdC+0LQg0L/QvtC70YPRh9Cw0LXRgiDQvtCx0YrQtdC60YIg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0LjRgtC10YDQuNGA0YPQtdC80YvQuSDQvtCx0YrQtdC60YIuXHJcbi8vICAgICDQmNGC0LXRgNC40YDRg9C10LzRi9C5INC+0LHRitC10LrRgiDQv9C+0LfQstC+0LvRj9C10YIg0L/QvtC70YPRh9C40YLRjCDQv9Cw0YDRiyDQutC70Y7Rhy/Qt9C90LDRh9C10L3QuNC1LlxyXG4vLyAgICAg0JLRi9Cy0LXQtNC40YLQtSDQsiDQutC+0L3RgdC+0LvRjCDRhtCy0LXRgtCwINC40Lcg0L7QsdGK0LXQutGC0LAgY29sb3JzLlxyXG4vLyBFTjogQ3JlYXRlIGEgZnVuY3Rpb24ga2V5VmFsdWVJdGVyYWJsZSh0YXJnZXQpXHJcbi8vICAgICB3aGljaCB0YWtlcyBhbiBvYmplY3RzIGFuZCByZXR1cm5zIGl0ZXJhYmxlIG9iamVjdC5cclxuLy8gICAgIEl0ZXJhYmxlIG9iamVjdCBhbGxvd3MgeW91IHRvIGdldCBrZXkvdmFsdWUgcGFpcnMuXHJcbi8vICAgICBEaXNwbGF5IGluIGEgY29uc29sZSBhbGwgY29sb3JzIGZyb20gdGhlIG9iamVjdCBjb2xvcnMuXHJcbi8vIGNvbnN0IGNvbG9ycyA9IHtcclxuLy8gICBncmVlbjogJyMwZTAnLFxyXG4vLyAgIG9yYW5nZTogJyNmNTAnLFxyXG4vLyAgIHBpbms6ICcjZTA3J1xyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBrZXlWYWx1ZUl0ZXJhYmxlID0gKHRhcmdldCkgPT4ge1xyXG4vLyAgIHRhcmdldFtTeW1ib2wuaXRlcmF0b3JdID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XHJcbi8vXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBuZXh0KCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGRvbmUgPSBrZXlzLmxlbmd0aCA9PT0gMDtcclxuLy8gICAgICAgICBjb25zdCBrZXkgPSBrZXlzLnNoaWZ0KCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgIHZhbHVlOiBba2V5LCB0YXJnZXRba2V5XV0sXHJcbi8vICAgICAgICAgICBkb25lLFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBpdENvbG9ycyA9IGtleVZhbHVlSXRlcmFibGUoY29sb3JzKTtcclxuLy8gZm9yIChjb25zdCBbLCBjb2xvcl0gb2YgaXRDb2xvcnMpIHtcclxuLy8gICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBUYXNrIDJcclxuLy8gUlU6INCSINC60L7Qu9C70LXQutGG0LjQuCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQuNC80LXQvdCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LCDQutC+0YLQvtGA0YvQtSDQv9GA0LjRgdC+0LXQtNC40L3QuNC70LjRgdGMINC6INC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDQs9GA0YPQv9C/0LUg0YLQtdC70LXQs9GA0LDQvNC8LlxyXG4vLyAgICAg0JHRg9C70LXQstGL0Lkg0YTQu9Cw0LMg0YPQutCw0LfRi9Cy0LDQtdGCLCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7QvCDQs9GA0YPQv9C/0YsuXHJcbi8vICAgICDQodC+0LfQtNCw0LnRgtC1INC40YLQtdGA0LDRgtC+0YAsINC60L7RgtC+0YDRi9C5INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGC0L7Qu9GM0LrQviDQuNC80LXQvdCwINCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7Qsi5cclxuLy8gRU46IFRoZSBmb2xsb3dpbmcgY29sbGVjdGlvbiBzdG9yZSBhbGwgdGhlIG5hbWVzIG9mIHRoZSB1c2VyIHRoYXQgaGF2ZSBqb2luZWQgYSBwYXJ0aWN1bGFyIHRlbGVncmFtIGdyb3VwLlxyXG4vLyAgICAgVGhlIGJvb2xlYW4gZmxhZyBpbmRpY2F0ZXMgd2hldGhlciBhIHVzZXIgaXMgYW4gYWRtaW5pc3RyYXRvciBvZiB0aGUgZ3JvdXAuXHJcbi8vICAgICDQoXJlYXRlcmVhdGUgYW4gaXRlcmF0b3IgdGhhdCByZXR1cm5zIG9ubHkgdGhlIGFkbWluaXN0cmF0b3JzJyBuYW1lcy5cclxuXHJcbi8vIGNvbnN0IHVzZXJzID0ge1xyXG4vLyAgIGFubmE6IGZhbHNlLFxyXG4vLyAgIGJvcmlzOiB0cnVlLCAvLyBhZG1pblxyXG4vLyAgIGNocmlzdGluYTogZmFsc2UsXHJcbi8vICAgZGF2ZTogZmFsc2UsXHJcbi8vICAgZWxlbmE6IGZhbHNlLFxyXG4vLyAgIGZlbGl4OiB0cnVlLCAgLy8gYWRtaW5cclxuLy8gfTtcclxuLy9cclxuLy8gdXNlcnNbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXModGhpcykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcbi8vXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIG5leHQoKSB7XHJcbi8vICAgICAgIGNvbnN0IGRvbmUgPSBlbnRyaWVzLmxlbmd0aCA9PT0gMDtcclxuLy8gICAgICAgY29uc3QgZW50cnkgPSBlbnRyaWVzLnNoaWZ0KCk7XHJcbi8vXHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdmFsdWU6IGRvbmUgPyB1bmRlZmluZWQgOiBlbnRyeVswXSxcclxuLy8gICAgICAgICBkb25lLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBbLi4udXNlcnNdLmZvckVhY2gobmFtZSA9PiBjb25zb2xlLmxvZyhuYW1lKSk7IC8vIGJvcmlzLCBmZWxpeFxyXG5cclxuXHJcbi8vIFRhc2sgM1xyXG4vLyBSVTog0J3QsNC/0LjRgdCw0YLRjCDRhNGD0L3QutGG0LjRjiB0YWtlKHNlcXVlbmNlLCBhbW91bnQpLCDQutC+0YLQvtGA0LDRjyDQuNC3INCx0LXRgdC60L7QvdC10YfQvdC+0LPQviDQuNGC0LXRgNC40YDRg9C10LzQvtCz0L4g0L7QsdGK0LXQutGC0LAgcmFuZG9tXHJcbi8vICAgICDQstC10YDQvdC10YIg0YPQutCw0LfQsNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRjdC70LXQvNC10L3RgtC+0LIuXHJcbi8vIEVOOiBDcmVhdGUgYSBmdW5jdGlvbiB0YWtlKHNlcXVlbmNlLCBhbW91bnQpLCB3aGljaCByZXR1cm5zIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBudW1iZXJzXHJcbi8vICAgICBmcm9tIGl0ZXJhYmxlIG9iamVjdCByYW5kb21cclxuXHJcbi8vIGNvbnN0IHJhbmRvbSA9IHtcclxuLy8gICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gKHtcclxuLy8gICAgIG5leHQ6ICgpID0+ICh7XHJcbi8vICAgICAgIHZhbHVlOiBNYXRoLnJhbmRvbSgpXHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IHRha2UgPSAoc2VxdWVuY2UsIGFtb3VudCkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuLy8gICAgICAgY29uc3QgaXRlcmF0b3IgPSBzZXF1ZW5jZVtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbi8vXHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgbmV4dCgpIHtcclxuLy8gICAgICAgICAgIGlmIChhbW91bnQtLSA8IDEpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICBkb25lOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIHJldHVybiBpdGVyYXRvci5uZXh0KCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBhID0gWy4uLnRha2UocmFuZG9tLCAzKV07XHJcbi8vIGNvbnNvbGUubG9nKGEpO1xyXG5cclxuXHJcbi8vIFRhc2sgNFxyXG4vLyBSVTog0J3QsNC/0LjRgdCw0YLRjCDQuNGC0LXRgNC40YDRg9C10LzRi9C5INC40YLQtdGA0LDRgtC+0YAsINC60L7RgtC+0YDRi9C5INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGH0LjRgdC70LAg0KTQuNCx0L7QvdCw0YfQuFxyXG4vLyAgICAg0KDQtdCw0LvQuNC30L7QstCw0YLRjCDQvNC10YLQvtC0IHJldHVybiDQtNC70Y8g0L7RgdGC0LDQvdC+0LLQutC4INC40YLQtdGA0LDRgtC+0YDQsCDRgSDQv9C+0LzQvtGJ0YzRjiBmb3Itb2YgKyBicmVha1xyXG4vLyBFTjogQ3JlYXRlIGl0ZXJhYmxlIGl0ZXJhdG9yLCB3aGljaCBwcm9kdWNlcyBGaWJvbmFjY2kgbnVtYmVyc1xyXG4vLyAgICAgSW1wbGVtZW50IG1ldGhvZCByZXR1cm4sIHdoaWNoIGFsbG93cyB5b3UgdG8gc3RvcCBpdGVyYXRvciB1c2luZyBmb3Itb2YgKyBicmVha1xyXG5cclxuLy8gY29uc3QgZmliSXRlcmF0b3IgPSB7XHJcbi8vICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGRvbmUgPSBmYWxzZTtcclxuLy8gICAgIGxldCBwcmV2VmFsdWUgPSBbLi4uQXJyYXkoMikua2V5cygpXTtcclxuLy9cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIG5leHQ6ICgpID0+IHtcclxuLy8gICAgICAgICBjb25zdCB2YWx1ZSA9IHByZXZWYWx1ZVswXSArIHByZXZWYWx1ZVsxXTtcclxuLy9cclxuLy8gICAgICAgICBwcmV2VmFsdWUgPSBbcHJldlZhbHVlWzFdLCB2YWx1ZV07XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHsgdmFsdWUsIGRvbmUgfTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBGaWIgPSB7XHJcbi8vICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGZpYkl0ZXIgPSBmaWJJdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbi8vXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBuZXh0OiBmaWJJdGVyLm5leHQsXHJcbi8vICAgICAgIHJldHVybjogKCkgPT4gKHsgZG9uZTogdHJ1ZSB9KSxcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gZm9yIChsZXQgdiBvZiBGaWIpIHtcclxuLy8gICBjb25zb2xlLmxvZyh2KTtcclxuLy8gICBpZiAodiA+IDUwKSBicmVhaztcclxuLy8gfVxyXG5cclxuXHJcbi8vIFRhc2sgNVxyXG4vLyBSVTog0J3QsNC/0LjRgdCw0YLRjCDQuNGC0LXRgNCw0YLQvtGAINC00LvRjyDRh9C40YHQtdC7LCDQutC+0YLQvtGA0YvQuSDQv9C+0LfQstC+0LvQuNGCINC/0L7Qu9GD0YfQsNGC0Ywg0LzQsNGB0YHQuNCy0Ysg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdGL0YUg0YbQtdC70YvRhSDRjdC70LXQvNC10L3RgtC+0LIuXHJcbi8vICAgICDQndCw0L/RgNC40LzQtdGALCBbLi4uLTNdID0+IFswLCAtMSwgLTIsIC0zXSwgWy4uLjNdID0+IFswLCAxLCAyLCAzXVxyXG4vLyBFTjogQ3JlYXRlIGl0ZXJhdG9yIGZvciBudW1iZXJzLCB3aGljaCBhbGxvd3MgeW91IHRvIGdldCBhcnJheXMgb2Ygc2VxdWVudGlhbCBpbnRlZ2Vycy5cclxuLy8gICAgIEV4YW1wbGUsIFsuLi4tM10gPT4gWzAsIC0xLCAtMiwgLTNdLCBbLi4uM10gPT4gWzAsIDEsIDIsIDNdXHJcblxyXG4vLyBOdW1iZXIucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgY29uc3QgbnVtYmVyID0gdGhpcy52YWx1ZU9mKCk7XHJcbi8vICAgY29uc3QgaXNOZWdhdGl2ZSA9IC0xID09PSBNYXRoLnNpZ24obnVtYmVyKTtcclxuLy8gICBjb25zdCBsaW1pdCA9IE1hdGguYWJzKG51bWJlcik7XHJcbi8vICAgbGV0IGluZGV4ID0gMDtcclxuLy9cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgbmV4dDogKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBkb25lID0gbGltaXQgPCBpbmRleDtcclxuLy8gICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGluZGV4O1xyXG4vL1xyXG4vLyAgICAgICBpZiAoaXNOZWdhdGl2ZSAmJiBjdXJyZW50VmFsdWUgIT09IDApIHtcclxuLy8gICAgICAgICBjdXJyZW50VmFsdWUgPSAtY3VycmVudFZhbHVlO1xyXG4vLyAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgIGluZGV4ICs9IDE7XHJcbi8vXHJcbi8vICAgICAgIHJldHVybiB7IHZhbHVlOiBjdXJyZW50VmFsdWUsIGRvbmUgfTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc29sZS5sb2coWy4uLi01XSk7XHJcbi8vIGNvbnNvbGUubG9nKFsuLi41XSk7XHJcbiIsImNvbnNvbGUubG9nKCdUb3BpYzogU3luYy1HZW5lcmF0b3JzJyk7XHJcblxyXG4vLyBUYXNrIDEuXHJcbi8vIFJVOiDQndCw0LjRiNC40YLQtSDRhNGD0L3QutGG0LjRji3Qs9C10L3QtdGA0LDRgtC+0YAgZ2VuZXJhdGVTZXF1ZW5jZSwg0LrQvtGC0L7RgNCw0Y8g0LPQtdC90LXRgNC40YDRg9C10YIg0YfQuNGB0LvQsCDQsiDQtNC40LDQv9Cw0LfQvtC90LUg0L7RgiBzdGFydCDQtNC+IGVuZC5cclxuLy8gRU46IENyZWF0ZSBmdW5jdGlvbi1nZW5lcmF0b3IgZ2VuZXJhdGVTZXF1ZW5jZSwgd2hpY2ggZ2VuZXJhdGVzIGFuZCByZXR1cm5zIG51bWJlcnMgZnJvbSBzdGFydCB0byBlbmQuXHJcblxyXG4vLyBmdW5jdGlvbiogZ2VuZXJhdGVTZXF1ZW5jZShzdGFydCwgZW5kKSB7XHJcbi8vICAgd2hpbGUgKHN0YXJ0IDw9IGVuZCl7XHJcbi8vICAgICB5aWVsZCBzdGFydCsrO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zb2xlLmxvZyguLi5nZW5lcmF0ZVNlcXVlbmNlKDEsIDEwKSk7XHJcblxyXG4vLyBUYXNrIDIuIExvbmcgU2VxdWVuY2VzXHJcbi8vIFJVOiDQodC+0LfQtNCw0YLRjCDQvNCw0YHRgdC40LIg0LjQtyDRh9C40YHQtdC7INC+0YIgMSDQtNC+IDEwMDAuXHJcbi8vICAgICDQoNC10LDQu9C40LfQvtCy0LDRgtGMINGE0YPQvdC60YbQuNGOLdCz0LXQvdC10YDQsNGC0L7RgCDQtNC70Y8g0YTQvtGA0LzQuNGA0L7QstCw0L3QuNGPINCy0YHQtdGFINC/0LDRgCDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LAuXHJcbi8vICAgICDQk9C10L3QtdGA0LDRgtC+0YAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QtNC90YMg0L/QsNGA0YMg0LfQsCDQvtC00LjQvSDRgNCw0LcuXHJcbi8vICAgICDQoNC10LfRg9C70YzRgtCw0YIgWzEsIDFdLCBbMSwgMl0sIC4uLiwgWzIsIDFdLCBbMiwgMl0sIC4uLiwgWzEwMDAsIDEwMDBdXHJcbi8vIEVOOiBDcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBmcm9tIDEgdG8gMTAwMC5cclxuLy8gICAgIEltcGxlbWVudCBhIGdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgYWxsIHBhaXJzIGZyb20gdGhpcyBhcnJheS5cclxuLy8gICAgIFJlc3VsdCBbMSwgMV0sIFsxLCAyXSwgLi4uLCBbMiwgMV0sIFsyLCAyXSwgLi4uLCBbMTAwMCwgMTAwMF1cclxuXHJcbi8vIGNvbnN0IG51bWJlcnMgPSBBcnJheS5mcm9tKEFycmF5KDEwMDApLmtleXMoKSk7XHJcbi8vXHJcbi8vIGZ1bmN0aW9uKiBnZW5lcmF0ZVBhaXIoKSB7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuLy8gICAgICAgeWllbGQgW251bWJlcnNbaV0sIG51bWJlcnNbal1dXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGl0R2VuZXJhdGVQYWlyID0gZ2VuZXJhdGVQYWlyKCk7XHJcbi8vXHJcbi8vIGNvbnNvbGUubG9nKGl0R2VuZXJhdGVQYWlyLm5leHQoKSk7XHJcbi8vIGNvbnNvbGUubG9nKGl0R2VuZXJhdGVQYWlyLm5leHQoKSk7XHJcbi8vIGNvbnNvbGUubG9nKGl0R2VuZXJhdGVQYWlyLm5leHQoKSk7XHJcblxyXG4vLyBUYXNrIDMuXHJcbi8vIFJVOiDQoNC10LDQu9C40LfRg9C50YLQtSDRhNGD0L3QutGG0LjRjiDQs9C10L3QtdGA0LDRhtC40Lgg0YfQuNGB0LXQuyDQpNC40LHQvtC90LDRh9GH0Lgg0LTQviDQsdC10YHQutC+0L3QtdGH0L3QvtGB0YLQuFxyXG4vLyBFTjogSW1wbGVtZW50IHRoZSBpbmZpbml0ZSBmdW5jdGlvbi1nZW5lcmF0b3Igb2YgZ2VuZXJhdGluZyBGaWJvbmFjY2kgbnVtYmVyc1xyXG5cclxuLy8gZnVuY3Rpb24qIGdlbmVyYXRlRmliKCkge1xyXG4vLyAgIGxldCBmaXJzdE51bSA9IDA7XHJcbi8vICAgbGV0IHNlY29uZE51bSA9IDE7XHJcbi8vXHJcbi8vICAgd2hpbGUgKHRydWUpe1xyXG4vLyAgICAgY29uc3QgbmV4dE51bSA9IHNlY29uZE51bSArIGZpcnN0TnVtO1xyXG4vLyAgICAgZmlyc3ROdW0gPSBzZWNvbmROdW07XHJcbi8vICAgICBzZWNvbmROdW0gPSBuZXh0TnVtO1xyXG4vL1xyXG4vLyAgICAgeWllbGQgbmV4dE51bTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgaXRGaWIgPSBnZW5lcmF0ZUZpYigpO1xyXG4vL1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG4vLyBjb25zb2xlLmxvZyhpdEZpYi5uZXh0KCkudmFsdWUpO1xyXG5cclxuLy8gVGFzayA0LiB5aWVsZCpcclxuLy8gUlU6INCg0LXQsNC70LjQt9GD0LnRgtC1INGE0YPQvdC60YbQuNGOLdCz0LXQvdC10YDQsNGC0L7RgCwg0LrQvtGC0L7RgNCw0Y8g0LHRg9C00LXRgiDQs9C10L3QtdGA0LjRgNC+0LLQsNGC0Ywg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdC+0YHRgtGMXHJcbi8vICAgICDRgdC40LzQstC+0LvQvtCyINC+0YIgMCDQtNC+IDksINC30LDRgtC10Lwg0L7RgiBhINC00L4geiwg0LfQsNGC0LXQvCDQvtGCIEEg0LTQviBaLiDQktC+0YHQv9C+0LvRjNC30YPQudGC0LXRgdGMINGE0YPQvdC60YbQuNC10Lkg0LPQtdC90LXRgNCw0YLQvtGA0L7QvFxyXG4vLyAgICAgZ2VuZXJhdGVTZXF1ZW5jZSwg0YDQtdCw0LvQuNC30L7QstCw0L3QvtC5INCy0YvRiNC1LCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpLCDQuCDQtNC40LDQv9Cw0LfQvtC90L7QvCDRh9C40YHQtdC7INC+0YIgNDgg0LTQviA1NyxcclxuLy8gICAgINC+0YIgNjUg0LTQviA5MCDQuCDQvtGCIDk3INC00L4gMTIyXHJcbi8vIEVOOiBDcmVhdGUgYSBmdW5jdGlvbi1nZW5lcmF0b3IgdGhhdCB3aWxsIGdlbmVyYXRlIGEgc2VxdWVuY2VcclxuLy8gICAgIGNoYXJhY3RlcnMgZnJvbSAwIHRvIDksIHRoZW4gZnJvbSBhIHRvIHosIHRoZW4gZnJvbSBBIHRvIFouXHJcbi8vICAgICBVc2UgdGhlIGZ1bmN0aW9uLWdlbmVyYXRvciBnZW5lcmF0ZVNlcXVlbmNlIGltcGxlbWVudGVkIGFib3ZlLFxyXG4vLyAgICAgU3RyaW5nLmZyb21DaGFyQ29kZSAoY29kZSksIGFuZCBhIHJhbmdlIG9mIG51bWJlcnMgZnJvbSA0OCB0byA1NyxcclxuLy8gICAgIDY1IHRvIDkwIGFuZCA5NyB0byAxMjJcclxuXHJcbi8vIGZ1bmN0aW9uKiBnZW5lcmF0ZVNlcXVlbmNlKHN0YXJ0LCBlbmQpIHtcclxuLy8gICB3aGlsZSAoc3RhcnQgPD0gZW5kKXtcclxuLy8gICAgIHlpZWxkIHN0YXJ0Kys7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uKiBvdXRlckdlbmVyYXRvcigpIHtcclxuLy8gICB5aWVsZCogZ2VuZXJhdGVTZXF1ZW5jZSg0OCwgNTcpO1xyXG4vLyAgIHlpZWxkKiBnZW5lcmF0ZVNlcXVlbmNlKDY1LCA5MCk7XHJcbi8vICAgeWllbGQqIGdlbmVyYXRlU2VxdWVuY2UoOTcsIDEyMik7XHJcbi8vIH1cclxuLy9cclxuLy8gbGV0IHMgPSAnJztcclxuLy8gZm9yIChsZXQgY29kZSBvZiBvdXRlckdlbmVyYXRvcigpKSB7XHJcbi8vICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnNvbGUubG9nKHMpO1xyXG5cclxuLy8gVGFzayA1LiBTeW5jIFBpcGluZ1xyXG4vLyBSVTog0KHQvtC30LTQsNC50YLQtS3RhNGD0L3QutGG0LjRjiDQs9C10L3QtdGA0LDRgtC+0YAgbXVsdGlwbGVCeVR3bywg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC80LDRgdGB0LjQsiDRh9C40YHQtdC7LFxyXG4vLyAgICAg0YPQvNC90L7QttCw0LXRgiDQutCw0LbQtNC+0LUg0YfQuNGB0LvQviDQvdCwIDIg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0LjRhSDQv9C+INC+0LTQvdC+0LzRg1xyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtS3RhNGD0L3QutGG0LjRjiDQs9C10L3QtdGA0LDRgtC+0YAgbWludXNPbmUsINC60L7RgtC+0YDQsNGPINC/0YDQuNC90LjQvNCw0LXRgiDQvNCw0YHRgdC40LIg0YfQuNGB0LXQuyxcclxuLy8gICAgINC+0YLQvdC40LzQsNC10YIgMSDQuCDQstC+0LfQstGA0LDRidCw0LXRgiDQuNGFINC/0L4g0L7QtNC90L7QvNGDXHJcbi8vICAgICDQodC+0LfQtNCw0LnRgtC1LdGE0YPQvdC60YbQuNGOINCz0LXQvdC10YDQsNGC0L7RgCBpc011bHRpcGxlT2ZUaHJlZSwg0LrQvtGC0L7RgNCw0Y8g0L/RgNC40L3QuNC80LDQtdGCINC80LDRgdGB0LjQsiDRh9C40YHQtdC7LFxyXG4vLyAgICAg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YLQvtC70YzQutC+INGC0LUsINC60L7RgtC+0YDRi9C1INC00LXQu9GP0YLRgdGPINC90LAgMyDQsdC10Lcg0L7RgdGC0LDRgtC60LAg0L/QviDQvtC00L3QvtC80YNcclxuLy8gICAgINCe0LHRitGP0LLQuNGC0LUg0LzQsNGB0YHQuNCyINC+0YIgMCDQtNC+IDlcclxuLy8gICAgINCS0YvQt9C+0LLQuNGC0LUg0L/QtdGA0LLRg9GOINGE0YPQvdC60YbQuNGOINC4INC/0LXRgNC10LTQsNC50YLQtSDQtdC5INC80LDRgdGB0LjQsiwg0YDQtdC30YPQu9GM0YLQsNGCINGN0YLQvtC5INGE0YPQvdC60YbQuNC4INC/0LXRgNC10LTQsNC50YLQtSDQstGC0L7RgNC+0LlcclxuLy8gICAgINCwINC30LDRgtC10Lwg0YDQtdC30YPQu9GM0YLQsNGCINCy0YLQvtGA0L7QuSDQv9C10YDQtdC00LDQudGC0LXRgtGA0LXRgtC10LkuXHJcbi8vICAgICDQn9GA0LjQvNC10L3QuNGC0LUg0YHQv9GA0LXQtCDQvtC/0LXRgNCw0YLQvtGAINC6INGA0LXQt9GD0LvRjNCw0YLRgyDRgtGA0LXRgtC10Lkg0YTRg9C90LrRhtC40Lgg0Lgg0YHQvtC30LTQsNC50YLQtSDQvNCw0YHRgdC40LIg0YLQtdGFINGH0LjRgdC10LssXHJcbi8vICAgICDQutC+0YLQvtGA0YvQtSDQvtGB0YLQsNC90YPRgtGB0Y9cclxuLy8gRU46IENyZWF0ZSBhIGZ1bmN0aW9uLWdlbmVyYXRvciBtdWx0aXBsZUJ5VHdvIHRoYXQgdGFrZXMgYW4gYXJyYXkgb2YgbnVtYmVycyxcclxuLy8gICAgIG11bHRpcGxpZXMgZWFjaCBudW1iZXIgYnkgMiBhbmQgcmV0dXJucyB0aGVtIG9uZSBhdCBhIHRpbWVcclxuLy8gICAgIENyZWF0ZSBhIGZ1bmN0aW9uLWdlbmVyYXRvciBtaW51c09uZSB0aGF0IHRha2VzIGFuIGFycmF5IG9mIG51bWJlcnMsXHJcbi8vICAgICB0YWtlcyAxIGFuZCByZXR1cm5zIHRoZW0gb25lIGF0IGEgdGltZVxyXG4vLyAgICAgQ3JlYXRlIGEgZnVuY3Rpb24tZ2VuZXJhdG9yIGlzTXVsdGlwbGVPZlRocmVlIHRoYXQgdGFrZXMgYW4gYXJyYXkgb2YgbnVtYmVycyxcclxuLy8gICAgIGFuZCByZXR1cm5zIG9ubHkgdGhvc2UgdGhhdCBhcmUgZGl2aWRlZCBieSAzIHdpdGhvdXQgcmVtYWluIHBhcnQgb25lIGF0IGEgdGltZVxyXG4vLyAgICAgRGVjbGFyZSBhbiBhcnJheSBmcm9tIDAgdG8gOVxyXG4vLyAgICAgQ2FsbCB0aGUgZmlyc3QgZnVuY3Rpb24gYW5kIHBhc3MgYW4gYXJyYXkgdG8gaXQsIHBhc3MgdGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uXHJcbi8vICAgICB0byB0aGUgc2Vjb25kIGFuZCB0aGVuIHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZCBwYXNzIHRvIHRoZSB0aGlyZCBmdW5jdGlvbi5cclxuLy8gICAgIEFwcGx5IHRoZSBzcHJlYWQgb3BlcmF0b3IgdG8gdGhlIHJlc3VsdCBvZiB0aGUgdGhpcmQgZnVuY3Rpb24gYW5kIGNyZWF0ZSBhbiBhcnJheVxyXG4vLyAgICAgb2YgdGhvc2UgbnVtYmVycyB3aGljaCB3aWxsIHJlbWFpblxyXG5cclxuLy8gZnVuY3Rpb24qIG11bHRpcGxlQnlUd28obnVtYmVycykge1xyXG4vLyAgIGZvciAoY29uc3QgbnVtYmVyIG9mIG51bWJlcnMpIHtcclxuLy8gICAgIHlpZWxkIG51bWJlciAqIDI7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uKiBtaW51c09uZShudW1iZXJzKSB7XHJcbi8vICAgZm9yIChjb25zdCBudW1iZXIgb2YgbnVtYmVycykge1xyXG4vLyAgICAgeWllbGQgbnVtYmVyIC0gMTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24qIGlzTXVsdGlwbGVPZlRocmVlKG51bWJlcnMpIHtcclxuLy8gICBmb3IgKGNvbnN0IG51bWJlciBvZiBudW1iZXJzKSB7XHJcbi8vICAgICBpZiAobnVtYmVyICUgMyA9PT0gMCkge1xyXG4vLyAgICAgICB5aWVsZCBudW1iZXI7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGFyck9mTnVtID0gQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKTtcclxuLy9cclxuLy8gY29uc29sZS5sb2coWy4uLmlzTXVsdGlwbGVPZlRocmVlKG1pbnVzT25lKG11bHRpcGxlQnlUd28oYXJyT2ZOdW0pKSldKTtcclxuXHJcbi8vIFRhc2sgNi4gQ29tbXVuaWNhdGlvbiB3aXRoIEluZmluaXRlIEdlbmVyYXRvclxyXG4vLyBSVTog0KDQtdCw0LvQuNC30YPQudGC0LUg0LHQtdGB0LrQvtC90LXRh9C90YPRjiDRhNGD0L3QutGG0LjRji3Qs9C10L3QtdGA0LDRgtC+0YAgY2FsY3VsYXRpb24sINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LLRi9Cy0L7QtNC40YLRjCDQstGL0YDQsNC20LXQvdC40Y9cclxuLy8gICAgIGEgKyBiID0gPywg0LPQtNC1IGEsIGIg0LHRg9C00LXRgiDRgdC70YPRh9Cw0LnQvdC+INCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQuCDQt9Cw0L/RgNCw0YjQuNCy0LDRgtGMINGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQvtGC0LLQtdGCLlxyXG4vLyAgICAg0JXRgdC70Lgg0L7RgtCy0LXRgiDQstC10YDQvdGL0LksINGC0L4g0L/QuNGB0LDRgtGMINCyINC60L7QvdGB0L7Qu9GMIHRydWUsINC40L3QsNGH0LUgZmFsc2UuXHJcbi8vICAgICDQl9Cw0L/Rg9GB0YLQuNGC0LUg0LrQvtC0INCyINC60L7QvdGB0L7Qu9C4INCx0YDQsNGD0LfQtdGA0LBcclxuLy8gRU46IEltcGxlbWVudCBhbiBpbmZpbml0ZSBjYWxjdWxhdGlvbiBnZW5lcmF0b3ItZnVuY3Rpb24gdGhhdCB3aWxsIG91dHB1dCBleHByZXNzaW9uc1xyXG4vLyAgICAgYSArIGIgPSA/LCB3aGVyZSBhLCBiIHdpbGwgYmUgcmFuZG9tbHkgZ2VuZXJhdGVkIGFuZCByZXF1ZXN0IGEgcmVzcG9uc2UgZnJvbSB0aGUgdXNlci5cclxuLy8gICAgIElmIHRoZSBhbnN3ZXIgaXMgY29ycmVjdCwgdGhlbiB3cml0ZSB0cnVlIHRvIHRoZSBjb25zb2xlLCBvdGhlcndpc2UgZmFsc2UuXHJcblxyXG4vLyBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAobGltaXQpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpbWl0KTtcclxuLy9cclxuLy8gZnVuY3Rpb24qIGNhbGN1bGF0aW9uKCkge1xyXG4vLyAgIGNvbnN0IGEgPSBnZXRSYW5kb21OdW1iZXIoMTApO1xyXG4vLyAgIGNvbnN0IGIgPSBnZXRSYW5kb21OdW1iZXIoMTApO1xyXG4vL1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICB5aWVsZCBgJHthfSArICR7Yn0gPSA/YDtcclxuLy8gICAgIGxldCBhbnN3ZXIgPSBwcm9tcHQoJ9CS0LDRiCDQvtGC0LLQtdGCPycsJzAnKTtcclxuLy8gICAgIHlpZWxkIGFuc3dlcjtcclxuLy9cclxuLy8gICAgIChhICsgYikgPT09IE51bWJlcihhbnN3ZXIpID8gY29uc29sZS5sb2codHJ1ZSkgOiBjb25zb2xlLmxvZyhmYWxzZSk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGxldCBpdENhbGN1bGF0aW9uID0gY2FsY3VsYXRpb24oKTtcclxuLy8gY29uc29sZS5sb2coaXRDYWxjdWxhdGlvbi5uZXh0KCkpO1xyXG4vLyAvLyBpdENhbGN1bGF0aW9uLnRocm93KCdFcnJvcicpO1xyXG4vLyBjb25zb2xlLmxvZyhpdENhbGN1bGF0aW9uLm5leHQoKSk7XHJcbi8vIGNvbnNvbGUubG9nKGl0Q2FsY3VsYXRpb24ubmV4dCgpKTtcclxuXHJcbi8vIFRhc2sgNy4gdGhyb3cgbWV0aG9kXHJcbi8vIFJVOiDQnNC+0LTQuNGE0LjRhtC40YDRg9C50YLQtSDQutC+0LQg0L/RgNC10LTRi9C00YPRidC10LPQviDQt9Cw0LTQsNC90LjRjyDRgtCw0LosINGH0YLQvtCx0Ysg0L/RgNC4INCy0YvQt9C+0LLQtSBpdC50aHJvdygpINCz0LXQvdC10YDQsNGC0L7RgFxyXG4vLyAgICAg0L3QtSDQv9GA0LXQutGA0LDRidCw0Lsg0YHQstC+0Y4g0YDQsNCx0L7RgtGDXHJcbi8vIEVOOiBNb2RpZnkgdGhlIGNvZGUgb2YgdGhlIHByZXZpb3VzIHRhc2sgc28gdGhhdCB3aGVuIGl0LnRocm93KCkgaXMgY2FsbGVkLCB0aGUgZ2VuZXJhdG9yXHJcbi8vICAgICBkaWQgbm90IHN0b3AgaXRzIHdvcmtcclxuXHJcbi8vIFRhc2sgOC5cclxuLy8gUlU6INCSINC60L7Qu9C70LXQutGG0LjQuCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQuNC80LXQvdCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LCDQutC+0YLQvtGA0YvQtSDQv9GA0LjRgdC+0LXQtNC40L3QuNC70LjRgdGMXHJcbi8vICAgICDQuiDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0LPRgNGD0L/Qv9C1INGC0LXQu9C10LPRgNCw0LzQvC5cclxuLy8gICAgINCR0YPQu9C10LLRi9C5INGE0LvQsNCzINGD0LrQsNC30YvQstCw0LXRgiwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0Lwg0LPRgNGD0L/Qv9GLLlxyXG4vLyAgICAg0KHQvtC30LTQsNC50YLQtSDQs9C10L3QtdGA0LDRgtC+0YAsINC60L7RgtC+0YDRi9C5INC90LAg0LLRhdC+0LQg0L/QvtC70YPRh9Cw0LXRgiDRjdGC0L7RgiDQvtCx0YrQtdC60YIg0LhcclxuLy8gICAgINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGC0L7Qu9GM0LrQviDQuNC80LXQvdCwINCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0L7QsiDQv9C+INC+0LTQvdC+0LzRgyDQt9CwINCy0YvQt9C+0LIuXHJcbi8vIEVOOiBUaGUgY29sbGVjdGlvbiBzdG9yZXMgYWxsIHRoZSB1c2VybmFtZXMgdGhhdCBqb2luZWRcclxuLy8gICAgIHRvIGEgc3BlY2lmaWMgdGVsZWdyYW0gZ3JvdXAuXHJcbi8vICAgICBBIGJvb2xlYW4gZmxhZyBpbmRpY2F0ZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIGdyb3VwIGFkbWluaXN0cmF0b3IuXHJcbi8vICAgICBDcmVhdGUgYSBnZW5lcmF0b3IgdGhhdCByZWNlaXZlcyB0aGlzIG9iamVjdCBhcyBpbnB1dFxyXG4vLyAgICAgYW5kIHJldHVybnMgb25seSBhZG1pbiBuYW1lcy5cclxuXHJcbi8vIGNvbnN0IHVzZXJzID0ge1xyXG4vLyAgIGFubmE6IGZhbHNlLFxyXG4vLyAgIGJvcmlzOiB0cnVlLCAvLyBhZG1pblxyXG4vLyAgIGNocmlzdGluYTogZmFsc2UsXHJcbi8vICAgZGF2ZTogZmFsc2UsXHJcbi8vICAgZWxlbmE6IGZhbHNlLFxyXG4vLyAgIGZlbGl4OiB0cnVlLCAgLy8gYWRtaW5cclxuLy8gfTtcclxuLy9cclxuLy8gZnVuY3Rpb24qIGFkbWluR2VuZXJhdG9yKHVzZXJzKSB7XHJcbi8vICAgY29uc3QgYWRtaW5zID0gT2JqZWN0LmtleXModXNlcnMpLmZpbHRlcigoa2V5KSA9PiB1c2Vyc1trZXldKTtcclxuLy9cclxuLy8gICBmb3IgKGNvbnN0IGFkbWluIG9mIGFkbWlucykge1xyXG4vLyAgICAgeWllbGQgYWRtaW47XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnNvbGUubG9nKC4uLmFkbWluR2VuZXJhdG9yKHVzZXJzKSk7XHJcbiIsImNvbnNvbGUubG9nKCdUb3BpYzogRE9NJyk7XHJcblxyXG4vLyBUYXNrIDAxXHJcbi8vINCd0LDQudGC0Lgg0Y3Qu9C10LzQtdC90YIg0YEgaWQ9IFwidDAxXCIuINCS0YvQstC10YHRgtC4INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyDQndCw0LnRgtC4INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQuCDQstGL0LLQtdGB0YLQuCDQsiDQutC+0L3RgdC+0LvRjC5cclxuLy8g0J3QsNC50YLQuCDQtNC+0YfQtdGA0L3QuNC1INC90L7QtNGLLCDQtdGB0LvQuCDQvtC90Lgg0LXRgdGC0YwsINC4INCy0YvQstC10YHRgtC4INCyINC60L7QvdGB0L7Qu9GMXHJcbi8vINC90LDQt9Cy0LDQvdC40Y8g0Lgg0YLQuNC/INC90L7QtC5cclxuXHJcblxyXG4vLyBUYXNrIDAyXHJcbi8vINCf0L7QtNGB0YfQuNGC0LDRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+IDxsaT4g0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtS4g0JTQu9GPINC/0L7QuNGB0LrQsCDRjdC70LXQvNC10L3RgtC+0LIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMXHJcbi8vIGdldEVsZW1lbnRzQnlUYWdOYW1lKCkuINCS0YvQstC10YHRgtC4INCyINC60L7QvdGB0L7Qu9GMLlxyXG4vLyDQlNC+0LHQsNCy0LjRgtGMINC10YnQtSDQvtC00LjQvSDRjdC70LXQvNC10L3RgiDQsiDRgdC/0LjRgdC+0Log0Lgg0LLRi9Cy0LXRgdGC0Lgg0YHQvdC+0LLQsCDQuNGFINC60L7Qu9C40YfQtdGB0YLQstC+LlxyXG5cclxuXHJcbi8vIFRhc2sgMDNcclxuLy8g0J/QvtC70YPRh9C40YLRjCDRjdC70LXQvNC10L3RgtGLIDxsaT4g0LjRgdC/0L7Qu9GM0LfRg9GPINC80LXRgtC+0LQgcXVlcnlTZWxlY3RvckFsbCgpINC4INCy0YvQstC10YLQuCDQuNGFINCyINC60L7QvdGB0L7Qu9GMXHJcbi8vINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSA8bGk+INC4INGB0L3QvtCy0LAg0LLRi9Cy0LXRgdGC0Lgg0LIg0LrQvtC90YHQvtC70YxcclxuXHJcblxyXG4vLyBUYXNrIDA0XHJcbi8vINCd0LDQudGC0Lgg0LLRgdC1INC/0LXRgNCy0YvQtSDQv9Cw0YDQsNCz0YDQsNGE0Ysg0LIg0LrQsNC20LTQvtC8INC00LjQstC1INC4INGD0YHRgtCw0L3QvtCy0LjRgtGMINGG0LLQtdGCINGE0L7QvdCwICNmZmZmMDBcclxuXHJcblxyXG4vLyBUYXNrIDA1XHJcbi8vINCf0L7QtNGB0YfQuNGC0LDRgtGMINGB0YPQvNC80YMg0YHRgtGA0L7QutC4INCyINGC0LDQsdC70LjRhtC1INC4INCy0YvQstC10YHRgtC4INC10LUg0LIg0L/QvtGB0LvQtdC00L3RjtGOINGP0YfQtdC50LrRg1xyXG5cclxuXHJcbi8vIFRhc2sgMDZcclxuLy8g0JLRi9Cy0LXRgdGC0Lgg0LfQvdCw0YfQtdC90LjRjyDQstGB0LXRhSDQsNGC0YDQuNCx0YPRgtC+0LIg0Y3Qu9C10LzQtdC90YLQsCDRgSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgNC+0LwgdDA2XHJcblxyXG5cclxuLy8gVGFzayAwN1xyXG4vLyDQn9C+0LvRg9GH0LjRgtGMINC+0LHRitC10LrRgiwg0LrQvtGC0L7RgNGL0Lkg0L7Qv9C40YHRi9Cy0LDQtdGCINGB0YLQuNC70LgsINC60L7RgtC+0YDRi9C1INC/0YDQuNC80LXQvdC10L3RiyDQuiDRjdC70LXQvNC10L3RgtGDINC90LAg0YHRgtGA0LDQvdC40YbQtVxyXG4vLyDQktGL0LLQtdGB0YLQuCDQvtCx0YrQtdC60YIg0LIg0LrQvtC90YHQvtC70YwuINCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgpLlxyXG5cclxuXHJcbi8vIFRhc2sgMDhcclxuLy8g0KPRgdGC0LDQvdC+0LLQuNGC0LUg0LIg0LrQsNGH0LXRgdGC0LLQtSDQutC+0L3RgtC10L3RgtCwINGN0LvQtdC80LXQvdGC0LAg0YEg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQvtC8IHQwOCDRgdC70LXQtNGD0Y7RidC40Lkg0L/QsNGA0LDQs9GA0LDRhFxyXG4vLyA8cD5UaGlzIGlzIGEgcGFyYWdyYXBoPC8+XHJcblxyXG4vLyBUYXNrIDA5XHJcbi8vINCh0L7Qt9C00LDQudGC0LUg0Y3Qu9C10LzQtdC90YIgPGRpdiBjbGFzcz0nYzA5JyBkYXRhLWNsYXNzPSdjMDknPiDRgSDQvdC10LrQvtGC0L7RgNGL0Lwg0YLQtdC60YHRgtC+0LLRi9C8INC60L7QvdGC0LXQvdGC0L7QvCwg0LrQvtGC0L7RgNGL0Lkg0L/QvtC70YPRh9C40YLRjCDQvtGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyxcclxuLy8g0YEg0L/QvtC80L7RidGM0Y4gcHJvbXB0LCDQv9C10YDQtdC0INGN0LvQtdC80LXQvdGC0L7QvCDRgSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgNC+0LwgdDA4LFxyXG4vLyDQutC+0LPQtNCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQutC70LjQutCw0LXRgiDQvdCwINC90LXQvFxyXG5cclxuXHJcbi8vIFRhc2sgMTBcclxuLy8g0KPQtNCw0LvQuNGC0LUg0YMg0Y3Qu9C10LzQtdC90YLQsCDRgSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgNC+0LwgdDA2INCw0YLRgNC40LHRg9GCIHJvbGVcclxuLy8g0KPQtNCw0LvQuNGC0LUg0LrQvdC+0L/QutGDINGBINC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGA0L7QvCBidG4sINC60L7Qs9C00LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC60LvQuNC60LDQtdGCINC/0L4g0L3QtdC5XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBvMDEgZnJvbSAnLi8wMS5wcmltaXRpdmUtZGF0YS10eXBlcyc7XHJcbmltcG9ydCAqIGFzIG8wMiBmcm9tICcuLzAyLnN0cmluZ3MnO1xyXG5pbXBvcnQgKiBhcyBvMDMgZnJvbSAnLi8wMy5hcnJheXMnO1xyXG5pbXBvcnQgKiBhcyBvMDQgZnJvbSAnLi8wNC5vYmplY3RzJztcclxuaW1wb3J0ICogYXMgbzA1IGZyb20gJy4vMDUuZGF0ZSc7XHJcbmltcG9ydCAqIGFzIG8wNiBmcm9tICcuLzA2LmZ1bmN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIG8wNyBmcm9tICcuLzA3LnByb21pc2VzJztcclxuaW1wb3J0ICogYXMgbzA4IGZyb20gJy4vMDguYXN5bmMtZnVuY3Rpb25zJztcclxuaW1wb3J0ICogYXMgbzA5IGZyb20gJy4vMDkuaXRlcmF0b3JzJztcclxuaW1wb3J0ICogYXMgbzEwIGZyb20gJy4vMTAuc3luYy1nZW5lcmF0b3JzJztcclxuaW1wb3J0ICogYXMgbzExIGZyb20gJy4vMTEuZG9tJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9