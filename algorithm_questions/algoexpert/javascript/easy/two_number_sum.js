/*
    Write a function that takes in a non-empty array of distinct integers and an
    integer representing a target sum. If any two numbers in the input array sum
    up to the target sum, the function should return them in an array, in any
    order. If no two numbers sum up to the target sum, the function should return
    an empty array.

    Note that the target sum has to be obtained by summing two different integers
    in the array; you can't add a single integer to itself in order to obtain the
    target sum.

    You can assume that there will be at most one pair of numbers summing up to
    the target sum.
*/

// Solution 1. O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
	var firstNumPointer, secondNumPointer;
	for (firstNumPointer = 0; firstNumPointer < array.length-1; ++firstNumPointer) {
		for (secondNumPointer = firstNumPointer + 1; secondNumPointer < array.length; ++secondNumPointer) {
			if((array[firstNumPointer] + array[secondNumPointer]) == targetSum)
				return [array[firstNumPointer], array[secondNumPointer]]
		}
	}	
}

//Solution 2. O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
	const valuesSeenInArray = {}
  for (const num of array) {
		var matchingAddend = targetSum - num;
		if (matchingAddend in valuesSeenInArray) {
			return [matchingAddend, num]
		}
		else {
			valuesSeenInArray[num] = true;
		}
	}
	return []
}

