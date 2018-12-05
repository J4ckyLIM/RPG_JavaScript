// Caractéristique du personnage
var hero = {
    strength: 10,
    agility: 10,
    health: 100,
    name: "",
    inventory : [],
    gold: "",
};

// Bouton play (projetRPG.html) 
document.getElementById('start').addEventListener('click', play);

function play(){
    console.log(hero);
}

// Potion de soin + bouton 
document.getElementById('healthPot').addEventListener('click', healingPot);

function healingPot(){
    for(let hp of Object.keys(hero.health)){
        parseInt(hp)+20;
        console.log();
    }
}
// Potion de force + bouton
document.getElementById('strPot').addEventListener('click', strengthPot);

function healingPot(){
    for(let str of Object.keys(hero.strength)){
        parseInt(str)+20;
        console.log();
    }
}

// Potion d'endurance + bouton
/*document.getElementById('healthPot').addEventListener('click', )
function healingPot(){
    for(let hp of Object.keys(hero.health)){
        parseInt(hp)+20;
        console.log();
    }
}
*/

// Potion d'agilité + bouton
document.getElementById('agiPot').addEventListener('click', agilityPot);

function agilityPot(){
    for(let agi of Object.keys(hero.agility)){
        parseInt(agi)+20;
        console.log();
    }
}
// Caractéristique du monstre 1
var macron = {
    strength: 5,
    stamina: 7,
    health: stamina,
}
// Caractéristique du monstre 2
var gilletJaune = {
    strength: 5,
    stamina: 7,
    health: stamina,
}
// Caractéristique du monstre 3
var trump = {
    strength: 5,
    stamina: 7,
    health: stamina,
}
