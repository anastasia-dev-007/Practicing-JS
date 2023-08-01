// Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((number) => {sum += number});
    return sum;
}

const result1 = sumArray([1, 2, 3, 4]);
console.log(result1);


// Write a function called reverseString that takes a string as input and returns the reversed version of that string.
const reverseString = (string) => {
    const charArr = string.split('');
    const reversedArray = charArr.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
}

const result2 = reverseString("Hello");
console.log(result2);

// Write a function called getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the input array. how?

const getEvenNumbers = (arr) => {
    const filteredArr = arr.filter((number) => number % 2 === 0);
    return filteredArr;
}

const result3 = getEvenNumbers([1,2,4,3,5,6,7,8,9,10]);
console.log(result3);


// Write a function called findMax that takes an array of numbers as input and returns the largest number in the array.
const findMax = (arr) => {
    let maxNumber = arr[0];
    for (let i = 1; i<arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

const result4 = findMax([1,2,4,3,5,20,7,8,9,10]);
console.log(result4);


// Write a function called calculateSquare that takes a number as input and returns the square of that number (i.e., the number multiplied by itself).

const calculateSquare = (number) => {
    const square = number*number;
    return square;
}

const result5 = calculateSquare(5);
console.log(result5);


// Write a function called reverseArray that takes an array as input and returns a new array with the elements reversed.
const reverseArray = (arr) => {
    const reversed = arr.reverse();
    return reversed;
}

const result6 = reverseArray([1,2,3,4,5,6]);
console.log(result6);

// Write a function called removeDuplicates that takes an array of numbers as input and returns a new array with duplicate elements removed, preserving the original order of the elements.

const removeDuplicates = (arr) => {
    const filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
    return filteredArr;
}

const result7 = removeDuplicates([1, 12, 12, 1, 122, 122, 5, 8, 5, 8]);
console.log(result7);



// Write a function called sumEvenNumbers that takes an array of numbers as input and returns the sum of all the even numbers in the array.
const sumEvenNumbers = (arr) => {
    const evenNumbers = arr.filter((number) => number % 2 === 0);
    const calcSum = evenNumbers.reduce((total, number) => total + number, 0);
    return calcSum;}
  

const result8 = sumEvenNumbers([1,2,3,4,5,6]);
console.log(result8);



// Write a function called capitalizeFirstLetter that takes a string as input and returns the same string with the first letter capitalized.

//Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

//Write a function called countVowels that takes a string as input and returns the count of vowels (i.e., the letters 'a', 'e', 'i', 'o', 'u') in the input string. Ignore the case of the letters (treat both uppercase and lowercase vowels as the same).