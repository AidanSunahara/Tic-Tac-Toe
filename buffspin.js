var buffse = document.getElementById("buffse");

var angle = 0;

setInterval(buffspin, 10);

function buffspin()
{
  angle += 1;
  var theta = angle * Math.PI / 180;

  const W = 300;
  const H = (4 / 3) * W;
  const a = H - (H / Math.cos(theta))
  const b = a / Math.tan(theta);
  const c = Math.sqrt(a * a + b * b);
  const e = H * Math.tan(theta);
  const d = (W - e - c) * Math.tan(theta);


  buffse.style =
    ` margin-top: 45px; width: 300px; transform: rotate(${angle}deg); position: fixed; bottom: ${d}px; border: 2px solid red; `
  if (angle === 360)
  {
    angle = 0;
  }
}