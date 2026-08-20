class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let n of nums) {
            if (map.has(n)) {
                return true;
            }
            map.set(n, true);
        }
        return false;
    }
}
