// series: [13, 8, 5, 3, 2, 1, 1, 0]

function generate(a, b) {
    let results = [a, b];
    while(true) {
        let n = results.length;
        let next = results[n-2] - results[n-1];
        results.push(next);
        console.log(next);
        if (next === 0) break;
    }
    return results;
}

const output = generate(13, 8);
console.log(output);