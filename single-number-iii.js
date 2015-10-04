/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var cache = {},
        i = 0,
        l = nums.length,
        y = l-1,
        p,
        r = [];

    for (; i < l; ++i) {
        if (typeof cache[nums[i]] == 'undefined') {
            cache[nums[i]] = 0;
        }
        cache[nums[i]]++;
        if (y == i) {
            for (p in cache) {
                if (1 == cache[p]) {
                    r.push(p>>0);
                }
            }
        }
    }
                
    return r;
};

var nums = [0, -1];

console.log(singleNumber(nums));

