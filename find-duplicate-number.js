var nums = [6, 4, 10, 2, 3, 9, 121, 542, 1, 11, 10];
// O(n) worst case time complexity
function findDuplicate(nums) {
    var i;
    nums.sort();
    for (i = 0; i < nums.length; ++i) {
        if (typeof nums[i+1] == 'number' && nums[i] == nums[i+1]) {
            return nums[i];
        }
    }
    return -1;
}
findDuplicate(nums);
