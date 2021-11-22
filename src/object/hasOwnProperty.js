let tasks = {};

Object.defineProperty(tasks, 'task1', {
  value: 'do it',
});

// в консоль выведется строка, потому что toString есть у прототипа
if (tasks.toString) {
  console.log('has toString');
}

// но при использовании hasOwnProperty будет false
console.log(tasks.hasOwnProperty('toString')); //false

// но при использовании ключевого слова in будет true, потому что in идет в прототип и смотрит там
console.log('toString' in tasks); // true
