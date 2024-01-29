function deepEqual(value, reference) {
  // Add code.
  if (reference == `object` && reference != null) {
  return value.keys === reference.keys
 }
 return value === reference
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
