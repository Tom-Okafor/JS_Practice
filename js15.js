// Rearrange an array of numbers in increasing and decreasing order
function arrangeNumsInIncreasingOrder(numbers) {
    return createNewArray(numbers, 1);
}
function arrangeNumsInDecreasingOrder(numbers) {
    return createNewArray(numbers, 0);
}
function createNewArray(numbers, condition) {
    let newArray = [];
    const ARRAY_LENGTH = numbers.length;
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        let comparisonCounter = 0;
        let equalToCounter = 0;
        for (let t = 0; t < ARRAY_LENGTH; t++) {
            function checkEquality() {
                if (numbers[i] == numbers[t]) {
                    equalToCounter++;
                }
            }
            if (!condition) {
                if (numbers[i] < numbers[t]) {
                    comparisonCounter++;
                }
                checkEquality();
            } else {
                if (numbers[i] > numbers[t]) {
                    comparisonCounter++;
                }
                checkEquality();
            }
        }
        newArray[comparisonCounter] = numbers[i];
        while (equalToCounter) {
            newArray[comparisonCounter++] = numbers[i];
            equalToCounter--;
        }
    }
    return newArray;
}
function logNewArray(newArray) {
    let figures = newArray;
    for (let i = 0; i < figures.length; i++) {
        let newFigure = figures[i];
        console.log(newFigure);
    }
    console.log("\n");
}
const randomNumbers = [5, 2, 9, 4];
const moreRandomNumbers = [3, 7, 9, 4, 55, 84, 1, 8, 9, 3, 2, 9];
logNewArray(arrangeNumsInIncreasingOrder(randomNumbers));
logNewArray(arrangeNumsInIncreasingOrder(moreRandomNumbers));

logNewArray(arrangeNumsInDecreasingOrder(randomNumbers));
logNewArray(arrangeNumsInDecreasingOrder(moreRandomNumbers));
