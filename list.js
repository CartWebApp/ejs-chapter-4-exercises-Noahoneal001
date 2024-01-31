function arrayToList(arr) {
let output = null;
let length = arr.length;
for (let counter = length - 1; counter >= 0; counter--) {
  output = {value: arr[counter], rest: output}
}
return output;
}

function listToArray(list, arr) {
  // Add code.
  let keyring = Object.keys(list);
  arr = []; 
  for (let counter = list; counter; counter = counter.rest) {
    arr.push(counter.value)
  }
  return arr
}

// tests
console.log(arrayToList([1, 2, 3]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
