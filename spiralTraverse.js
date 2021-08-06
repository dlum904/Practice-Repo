function spiralTraverse(array) {
    // Write your code here.
    let startingRow = 0;
    let startingCol = 0;

    let endingRow = array.length - 1;
    let endingCol = array.length - 1;


}



// a[0][0], a[0][1], a[0][1], a[0][2], a[0][3]	TOP - [keep starting Row][incriment until reach ending Col]

// a[1][3], a[2][3], a[3][3]	RIGHT - [incriment until reach ending Row][keep ending Col]

// a[3][2], a[3][1], a[3][0]	BOTTOM - [keep ending Row][decriment until reach starting Col]

// a[2][0].a[1][0]	LEFT

// a[1][1], a[1][2]	TOP

// a[2][2]	RIGHT

// a[2][1] BOTTOM