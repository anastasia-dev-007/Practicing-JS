// Binary Function
// Function shows the index position of number in an array in max 30 trials.

function binarySearch(array, number) {
    let start = 0;
    let end = array.length-1;

    while (start <= end) {
        const midIndex = Math.round((start + end) / 2);
        const midNumber = array[midIndex];

        if (midNumber === number) {
            return midIndex;
        }

        if(midNumber < number) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));