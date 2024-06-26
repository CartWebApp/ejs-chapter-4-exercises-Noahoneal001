function deepEqual(value, reference) {
  // Add code.
  let lastHopes1 = ``;
  let lastHopes2 = ``;
  let keyring1 = Object.keys(value);
  if (value === reference) {
    return true;
  };
  for (const counter of keyring1) {
    if (typeof reference[counter] == `object` && reference[counter] != null) {
      lastHopes1 = Object.values(reference[counter]);
      lastHopes2 = Object.values(value[counter]);
      return lastHopes1.toString() === lastHopes2.toString();
    };
  };
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
