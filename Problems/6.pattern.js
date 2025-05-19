function pattern(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.slice(i).concat(arr.slice(0, i)).join(''));
    }
}
const arr = [1, 2, 3, 4, 5, 6];
pattern(arr);