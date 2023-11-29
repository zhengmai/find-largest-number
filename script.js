
var numbers = [23, 56, 12, 93, 45, 67, 34, 78];

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

function showLargestNumber() {
    var largestNumber = findLargestNumber(numbers);
    var resultElement = document.getElementById("result");

    if (largestNumber !== null) {
        resultElement.textContent = "The largest number is: " + largestNumber;
    } else {
        resultElement.textContent = "The array is empty.";
    }
}