//--------------------- Shallow Copy --------------------------------
const original = {
    name: 'Max',
    address: { city: 'Bangalore' }
};
const shallow = { ...original };

shallow.address.city = 'Delhi';

console.log('Original:', original); // address.city is now 'Delhi'
console.log('Shallow:', shallow);
console.log("\n")

//--------------------- Deep Copy --------------------------------
const deep = structuredClone(original);
// const deep = JSON.parse(JSON.stringify(original));

deep.address.city = 'Patna';

console.log('Original:', original); // Still 'Bangalore'
console.log('Deep:', deep);  
  