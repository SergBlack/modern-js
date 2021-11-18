const users = {};

// Object.defineProperty по умолчанию создает readonly property
Object.defineProperty(users, 'key1', {
  value: '1',
});

// значение не изменится, т.к. key1 readonly
users.key1 = '111';
console.log(users.key1); // 1

Object.defineProperty(users, 'key2', {
  value: '2',
  writable: true,
});

// значение изменится, т.к. добавлен writable: true,
users.key2 = '222';
console.log(users.key2); // 222

//************************************************************************
//************************************************************************
// Для обхода объектов (но чаще используют Object.entries, ..keys, ..values)
// данный цикл обойдет ТОЛЬКО перечисляемые свойства
for (let prop in users) {
  console.log(prop); // ничего не выведет
}

// через литерал создаются перечисляемые объекты
const tasks = {
  task1: 'doSmth',
}

for (let prop in tasks) {
  console.log(prop); // выведет task1
}

// через defineProperty надо задать явно enumerable
const tasks2 = {}

Object.defineProperty(tasks2, 'task2', {
  value: 'doSmth2',
  enumerable: true,
});

for (let prop in tasks2) {
  console.log(prop); // выведет task2
}

//************************************************************************
//************************************************************************
const tasks3 = {}

Object.defineProperty(tasks3, 'task3', {
  value: 'doSmth3',
  configurable: true, // ОБЯЗАТЕЛЬНО для переконфигурирования
});

// для переконфигурирования пропа надо задать configurable иначе вылетит исключение
Object.defineProperty(tasks3, 'task3', {
  value: 'doSmth333',
});
