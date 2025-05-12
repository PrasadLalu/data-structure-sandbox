function selectionSort(numbers) {

    let n = numbers.length;
    let index = -1;
    let temp = 0;

    for (let i = 0; i < n; i++) {
        index = i;
        for (let j = i + 1; j < n; j++) {
            if (numbers[index] > numbers[j]) {
                index = j
            }
        }

        temp = numbers[index];
        numbers[index] = numbers[i];
        numbers[i] = temp;

    }
    return numbers;
}

const numbers = [13, 15, 17, 9, 1, 3, 5, 2];
console.log(selectionSort(numbers));
