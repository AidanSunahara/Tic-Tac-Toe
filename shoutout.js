// Jack's branch

const commons = [
  "Liam",
  "Dat",
  "Aidan",
  "Nick",
  "Thomas L.",
  "Jose",
  "John",
  "Shinjin",
  "Ethan",
  "Brian",
  "Ani",
  "Doran",
  "Parker"
];

const rares = [
  "Findax",
  "BloodOS",
  "SoulArrow",
  "Barrelhed",
  "TheGreenPhoenix",
  "DatGuyOP",
  "Jarred",
  "TheFunnyMewy",
  "Green Plane",
  "Ace of Spades",
  "Vaniikan"
];

const epics = [
  "Nick4Ever",
  "Thomas W.",
  "ultrashinjin",
  "Carrydax",
  "TheFakeJew",
  "Obama",
  "Lil Poon"
];

const legendaries = [
  "UltrazRath",
  "DatManOP",
  "Nick5Ever",
  "Player",
  "Lil Pdawwg"
];

const mythics = [
  "Jarred Emilio Welsh",
  "Liam Hiroshi Harambe Howard III III V"
];

const secretRares = [
  "The Jozoth 12"
];

const commonChance = 0.6;          // 0.6
const rareChance = 0.3;            // 0.9
const epicChance = 0.07;           // 0.97
const legendaryChance = 0.02       // 0.99
const mythicChance = 0.009         // 0.999
const secretRareChance = 0.001     // 1

var rand = Math.random();
var theName;

function pickRandFrom(arr)
{
  var ran = Math.random();
  ran *= arr.length;
  ran = Math.floor(ran);
  return arr[ran];
}

if (rand < commonChance)
{ // Common
  theName = pickRandFrom(commons);
} else if (rand < (commonChance + rareChance))
{ // Rare
  theName = pickRandFrom(rares);
  document.getElementById("soTarget").style = "color: aqua";
} else if (rand < (commonChance + rareChance + epicChance))
{ // Epic
  theName = pickRandFrom(epics);
  document.getElementById("soTarget").style = "color: #ad73ff";
} else if (rand < (commonChance + rareChance + epicChance + legendaryChance))
{ // Legendary
  theName = pickRandFrom(legendaries);
  document.getElementById("soTarget").style = "color: orange";
} else if (rand < (commonChance + rareChance + epicChance + legendaryChance + mythicChance))
{ // Mythic
  theName = pickRandFrom(mythics);
  document.getElementById("soTarget").className = "rainbow";
  alert("Mythic found!");
} else
{ // Secret Rare
  theName = pickRandFrom(secretRares);
  document.getElementById("soTarget").className = "rainbow big";
  alert("Secret Rare found!");
}

document.getElementById("soTarget").innerText = theName;