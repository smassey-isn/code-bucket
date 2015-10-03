/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length == 0) return 0;
    var sum = nums.reduce(function (n1, n2) { return n1+n2; });
    return Math.abs(sum - ((nums.length * (nums.length+1)) / 2));
};

var nums = [0,1,2,3,5,6];

missingNumber(nums);
