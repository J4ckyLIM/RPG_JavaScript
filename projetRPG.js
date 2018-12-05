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
/*document.getElementById('start').addEventListener('click', play);

function play(){
    document.getElementById('');
}*/

// Potion de soin + click bouton 
document.getElementById('healthPot').addEventListener('click', healingPot);

function healingPot(){
    for(let hp of Object.keys(hero.health)){
        parseInt(hp)+20;
        console.log();
    }
}
// Potion de force + click bouton
document.getElementById('strPot').addEventListener('click', strengthPot);

function healingPot(){
    for(let str of Object.keys(hero.strength)){
        parseInt(str)+1;
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

// Potion d'agilité + click bouton
document.getElementById('agiPot').addEventListener('click', agilityPot);

function agilityPot(){
    for(let agi of Object.keys(hero.agility)){
        parseInt(agi)+1;
        console.log();
    }
}
// Caractéristique des monstres 
var monster= {
    name:['macron','BAMMMBBOUU','Petdjarno'],
    strength: 5,
    stamina: 7,
    health: stamina,
}

// Fonction de selection de monstre de manière aléatoire

function randomMonster(){
    monster.name[Math.floor(Math.random()*3);]
}

// Creation du shop + item dans le shop



// Bouton d'accès au shop

document.getElementById('shopButton').addEventListener('click', shopAccess);

function shopAccess(){
    
}

// Creation de la fonction d'attaque + click bouton

document.getElementById('attackButton').addEventListener('click', attack);

function attack(){
    for(var hp of Object.keys())
}