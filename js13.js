// JavaScript: Find the second lowest and second greatestfun
// numbers from an array

const randomNumbers = [6, 8, 19, 2, 88, 11];
const moreRandomNumbers = [0.3, 2.3, 0, 0.5, 0.02];
function findSecondLowest(figures) {
    let result;
    for (let i = 0; i < figures.length; i++) {
        let greaterCount = 0;

        for (let t = 0; t < figures.length; t++) {
            if (figures[i] > figures[t]) {
                greaterCount++;
            }
        }
        if (greaterCount == 1) {
            console.log(figures[i]);
            result = figures[i];
            break;
        }
    }
    return result;
}

console.log(findSecondLowest(randomNumbers));

console.log(findSecondLowest(moreRandomNumbers));

function findTypeOf(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(typeof array[i]);
    }
}

findTypeOf(moreRandomNumbers);
