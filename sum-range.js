function range(start, end, step = 1) {
  // Add code.
  let output = [];
  if (start < end) {
    for (start; start <= end; start += step) {
      output.push(start);
    };
  }
  else {
    for (start; start + 1 !== end; start += step) {
      output.push(start);
    };
  };
  return output;
};

function sum(numbers) {
  let output = 0;
  for (let counter of numbers) {
    output += counter
  }
  return output
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
