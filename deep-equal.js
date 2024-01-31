function deepEqual(value, reference) {
  // Add code.
  let output = false;
  let holder = 0;
  let keyring1 = Object.keys(value);
  let keyring2 = Object.keys(reference);
  let length = keyring1.length; 
  if (keyring1 === keyring2) {
    for (const counter of keyring1) {
      
    }
  }
  return output;
};
// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
