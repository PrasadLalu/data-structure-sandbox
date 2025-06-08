const fs = require('fs');
console.log('Start reading file...');

const content = fs.readFileSync('example.txt', 'utf-8');
console.log(content);

console.log('End reading file...');
