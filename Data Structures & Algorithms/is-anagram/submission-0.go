func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    // Make create slice, not array
    letters := make([]int, 27)
    for i := 0; i < len(s); i++ {
        letters[s[i] - 'a']++;
        letters[t[i] - 'a']--;
    }

    for i := 0; i < 27; i++ {
        if letters[i] != 0 {
            return false
        }
    }

    return true
}
