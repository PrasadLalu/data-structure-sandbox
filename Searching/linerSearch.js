function linearSearch(numbers, target) {
    let length = numbers.length;

    let steps = 0;

    for (let i=0; i<length; i++) {
        steps++;
        if (target === numbers[i]) {
            console.log(`Steps: ${steps}`);
            return i;
        }
    }
    return -1;

}
const target = 11;
const numbers = [3, 5, 7, 9 ,11, 13, 15];

const index = linearSearch(numbers, target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found.');
}
