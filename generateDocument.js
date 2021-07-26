function generateDocument(characters, document) {
    // Write your code here.

    let map = new Map();

    for (let i = 0; i < characters.length; i++) {
        if (!map.has(characters[i])) map.set(characters[i], 0);
        map.set(characters[i], map.get(characters[i]) + 1)
    }

    for (let j = 0; j < document.length; j++) {
        if (!map.has(document[j]) || map.get(document[j]) === 0) return false;
        map.set(document[j], map.get(document[j]) - 1);
    }

    return true;
}