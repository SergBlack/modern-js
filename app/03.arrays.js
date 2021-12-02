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

// const arr = [1, 2, 3];
//
// console.log(arr[arr.length - 1])
// console.log(arr.pop())

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// const arr = [1, 2, 3]
//
// console.log(arr.push(4))
// console.log([...arr, 5])
// console.log(arr)

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// const arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 6);
// console.log(arr);
//
// const newArr = [ ...arr.slice(0, 3), 'B', ...arr.slice(3)];
// console.log(newArr);

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(el => console.log(el));
//
// for (const el of arr.entries()) {
//   console.log(el);
// }

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// const arr = [1, 99, 3, 76, 5, 76];
// const count = arr.filter(el => el > 50).reduce((acc, el) => acc + el, 0)
// console.log(count)

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

// const arr = ['1', '99', '3', '76', '5', '76'];
// console.log(arr.join(':'))

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.

// const arr = [1, 99, 3, 66, 5, 76];
// console.log(arr.sort((a, b) => a - b))
// console.log(arr.sort((a, b) => b - a))

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

// const arr = [3, 0, -1, 12, -2, -4, 0, 7, 2];
// const minus = arr.filter(el => el < 0);
// const plus = arr.filter(el => el > 0);
// const zero = arr.filter(el => el === 0);
//
// console.log([ ...minus, ...zero, ...plus])

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

// const styles = ["Jazz", "Blues"]
// styles.push("Rock-n-Roll")
// console.log(styles)
// styles.splice(styles.length - 2, 1, "Classics")
// console.log(styles)
// styles.shift()
// console.log(styles)
// styles.unshift("Rap", "Reggae")
// console.log(styles)

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// const str = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
// const str2 = str.split('')
// const r = str2.filter(el => el === 'r').length;
// const k = str2.filter(el => el === 'k').length;
// const t = str2.filter(el => el === 't').length;
//
// console.log({ r, k, t })

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// const styles = ["Jazz", "Blues", "Rock-n-Roll", "Classics"];
// const randomIndex = Math.round(Math.random() * (styles.length - 1));
// console.log(styles[randomIndex])

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

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
//
// console.table(arr)
//
// for (const el of arr) {
//   console.log(el.join(' '));
// }

// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
//
// console.log(arr.flat())

// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// const arr = [1, 3, 4, 5]
// console.log(arr.slice(1, 2))

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.

// const arr = [1, 3, 4, 5]
// console.log(arr.indexOf(5))
// console.log(arr.findIndex(el => el === 3))

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// const arr = [1, 3, 4, 4, 5]
// const set = new Set(arr)
// console.log([...set])
// console.log(Array.of(...set))
// console.log(Array.from(set))

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// const arr = [1, 3, 4, 4, 5, 2, 7, 5, 2, 8];
//
// for (let index in arr) {
//   const nextIndex = +index + 1;
//
//   for (let i = nextIndex; i < arr.length; i += 1) {
//     if (arr[index] === arr[i]) {
//       arr[index] = '*';
//       arr[i] = '*';
//     }
//   }
// }
//
// console.log(arr);


// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40]
//
// arr.forEach(el => {
//   const r = el.toString(2)
//   const r2 = Number.parseInt(r,2)
//   console.log(r);
//   console.log(r2);
// })

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// const str = 'a big brown fox jumps over the lazy dog';
// const arr = str.split(' ').filter(el => el.length <= 3);
// console.log(arr);

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// const arr = ['a', 1, 'b', 2];
// const result = arr.every(el => typeof el === 'string');
// console.log(result);

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

// const numbers = [1, 3, 5, 7, 8, 12, 15, 19, 66, 99, 123, 546, 888];
// const value = 77;
//
// const binarySearch = (arr, value) => {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   let midIndex;
//
//   if (value < arr[leftIndex] || value > arr[rightIndex]) {
//     return -1;
//   }
//
//   while(leftIndex <= rightIndex) {
//     midIndex = Math.floor((leftIndex + rightIndex) / 2);
//
//     if (value === arr[midIndex]) {
//       return midIndex;
//     } else if(value > arr[midIndex]) {
//       leftIndex = midIndex + 1;
//     } else if(value < arr[midIndex]) {
//       rightIndex = midIndex - 1;
//     }
//   }
//
//   return -1;
// }
//
// console.log(binarySearch(numbers, value));
