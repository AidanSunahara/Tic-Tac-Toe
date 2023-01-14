var buffse = document.getElementById("buffse");

setInterval(buffspin, 10)

var angle = 0;

function buffspin()
{
  var theta = angle * Math.PI / 180;

  var subangle = angle;

  if (angle >= 270)
  {
    subangle = (270 - (subangle - 270));
  }
  if (angle >= 180)
  {
    subangle = (180 - (subangle - 180));
  }
  if (angle >= 90)
  {
    subangle = (90 - (subangle - 90));
  }

  var theta = subangle * Math.PI / 180;


  const W = 150;
  const H = (4 / 3) * W;
  const r = Math.sqrt(H * H + W * W);
  const del = Math.atan(W / H) - theta;
  const ry = r * Math.cos(del);
  var offset = ry - H;





  buffse.style =
    ` margin-top: 45px; width: 300px; transform: rotate(${angle}deg); position: fixed; bottom: ${offset}px; `

  angle += 1;

  if (angle === 359)
  {
    angle = 0;
  }
}