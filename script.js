// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

// Javascript Program to move all zeros to the end
const nums = [0, 1, 0, 3, 12];

function swap(nums, j, i) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function moveAllZeros(nums) {
  let j = 0;

  //   loop through the Array
  for (let i = 0; i < nums.length; i++) {
    // Checking if element is equal to zero
    if (nums[i] != 0) {
      // swap values
      swap(nums, j, i);
      j++;
    }
  }
  console.log(nums);
}
moveAllZeros(nums);
