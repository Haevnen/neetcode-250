class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const dict = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (dict.size === 0 || !dict.has(target - nums[i])) {
                dict.set(nums[i], i);
            } else {
                return [dict.get(target-nums[i]), i];
            }
        }
    }
}
