// 'use strict'

// preventExtensions - запретить расширять объект
// seal - запретить расширять и менять пропы, но разрешает менять значения
// freeze - жестко запретить изменять что-либо на 1-м уровне вложенности

// *****************************************************************************
// Object.isExtensible()
// *****************************************************************************

let tasks = {
  task1: 'value1',
}

// доступен для расширения
console.log(Object.isExtensible(tasks)); //true

// запрещаем расширять объект
Object.preventExtensions(tasks);

// теперь закрыт
console.log(Object.isExtensible(tasks)); //false

// tasks.newTask = 'some value'; // ничего не произойдет или в use strict будет TypeError: Cannot add property newTask, object is not extensible

console.log(tasks); // { task1: 'value1' }

// *****************************************************************************
// Object.freeze()
// *****************************************************************************
let tasks2 = {
  task2: {
    value: 'value2',
  }
}

// объект не заморожен
console.log(Object.isFrozen(tasks)); //false

// на первом уровне вложенности измненить в объекте уже ничего нельзя -
Object.freeze(tasks2);

// tasks2.task2 = 'new value'; // ничего не произойдет или в use strict будет Exception TypeError: Cannot assign to read only property 'task2' of object '#<Object>'

tasks2.task2.value = 'new value2'; // изменится

console.log(tasks2); // { task2: { value: 'new value2' } }

// *****************************************************************************
// Object.seal()
// *****************************************************************************
let tasks3 = {
  task3: {
    value: 'value3',
  }
}

Object.seal(tasks3);

tasks3.newTask = 'new value'; // ничего не произойдет или в use strict будет TypeError: Cannot add property newTask, object is not extensible

console.log(tasks3); // { task3: { value: 'value3' } }

tasks3.task3.value = 'this a new value'; // изменится

console.log(tasks3); // { task3: { value: 'this a new value' } }


