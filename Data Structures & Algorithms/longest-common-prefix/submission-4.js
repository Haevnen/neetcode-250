class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length == 1) {
            return strs[0];
        }

        for (let i = 0; i < strs[0].length; i++) {
            let c = strs[0][i];

            for (let j = 1; j < strs.length; j++) {
                if (i >= strs[j].length || c != strs[j][i]) {
                    return strs[0].slice(0, i);
                }
            }
        }
        return strs[0];
    }
}
