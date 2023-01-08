//Brian's Branch
class BoardArr {
    // Member
    pieces;

    // Ctor
    constructor() {
        this.pieces = Array(9).fill(' ');
    }

    // Accessor
    read(x, y) {
        return this.pieces[x * 3 + y];
    }

    // Writer
    write(x, y, letter) {
        this.pieces[x * 3 + y] = letter;
    }
}
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
var board = new BoardArr();


async function squareClicked(name) {
    const img = document.createElement("img");
    console.log(name);
    const coord = idc(name);
    // Check if there is already a piece there
    if (board.read(coord.x, coord.y) !== ' ') {
        alert("There is already a piece there d*****s!");
        return;
    }


    if (turn === 'X') {
        img.src = "/images/x.png";
        turn = 'O';
        board.write(coord.x, coord.y, 'X');
        if (didWin() === 'X') {
            setTimeout(() => { alert("X wins!") }, 1);
        }
    }
    else {
        img.src = "/images/o.png";
        turn = 'X';
        board.write(coord.x, coord.y, 'O');
        if (didWin() === 'O') {
            setTimeout(() => { alert("O wins!") }, 1);
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
    if ((board.read(0, row) === board.read(1, row)) && (board.read(1, row) === board.read(2, row))) {
        return board.read(0, row);
    } else {
        return ' ';
    }
}

// Check col
function checkCol(col) {
    if ((board.read(col, 0) === board.read(col, 1)) && (board.read(col, 1) === board.read(col, 2))) {
        return board.read(col, 0);
    } else {
        return ' ';
    }
}

// Check Down diag
function checkDownDiag() {
    if ((board.read(0, 0) === board.read(1, 1)) && (board.read(1, 1) === board.read(2, 2))) {
        return board.read(0, 0);
    } else {
        return ' ';
    }
}

// Check up diag
function checkUpDiag() {
    if ((board.read(0, 2) === board.read(1, 1)) && (board.read(1, 1) === board.read(2, 0))) {
        return board.read(0, 2);
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
