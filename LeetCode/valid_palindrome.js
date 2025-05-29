function isPalindrome() {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = [...clean].reverse().join('');
    return reversed === clean;

}
// const s = 'A man, a plan, a canal: Panama';
const s = 'race a car';
console.log(isPalindrome(s));
