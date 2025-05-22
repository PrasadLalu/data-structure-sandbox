function process(strings) {
    let groups = {};
    for (let i=0; i<strings.split('').length; i++) {
        if (!groups[strings[i]]) {
            groups[strings[i]] = 1;
        } else {
            groups[strings[i]] = groups[strings[i]] + 1;
        }
    }

    let result = '';
    for (let entry of Object.entries(groups)) {
        result = result + entry.join('');
    }
    return result;
}

let strings = 'aabcccddddee';
console.log(process(strings));



// let x = 10;
// x = 20;


// const y = 10;
// const y = 20;


console.log(x) undefined
var x = 10;

console.log(a) RE
let a = 10;

console.log(b)  RE
const b = 10;


// Given a string, find the first repeated character
// 


function process(str) {
    let strings = str.split('').length-1;
    let result = [];
    
    for (let i=0; i<strings; i++) {
        if (!result.includes(str[i])) {
            result.push(str[i])
        } else {
            console.log(str[i]);
            break;
        }
    }
    
}
// const str = "abxcbcbxzayyyyzc";
const str = "cbxzayyyyzc”;
process(str);

type emp  = {
    
}number


interface user {
    
}



const user = {name, city, salary}
const { name, city } = user;


const [first, ...rest] = [1,2,3,4,5]
first = 1
rest = [2,3,4,5]


Promise.all([
    Promise.resolve(1),
    Promise.resolve(1),
    ]
)


app = expresss();


1
0
0
2
3


1
2
3










// Write a Node.js function that takes in a string and returns the count of each character in the string.

function process(str) {
    let groups = {}
    for (let i=0; i<str.split('').length; i++) {
        
        if (!groups[str[i]]) {
            groups[str[i]] = 1;
        } else {
            groups[str[i]] = groups[str[i]] + 1;
        }
    }

    return groups;
}

let strings = 'absnsksas';
console.log(process(strings));

let count = 0;
const intervalId = setInterval(() => {
  if (count === 2) clearInterval(intervalId);
  count++;
  console.log('Hello');
}, 10000);




function process(arr) {
    let numbers = [];
    let strings = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            strings.push(arr[i]);
        } else {
            numbers.push(arr[i])
        }
    }


    console.log([...strings.sort(), ...numbers.sort((a, b) => (a - b))]);
}



function process2(arr) {
    const characters = arr.filter(char => typeof char === 'string').sort();
    const numbers = arr.filter(number => typeof number === 'number').sort((a, b) => a - b);

    console.log([...characters, ...numbers]);
}

function process3(arr) {
    let group = {
        string: [],
        number: []
    }
    arr.forEach(element => {
        group[typeof element].push(element)
    });

    console.log(group);
}

const arr = [4, 'e', 1, 3, 'c', 'a', 2, 'b'];
process(arr);
process2(arr);
process3(arr);
