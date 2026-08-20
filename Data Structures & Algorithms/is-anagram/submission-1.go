func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    // Make create slice, not array
    letters := [26]int{}
    for i := 0; i < len(s); i++ {
        letters[s[i] - 'a']++;
        letters[t[i] - 'a']--;
    }

    for i := 0; i < 26; i++ {
        if letters[i] != 0 {
            return false
        }
    }

    return true
}
