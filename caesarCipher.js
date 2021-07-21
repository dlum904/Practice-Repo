function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const output = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < string.length; i++) {
        let newKey = (alphabet.indexOf(string[i]) + key) % 26;
        output.push(alphabet[newKey]);
    }
    return output.join("")
}