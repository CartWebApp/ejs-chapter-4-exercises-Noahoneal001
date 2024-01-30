function deepEqual(value, reference) {
  // Add code.
  let output = false;
  let holder = 0;
  let keyring1 = Object.keys(value);
  let keyring2 = Object.keys(reference);
  let length = keyring1.length; 
    for (let counter = 1; counter <= length; counter++ ) {
      if (typeof value[keyring1[counter - 1]] === typeof value[keyring2[counter - 1]]) {
        if (typeof value[keyring1[counter]] == `object`) {
          console.log(`HELP`)
        }
        holder++
      };
    };
    if (holder === length) {
      output = true;
    };
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
