//create a recursive function that returns the fibionacci sequece

let FIBONACCI_ARRAY = [];

function createFibonacciSequence(layers, entryNumber) {
    /* let entryNumber = 0;
    let newNumber = 1;
    console.log(newNumber);
    function returnFibonacciSequence() {}
    */
    if (FIBONACCI_ARRAY.length == 0) {
        FIBONACCI_ARRAY.push(entryNumber);
    } else if (FIBONACCI_ARRAY.length == 1) {
        FIBONACCI_ARRAY.push(FIBONACCI_ARRAY[0]);
    } else {
        FIBONACCI_ARRAY.push(
            FIBONACCI_ARRAY[FIBONACCI_ARRAY.length - 1] +
                FIBONACCI_ARRAY[FIBONACCI_ARRAY.length - 2]
        );
    }
    console.log(FIBONACCI_ARRAY[FIBONACCI_ARRAY.length - 1]);
    layers--;
    if (layers) {
        createFibonacciSequence(layers, entryNumber);
    }
}

createFibonacciSequence(10, 1);
