// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  elements.forEach((t, i) => {
    cb(t, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newarray = [];
  elements.forEach((t) => {
    newarray.push(cb(t));
  });
  return newarray;
};

const reduce = (elements, cb, memo = elements[0]) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  //
  // should iteerate over all elements
  if (memo === elements[0]) elements.shift();
  elements.forEach((t) => {
    memo = cb(memo, t);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let result;
  elements.forEach((t) => {
    if (cb(t) === true) {
      result = t;
      return;
    }
  });
  return result;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const result = [];
  elements.forEach((t) => {
    if (cb(t) === true) {
      result.push(t);
    }
  });
  return result;
};

const flatten = (elements) => {
  // let set = new Set(arr);
  const flattenedArray = [];
  elements.forEach((item) => {
    let element = item;
    while (Array.isArray(element) === true) {
      element = element[0];
    }
    flattenedArray.push(element);
  });
  return flattenedArray;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
