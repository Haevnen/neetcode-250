class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length == 1) {
            return strs[0];
        }

        let commonPref = "";

        for (let i = 0; i < strs[0].length; i++) {
            let c = strs[0][i];

            for (let j = 1; j < strs.length; j++) {
                if (i >= strs[j].length || c != strs[j][i]) {
                    return commonPref;
                }
            }
            commonPref += c;
        }
        return commonPref;
    }
}
