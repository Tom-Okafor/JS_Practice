// Rearrange an array of numbers in increasing and decreasing order

function arrangeNumsInIncreasingOrder(numbers) {
    let newArray = [];
    const ARRAY_LENGTH = numbers.length;
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        let greaterThanCounter = 0;
        let equalToCounter = 0;
        for (let t = 0; t < ARRAY_LENGTH; t++) {
            if (numbers[i] > numbers[t]) {
                greaterThanCounter++;
            } else if (numbers[i] == numbers[t]) {
                equalToCounter++;
            }
        }

        newArray[greaterThanCounter] = numbers[i];

        while (equalToCounter) {
            newArray[greaterThanCounter++] = numbers[i];
            equalToCounter--;
        }
    }
    return newArray;
}

const randomNumbers = [5, 2, 9, 4];
const moreRandomNumbers = [3, 7, 9, 4, 55, 84, 1, 8, 9, 3, 2, 9];

function logNewArray(newArray) {
    let figures = newArray;

    for (let i = 0; i < figures.length; i++) {
        let newFigure = figures[i];
        console.log(newFigure);
    }
    console.log("\n");
}

logNewArray(arrangeNumsInIncreasingOrder(randomNumbers));
logNewArray(arrangeNumsInIncreasingOrder(moreRandomNumbers));

function arrangeNumsInDecreasingOrder(numbers) {
    let newArray = [];
    const ARRAY_LENGTH = numbers.length;
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        let lessThanCounter = 0;
        let equalToCounter = 0;
        for (let t = 0; t < ARRAY_LENGTH; t++) {
            if (numbers[i] < numbers[t]) {
                lessThanCounter++;
            } else if (numbers[i] == numbers[t]) {
                equalToCounter++;
            }
        }

        newArray[lessThanCounter] = numbers[i];

        while (equalToCounter) {
            newArray[lessThanCounter++] = numbers[i];
            equalToCounter--;
        }
    }
    return newArray;
}

logNewArray(arrangeNumsInDecreasingOrder(randomNumbers));
logNewArray(arrangeNumsInDecreasingOrder(moreRandomNumbers));
