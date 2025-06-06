// --------------- Shallow Copy --------------------------------
const original = [[1, 2], [3, 4]];
// const shallow = [...original];
const shallow = original;

shallow[0][0] = 99;

console.log('Original:', original); // [[99, 2], [3, 4]] — Changed!
console.log('Shallow:', shallow);   // [[99, 2], [3, 4]]


// ---------------- Deep Copy -------------------------------------
// const original = [[1, 2], [3, 4]];s
const deep = JSON.parse(JSON.stringify(original));

deep[0][0] = 99;

console.log('Original:', original); // [[1, 2], [3, 4]] — Unchanged
console.log('Deep:', deep); 
