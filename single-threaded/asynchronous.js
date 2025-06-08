const fs = require('fs');
console.log('Start reading file...');

fs.readFile('example.txt', 'utf8', (data, error) => {
    if (error) console.error(error);
    console.log(data);
});

console.log('End reading file...');

// ==========================================================
const fs = require('fs/promises')

console.log('--Start--')

fs.readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(error => console.log(error))

console.log('--End--')
