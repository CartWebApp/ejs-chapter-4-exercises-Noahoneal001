function deepEqual(value, reference) {
  // Add code.
  let output = false;
  let lastHopes1 = ``;
  let lastHopes2 = ``;
  let holder1 = Object.values(value)
  let holder2 = Object.values(reference)
  let keyring1 = Object.keys(value);
  let keyring2 = Object.keys(reference);
  console.log(`Holder 1: `, holder1)
  console.log(`Holder 2: `, holder2)
  if (value === reference) {
    return true
  }
    for (const counter of keyring1) {
      if (typeof reference[counter] == `object` && reference[counter] != null) {
        lastHopes1 = Object.values(reference[counter])
        lastHopes2 = Object.values(value[counter])
        console.log(lastHopes1.toString() === lastHopes2.toString())
        return true
      }
    }
  return false;
};
// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
