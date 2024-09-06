function filterArray(numbers, value) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (emptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}
