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
  "Obama"
];

const legendaries = [
  "UltrazRath",
  "DatManOP",
  "Nick5Ever",
  "Player"
];

const mythics = [
  "Jarred Emilio Welsh",
];

var allNames = Array();

commons.forEach(element => {
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
});

rares.forEach(element => {
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
});

epics.forEach(element => {
  allNames.push(element);
  allNames.push(element);
  allNames.push(element);
});

legendaries.forEach(element => {
  allNames.push(element);
  allNames.push(element);
})

mythics.forEach(element => {
  allNames.push(element);
});

var rand = Math.random();
rand *= allNames.length;
rand = Math.floor(rand);

const theName = allNames[rand];

document.getElementById("soTarget").innerText = theName;
if (rares.includes(theName)) {
  document.getElementById("soTarget").style = "color: aqua";
}
if (epics.includes(theName)) {
  document.getElementById("soTarget").style = "color: #ad73ff";
}
if (legendaries.includes(theName)) {
  document.getElementById("soTarget").style = "color: orange";
}
if (mythics.includes(theName)) {
  document.getElementById("soTarget").className = "rainbow";
}