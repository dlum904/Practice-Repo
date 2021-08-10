function spiralTraverse(array) {
    // Write your code here.
    const output = [];
    let startRow = 0;
    let startCol = 0;

    let endRow = array.length - 1;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // TOP
        for (let i = startCol; i <= endCol; i++) {
            output.push(array[startRow][i]);
        }

        // RIGHT
        for (let i = startRow + 1; i <= endRow; i++) {
            output.push(array[i][endCol]);
        }

        // BOTTOM
        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) break;
            output.push(array[endRow][i])
        }

        //LEFT
        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) break;
            output.push(array[i][startCol]);
        }
        startRow++
        startCol++
        endRow--
        endCol--
    }
    return output;
}


// [
//     [ 1  2  3  4],
//     [12 13 14  5],
//     [11 16 15  6],
//     [10  9  8  7]
// ]


// a[0][0], a[0][1], a[0][2], a[0][3]	TOP - [keep starting Row][incriment until reach ending Col]

// a[1][3], a[2][3], a[3][3]	RIGHT - [incriment until reach ending Row][keep ending Col]

// a[3][2], a[3][1], a[3][0]	BOTTOM - [keep ending Row][decriment until reach starting Col]


// a[2][0].a[1][0]	LEFT

// a[1][1], a[1][2]	TOP



// a[2][2]	RIGHT

// a[2][1] BOTTOM