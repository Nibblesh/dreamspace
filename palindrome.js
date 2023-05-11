// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Ignore punctuation and numbers, take into consideration only alphabet letters (a-z).

const isPalindrome = (string) => {
    const cleanedString = string.replace(/[^a-zA-Z]/gi, '');

    const checkIndexes = Math.ceil(cleanedString.length / 2);
    for (let index = 0; index < checkIndexes; index++) {
        if(cleanedString[index] !== cleanedString[cleanedString.length - index -1]) {
            return 'false'
        }
    }
    return 'true'
} 

console.log(isPalindrome(''));
