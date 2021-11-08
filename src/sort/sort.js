const { books } = require('./books');

function defaultCompare(a, b) {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

// const sortedBooksByName = books.sort((a, b) => defaultCompare(a.name, b.name));
// sortedBooksByName.forEach(({ name }) => console.log(name));

function arraySort(arr, props) {
  return arr.sort((a, b) => {
    let result;

    for (let i = 0; i < props.length; i += 1) {
      result = compare(props[i], a, b);

      if (result !== 0) {
        break;
      }
    }

    return result;
  });
}

function compare(prop, a, b) {
  if (prop && typeof a === 'object' && typeof b === 'object') {
    return compare(null, a[prop], b[prop]);
  }

  return defaultCompare(a, b);
}

const sortedBooks = arraySort(books, ['author', 'pagesCount', 'price']);

sortedBooks.forEach(el => console.log(el.author, el.pagesCount, el.price));

// ==================================================
// ==================================================
// ==================================================

const books2 = [...books];

let sortBy = [
  { prop: 'author', direction: -1 },
  { prop: 'pagesCount', direction: -1 },
  { prop: 'price', direction: 1 },
];

const sortedBooks2 = books2.sort((a, b) => {
  let result = 0;

  for (let i = 0; i < sortBy.length; i += 1) {
    if (a[sortBy[i].prop] < b[sortBy[i].prop]) {
      result = sortBy[i].direction * -1;
    }

    if (a[sortBy[i].prop] > b[sortBy[i].prop]) {
      result = sortBy[i].direction * 1;
    }

    if (result !== 0) {
      break;
    }
  }

  return result;
})

sortedBooks2.forEach(el => console.log(el.author, el.pagesCount, el.price));
