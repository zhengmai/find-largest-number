var numbers = [23, 56, 12, 93, 50, 67, 34, 78];

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }

    var largestNumber = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }

    return largestNumber;
}

var largestNumber = findLargestNumber(numbers);
console.log("The largest number is: " + largestNumber);