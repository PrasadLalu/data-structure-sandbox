function add(a, b) {
    if (typeof b != 'undefined') {
        return a + b;
    }
    return function(c) {
        return a + c;
    }
}

console.log(add(3, 4));
console.log(add(3)(4));

function calculate(operator, a, b) {
    return operator(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(add, 2, 3));
console.log(calculate(multiply, 2, 3));