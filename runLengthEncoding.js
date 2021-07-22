function runLengthEncoding(string) {
    // Write your code here.
    let encoded = ""
    let num = 1;
    for (let i = 1; i <= string.length; i++) {
        if ((string[i] === string[i - 1]) && num < 9) {
            num += 1;
        } else {
            encoded += num.toString() + string[i - 1];
            num = 1;
        }
    }
    return encoded;
}