function getPermutations(str) {
    if (str.length === 1) return [str];
    let results = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let rest = str.slice(0, i) + str.slice(i + 1);
        let perms = getPermutations(rest);

        for (let perm of perms) {
            results.push(char + perm);
        }
    }
    return results;
}

const str = 'cat';
const results = getPermutations(str);
console.log(results);