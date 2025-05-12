
function bubbleSort(numbers) {
    let len = numbers.length;
    let temp = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp
            }
        }
    }

    return numbers;
}

const numbers = [13, 15, 17, 9, 1, 3, 5, 2];
console.log(bubbleSort(numbers));
