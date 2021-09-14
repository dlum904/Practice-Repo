
// ‘AAAABBBCCD’ => ‘4A3B2C1D’
// ‘4332221111’ => ‘14233241’

function runLengthEncoding (string) {

    let count = 1;
    let encodedString = []
    for (let i = 1; i <= string.length; i++) {
        let prevChar = string[i - 1];
        let char = string[i];
        if (prevChar !== char) {
            encodedString.push(count);
            encodedString.push(prevChar);
            count = 1;
        } else {
            count += 1;
        }
    }
    return encodedString.join("");
}

console.log(runLengthEncoding("AAAABBBCCD"))
console.log(runLengthEncoding("4332221111"))


// “Take what works for you!” => “you! for works what Take”
function reverseWord(string) {

}

// console.log(reverseWord("Take what works for you!"))