// Caractéristique du personnage
var hero = {
    strength: 10,
    agility: 10,
    health: 100,
    name: "",
    inventory: "",
    gold: "",
};

document.getElementById('start').addEventListener('click', play);

function play(){
    console.log(hero);
}

// Potion de soin
function healthPot(){
    for(let hp of Object.keys(hero.health)){
        parseInt(hp)+20;
        console.log();
    }
}
// Potion de force

// Potion d'endurance
// Potion d'agilité
// Caractéristique du monstre 1
// Caractéristique du monstre 2
// Caractéristique du monstre 
