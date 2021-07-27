function firstNonRepeatingCharacter(string) {
    let hash = new Map();
    for (let i = 0; i < string.length; i++) {
        if (!hash.has(string[i])) hash.set(string[i], []);
        hash.set(string[i], hash.get(string[i]).concat(i));
    }

    for (const val of hash.values()) {
        if (val.length < 2) return val[0];
    }
    return -1;
}