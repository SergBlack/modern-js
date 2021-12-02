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

// // class
// const Tune = (function () {
//   // constructor
//   function Tune(title, artist) {
//     this.title = title;
//     this.artist = artist;
//   }
//
//   // method
//   Tune.prototype.concat = function () {
//     return `${this.title} ${this.artist}`;
//   }
//
//   return Tune;
// })()
//
// const obj1 = new Tune('Title 1', 'Artist 1');
// const obj2 = new Tune('Title 2', 'Artist 2');
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.concat());
// console.log(obj2.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Method should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// // class
// const Tune = (function () {
//   // constructor
//   function Tune(title, artist) {
//     let _title = title;
//     let _artist = artist;
//
//     // this.setTitle = function (title) { _title = title }
//     // this.getTitle = function () { return _title }
//     //
//     // this.setArtist = function (artist) { _artist = artist }
//     // this.getArtist = function () { return _artist }
//     this.concat = function () {
//       return `${_title} ${_artist}`;
//     }
//   }
//
//   // method
//   // Tune.prototype.concat = function () {
//   //   return `${this.getTitle()} ${this.getArtist()}`;
//   // }
//
//   return Tune;
// })()

// const obj1 = new Tune('Title 1', 'Artist 1');
// const obj2 = new Tune('Title 2', 'Artist 2');
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.concat());
// console.log(obj2.concat());
//
// class Tune2 {
//   #title;
//   #artist;
//
//   constructor(title, artist){
//     this.#title = title;
//     this.#artist = artist;
//   }
//
//   concat() {
//     return `${this.#title} ${this.#artist}`
//   }
// }
//
// const obj3 = new Tune2('Title 3', 'Artist 3');
// console.log(obj3);
// console.log(obj3.concat());

// // class
// const Tune4 = (function () {
//   const priv = new WeakMap();
//
//   const _ = function (inst) { return priv.get(inst); };
//
//   // constructor
//   function Tune(title, artist) {
//     const privateMembers = {
//       title,
//       artist,
//     }
//
//     priv.set(this, privateMembers);
//   }
//
//   // method
//   Tune.prototype.concat = function () {
//     return `${_(this).title} ${_(this).artist}`;
//   }
//
//   return Tune;
// })()
//
// const obj4 = new Tune4('Title 4', 'Artist 4');
// console.log(obj4);
// console.log(obj4.concat());

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// if (!String.prototype.exclaim) {
//   String.prototype.exclaim = function () {
//     return `${this}!`;
//   }
// }
//
// console.log('someString'.exclaim());

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

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//
//   getTitle() {
//     return this.title;
//   }
//
//   getAuthor() {
//     return this.author;
//   }
// }
//
// class TechBook extends Book {
//   constructor(title, author, category) {
//     super(title, author);
//
//     this.category = category;
//   }
//
//   getCategory() {
//     return this.category;
//   }
//
//   getBook() {
//     return `${this.title} ${this.author} ${this.category}`;
//   }
// }
//
// const book = new Book('Title 1', 'Author 1');
// console.log(book.getTitle());
// console.log(book.getAuthor());
//
// const techBook = new TechBook('Title 2', 'Author 2', 'Category 2');
// console.log(techBook.getCategory());
// console.log(techBook.getBook());

// // class
// const Book = (function () {
//   // constructor
//   function Book(title, author) {
//     this.title = title;
//     this.author = author;
//
//     this.getTitle = function () {
//       return this.title;
//     }
//
//     this.getAuthor = function () {
//       return this.author;
//     }
//   }
//
//   return Book;
// })()
//
// const TechBook = (function(_super) {
//   function TechBook(title, author, category) {
//     _super.call(this, title, author);
//     this.category = category;
//
//     this.getCategory = function() {
//       return this.category;
//     }
//
//     this.getBook = function() {
//       return `${this.title} ${this.author} ${this.category}`;
//     }
//   }
//
//   // TechBook.prototype = Object.create(Book.prototype);
//   // OR
//   Object.setPrototypeOf(TechBook.prototype, _super.prototype);
//
//   return TechBook;
// })(Book);
//
// const book = new Book('Title 1', 'Author 1');
// console.log(book);
// console.log(book.getTitle());
// console.log(book.getAuthor());
//
// const techBook = new TechBook('Title 2', 'Author 2', 'Category');
// console.log(techBook);
// console.log(techBook.getCategory());
// console.log(techBook.getBook());

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

// class Shape {
//   // static count = 0;
//
//   constructor() {
//     Shape.count += 1;
//   }
// }
//
// Shape.count = 0;
//
// class Rectangle extends Shape {
//   getSquare(a, b) {
//     return a * b;
//   }
// }
//
// const rectangle1 = new Rectangle();
// console.log(rectangle1.getSquare(4, 5));
// console.log(Shape.count);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// // class
// const Person = (function () {
//   // constructor
//   function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   Person.prototype.setFirstName = function (newFirstName) {
//     this.firstName = newFirstName;
//
//     return this;
//   }
//
//   Person.prototype.setLastName = function (newLastName) {
//     this.lastName = newLastName;
//
//     return this;
//   }
//
//   return Person;
// })()
//
// const person = new Person('Firstname', 'Lastname');
// console.log(person);
// person.setFirstName('New').setLastName('New');
// console.log(person);

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

// const data = {};
//
// Object.defineProperties(data, {
//   id: {
//     value: 1,
//     writable: true,
//   },
//   type: {
//     value: 'primary',
//     enumerable: true,
//   },
//   category: {
//     enumerable: true,
//     configurable: true,
//     get() {
//       return this._category;
//     },
//     set(newVal) {
//       this._category = newVal;
//     },
//   },
// })
//
// for (let prop in data) {
//   console.log(prop);
// }

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

// const obj = {
//   key1: 'key1',
//   key2: 'key2',
// }
//
// Object.preventExtensions(obj);
// Object.seal(obj);
// Object.freeze(obj);

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

// class Task {
//   constructor(name) {
//     this.name = name;
//
//   }
//
//   setCompleted() {
//     this.status = 'completed';
//   }
//
//   toString() {
//     return `[${this.status}] ${this.name}`;
//   }
// }
//
// Task.prototype.status = 'new';
//
// class ClassList {
//   constructor() {
//     this.tasklist = [];
//   }
//
//   add(...task) { // rest
//     this.tasklist.push(...task); // spread
//   }
//
//   remove(task) {
//     const index = this.tasklist.findIndex(t => task === t);
//
//     if( index >= 0) {
//       this.tasklist.splice(index, 1);
//     }
//   }
//
//   print() {
//     this.tasklist.forEach(task => console.log(task.toString()));
//   }
//
//   setCompleted(index) {
//     this.tasklist[index].setCompleted();
//   }
//
//   sort(direction) {
//     this.tasklist.sort((task1, task2) => {
//       return direction * task1.name.localeCompare(task2.name);
//     })
//   }
//
//   clear() {
//     this.tasklist.length = 0;
//   }
// }
//
// const task1 = new Task('do this');
// const task2 = new Task('do that');
// console.log(task1);
// console.log(task2);
