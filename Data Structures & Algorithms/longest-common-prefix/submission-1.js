class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length == 1) {
            return strs[0];
        }

        const getLength = function() {
            let arrLen = [];
            for (let str of strs) {
                arrLen.push(str.length);
            }
            return arrLen
        }

        const minLength = Math.min(...getLength());
        // console.log(minLength);
        let freq = new Array(26).fill(0);
        let commonPref = "";

        for (let i = 0; i < minLength; i++) {
            let c = strs[0].charCodeAt(i);
            // console.log(c);

            for (let str of strs) {
                freq[str.charCodeAt(i) - 97]++;
            }
            
            if (freq[c - 97] != strs.length) {
                break;
            }
            commonPref += strs[0][i];
            freq[c-97] = 0;
        }
        
        return commonPref;
    }
}
