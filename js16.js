"use strict";

// find the largest number from an array of random numbers

const RANDOM_NUMBERS = [6, 7, 26, 91, 22, 62, 372, 2];
const RANDOM_NUMBERS1 = [26, 17, 256, 91, 242, 62, 372, 5262];
const RANDOM_NUMBERS2 = [611, 755, 126, 921, 252, 862, 37201, -20000];
const RandomNUMBERS = [-0.1 - 2, -0.006, -0.0000099999, -9991];

function findTheLargestNumber(numbers) {
    let greatestNumber = -9999999999999999999999;
    for (let randomNumber of numbers) {
        if (greatestNumber < randomNumber) {
            greatestNumber = randomNumber;
        }
    }
    console.log(greatestNumber);
}

findTheLargestNumber(RANDOM_NUMBERS);
findTheLargestNumber(RANDOM_NUMBERS1);
findTheLargestNumber(RANDOM_NUMBERS2);
findTheLargestNumber(RandomNUMBERS);
