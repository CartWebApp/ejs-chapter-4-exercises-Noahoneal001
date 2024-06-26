function reverseArray(arr) {
  // Add code.
  let output = [];
  let holder = 1;
  let length = arr.length;
  for (let counter = 1; counter <= length; counter++) {
    output.push(arr[length - counter]);
  } ;
  return output;
};

function reverseArrayInPlace(arr) {
  // Add code.
  let holder1, holder2;
  let length = arr.length;
  let checker = length / 2;
  for (let counter = 1; counter <= Math.floor(checker); counter++) {
    holder1 = arr[counter - 1];
    holder2 = arr[length - counter];
    arr[counter - 1] = holder2;
    arr[length - counter] = holder1;
  };
  return arr;
};






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
