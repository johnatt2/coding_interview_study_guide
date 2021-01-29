/*
    Given two non-empty arrays of integers, write a function that determines
    whether the second array is a subsequence of the first one.

    A subsequence of an array is a set of numbers that aren't necessarily adjacent
    in the array but that are in the same order as they appear in the array. For
    instance, the numbers [1, 3, 4] form a subsequence of the array [1 , 2, 3, 4], and so do
    the numbers [2, 4]. Note that a single number in an array and the array itself are both
    valid subsequences of the array

    Sample Input:
    array = [5, 1, 22, 25, 6, -1, 8, 10]
    sequence = [1, 6, -1, 10]

    Sample Output:
    true
*/

// Solution 1. 
// O(n^2) time | O(n) space
const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

function isValidSubsequence(array, sequence) {
    var resultArray = [];
    for (const num of array) {
        if (sequence.includes(num) 
						&& resultArray.length < sequence.length) {
            resultArray.push(num);
        }
    }
    return equals(resultArray,sequence);
}

// Solution 2. Don't save an array in memory
// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
    var sequenceIndex = [];
    for (const num of array) {
        if (sequenceIndex === sequence.length) break;
        if (sequence[sequenceIndex] === num) ++sequenceIndex;
    }
    return sequenceIndex === sequence.length;
}
