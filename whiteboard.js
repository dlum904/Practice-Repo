function includeLetter(digits, letter) {
    let buttons = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    for (const digit of digits) {
        if (buttons[digit].includes(letter)) return true;
    }
    return false;
}

console.log(includeLetter([2,3], "f"))