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
class Coord 
{
    // Members
    x;
    y;

    // Constructor
    constructor(param_x,param_y){
        this.x = param_x;
        this.y = param_y;
    }
}
async function squareClicked(name) {
    const img = document.createElement("img");
    console.log(name);
    const coord = idc(name);

    
    if (turn === 'X')
    {
        img.src = "/images/x.png";
        turn = 'O';
        check[(coord.x*3)+coord.y] = 'X';
        console.log(coord);
        console.log(check);
    }
    else 
    {
        img.src = "/images/o.png";
        turn = 'X';
        check[(coord.x*3)+coord.y] = 'O';
        console.log(coord);
        console.log(check);
    }
    document.getElementById(name).appendChild(img);
    numTurns++;
    
    
    if (numTurns === 9 && !didWin())
    {
        await new Promise(r => setTimeout(r, 1000));
        alert("Draw");
    }
  }

function didWin()
{
    if (check[0] == 'X' && check[1] == 'X' && check[2] == 'X'){

    }

}

function idc(name){
    switch(name){
        case "tl":
            return new Coord(0,0);
        case "tc":
            return new Coord(1,0);  
        case "tr":
            return new Coord(2,0);
        case "cl":
            return new Coord(0,1);
        case "cc":
            return new Coord(1,1);
        case "cr":
            return new Coord(2,1);
        case "bl":
            return new Coord(0,2);
        case "bc":
            return new Coord(1,2);
        case "br":
            return new Coord(2,2);
        default:
            alert("bad input");
            throw("bad input");
    }

}
