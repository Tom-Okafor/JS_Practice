/*find second largest number from a group of numbers in an array*/

const randomNumbers = [6, 8, 19, 2, 88, 11];
const moreRandomNumbers = [0.3, 2.3, 0, 0.5, 0.02];

function findSecondLargestNumber(numbers) {
    let result;
    for (i = 0; i < numbers.length; i++) {
        let lessThanCounter = 0;
        for (t = 0; t < numbers.length; t++) {
            if (numbers[i] < numbers[t]) {
                lessThanCounter++;
            }
        }
        if ((lessThanCounter == 1)) {
            result = numbers[i];
            break;
        }
    }
    return result;
}

console.log(findSecondLargestNumber(randomNumbers));

console.log(findSecondLargestNumber(moreRandomNumbers));
