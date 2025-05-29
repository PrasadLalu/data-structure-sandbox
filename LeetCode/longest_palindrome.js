function checkPal(s, low, high) {
    while(low < high) {
        if (s[low] !== s[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
}

function longestPalindrome(s) {
    let n = s.length;
    let start = 0;
    let maxLength = 1;

    for (let i=0; i<n; i++) {
        for (let j=i; j<n; j++) {
            if (checkPal(s, i, j) && (j-i+1) > maxLength) {
                start = i;
                maxLength = (j-i+1);
            }
        }
    }
    return s.substring(start, start+maxLength);
}

const str = 'babad';
console.log(longestPalindrome(str));
