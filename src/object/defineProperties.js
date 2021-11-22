let tasks = {};

// множество props. по аналогии с defineProperty создает writable=false, enumerable=false, configurable=false
Object.defineProperties(tasks, {
  action: {
    value: 'do it',
  },
  priority: {
    value: 'Very high',
  },
});

console.log(tasks.action);
console.log(tasks.priority);

// чтобы увидеть дескрипторы можно воспользоваться getOwnPropertyDescriptors
let tasksDescriptors = Object.getOwnPropertyDescriptors(tasks);

// или для определенного пропа воспользоваться getOwnPropertyDescriptor
let priorityDescriptors = Object.getOwnPropertyDescriptor(tasks, 'priority');

console.log(tasksDescriptors);
console.log(priorityDescriptors);

// при создании через литерал объекта все дескрипторы по умолчанию writable=true, enumerable=true, configurable=true
let test = {
  key1: 'value1',
  key2: 'value2',
  key13: 'value3',
}
let testDescriptors = Object.getOwnPropertyDescriptors(test);
console.log(testDescriptors);
