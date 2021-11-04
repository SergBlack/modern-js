// Using assignment operator with array literal
const array1 = [1, 2, 3];


// ================================================================
// Using new Array()
// syntax: new Array(length: number)
const array2 = new Array(2);
console.log(array2); // [ <2 empty items> ]
console.log(array2.length); // 2
console.log(array2[0]); // undefined
array2[3] = 42;
console.log(array2); // [ <3 empty items>, 42 ]


// ================================================================
// Using Array.from()
const array31 = Array.from([1,2]);
console.log(array31);// [ 1, 2 ]

// we can add arrayLike object: { length: 3, 0: 10, 2: 20 } OR iterable objects (objects such as Map and Set)
const array32 = Array.from({ length: 3, 0: 10, 2: 20 });
console.log(array32); // [ 10, undefined, 20 ]


// ================================================================
// Using spread operator
const array41 = [ 1, 2 ];
const array42 = [ ...array41 ];


// ================================================================
// Using Array
const array5 = Array(1, 2, 3, 4);
console.log(array5); // [ 1, 2, 3, 4 ]

const array52 = Array(4);
console.log(array52); // [empty x 4]

const array53 = Array('5');
console.log(array53); // ['5']


// ================================================================
// Using Array.of(5)
const array6 = Array.of(5);
console.log(array6); // [ 5 ]

const array62 = Array.of(1,3,4,5);
console.log(array62); // [ 1,3,4,5 ]
