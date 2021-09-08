// input = [
    // ["APPEND", "Hey you"],
    // ["APPEND", ".  How are you doin??"],
    // ["DELETE"]
    // ]
    //

function textEditor(input) {
    const command = input[0];

    let currStr = "";
    let currIdx = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i][0];
        
        if (command === "APPEND") {

        } else if (command === "DELETE") {

        } else if (command === "MOVE") {

        }
    }
}