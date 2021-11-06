const id = Symbol();

const user = {
  name: 'Igor',
  age: 21,
};

user[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let index = 0;
  console.log({ keys });

  return {
    next() {
      if (keys[index]) {
        const result = { done: false, value: keys[index] };
        index += 1;
        return result;
      }
      return { done: true, value: undefined };
    },
  };
};

user.id = 3342;
user[id] = 777;

// eslint-disable-next-line no-restricted-syntax
for (const prop of user) {
  console.log({ prop });
}

console.log(user);
