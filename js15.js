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
            }
        }

        for (let j = 0; j < ARRAY_LENGTH; j++) {
            if (numbers[i] == numbers[j]) {
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

let figures = arrangeNumsInIncreasingOrder(randomNumbers);

for (let i = 0; i < figures.length; i++) {
    let newFigure = figures[i];
    console.log(newFigure);
}

console.log("\n\n");

figures = arrangeNumsInIncreasingOrder(moreRandomNumbers);

for (let i = 0; i < figures.length; i++) {
    let newFigure = figures[i];
    console.log(newFigure);
}


function arrangeNumsInDecreasingOrder(numbers){}