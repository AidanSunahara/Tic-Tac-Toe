document.getElementById("tr").addEventListener("click", () => { squareClicked("tr") });
document.getElementById("tc").addEventListener("click", () => { squareClicked("tc") });
document.getElementById("tl").addEventListener("click", () => { squareClicked("tl") });
document.getElementById("cr").addEventListener("click", () => { squareClicked("cr") });
document.getElementById("cc").addEventListener("click", () => { squareClicked("cc") });
document.getElementById("cl").addEventListener("click", () => { squareClicked("cl") });
document.getElementById("br").addEventListener("click", () => { squareClicked("br") });
document.getElementById("bc").addEventListener("click", () => { squareClicked("bc") });
document.getElementById("bl").addEventListener("click", () => { squareClicked("bl") });
var turn = 'X';
var numTurns = 0;
var check = Array(9);
check = check.fill(' ');
class Coord {
    // Members
    x;
    y;

    // Constructor
    constructor(param_x, param_y) {
        this.x = param_x;
        this.y = param_y;
    }
}
async function squareClicked(name) {
    const img = document.createElement("img");
    console.log(name);
    const coord = idc(name);
    // Check if there is already a piece there
    if (check[coord.x * 3 + coord.y] !== ' ') {
        alert("There is already a piece there d*****s!");
        return;
    }


    if (turn === 'X') {
        img.src = "/images/x.png";
        turn = 'O';
        check[coord.x * 3 + coord.y] = 'X';
        if (didWin() === 'X') {
            alert("X wins!");
        }
    }
    else {
        img.src = "/images/o.png";
        turn = 'X';
        check[coord.x * 3 + coord.y] = 'O';
        if (didWin() === 'O') {
            alert("O wins!");
        }

    }
    document.getElementById(name).appendChild(img);
    numTurns++;


    if (numTurns === 9 && didWin() === ' ') {
        alert("Draw");
    }
}

// Check row
function checkRow(row) {
    if ((check[0 * 3 + row] === check[1 * 3 + row]) && (check[1 * 3 + row] === check[2 * 3 + row])) {
        return check[row];
    } else {
        return ' ';
    }
}

// Check col
function checkCol(col) {
    if ((check[0 + col * 3] === check[1 + col * 3]) && (check[1 + col * 3] === check[2 + col * 3])) {
        return check[col * 3];
    } else {
        return ' ';
    }
}

// Check Down diag
function checkDownDiag() {
    if ((check[0 * 3 + 0] === check[1 * 3 + 1]) && (check[1 * 3 + 1] === check[2 * 3 + 2])) {
        return check[0 * 3 + 0];
    } else {
        return ' ';
    }
}

// Check up diag
function checkUpDiag() {
    if ((check[0 * 3 + 2] === check[1 * 3 + 1]) && (check[1 * 3 + 1] === check[2 * 3 + 0])) {
        return check[0 * 3 + 2];
    } else {
        return ' '
    }
}

function didWin() {
    for (var i = 0; i < 3; i = i + 1) {
        if (checkRow(i) !== ' ') {
            return checkRow(i);
        }
        if (checkCol(i) !== ' ') {
            return checkCol(i);
        }
    }
    if (checkUpDiag() !== ' ') {
        return checkUpDiag();
    }
    if (checkDownDiag() !== ' ') {
        return checkDownDiag();
    }

    return ' ';
}

function idc(name) {
    switch (name) {
        case "tl":
            return new Coord(0, 0);
        case "tc":
            return new Coord(1, 0);
        case "tr":
            return new Coord(2, 0);
        case "cl":
            return new Coord(0, 1);
        case "cc":
            return new Coord(1, 1);
        case "cr":
            return new Coord(2, 1);
        case "bl":
            return new Coord(0, 2);
        case "bc":
            return new Coord(1, 2);
        case "br":
            return new Coord(2, 2);
        default:
            alert("bad input");
            throw ("bad input");
    }

}
