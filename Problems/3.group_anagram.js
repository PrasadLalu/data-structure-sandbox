function groupAnagrams(arr) {
    let groups = {};

    for (let word of arr) {
        let sorted = word.split('').sort().join('')
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(word);
    }
    console.log(Object.values(groups));
}


const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
