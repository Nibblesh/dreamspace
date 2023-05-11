//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (i.e. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

const vowels = 'aeiou';
const letterChanges = (string) => {
    let changedString = '';

    for (let index = 0; index < string.length; index++) {
        const currentLetter = string[index];
        const currentLetterIndex = alphabet.indexOf(currentLetter);
        const newLetter = currentLetterIndex === 25 ? alphabet[0] : alphabet[currentLetterIndex + 1];
        changedString = changedString + (vowels.includes(newLetter) ? newLetter.toUpperCase() : newLetter);
    }


    return changedString
}

console.log(letterChanges('abcz'));
