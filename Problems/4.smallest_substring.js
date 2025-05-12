function containAllChar(subString, target) {
    for (let char of target) {
        if (!subString.includes(char)) return false;
        let needed = [...target].filter(c => c === char).length;
        let available = [...subString].filter(c => c === char).length;
        if (available < needed) return false;
    }
    return true;
}
function findSmallestSubstring(strings, target) {
    let minLen = Infinity;
    let result = "";

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j <= strings.length; j++) {
            let subString = strings.slice(i, j);

            if (containAllChar(subString, target) && subString.length < minLen) {
                minLen = subString.length;
                result = subString;
            }
        }
    }
    return result;
}

let strings = "ADOBECODEBANC";
let target = "ABC";
console.log(findSmallestSubstring(strings, target)); 
