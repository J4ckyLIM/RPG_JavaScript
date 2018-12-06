// Caractéristique du personnage
var hero = {
    strength: 10,
    agility: 10,
    stamina: {
        max_health: 100,
        health: 100,
    },
    name: "",
    inventory : [],
    gold: 0,
};

// Bouton play (projetRPG.html) 
/*document.getElementById('start').addEventListener('click', play);

function play(){
    document.getElementById('');
}*/

// Potion de soin + click bouton 
document.getElementById('healthPot').addEventListener('click', healingPot);

function healingPot(){
    var hp = hero.stamina.health+= 20;
    console.log(hp);
}
// Potion de force + click bouton
document.getElementById('strPot').addEventListener('click', strengthPot);

function strengthPot(){
    var str = hero.strength+=1;
    console.log(str);
}

// Potion d'endurance + bouton
document.getElementById('healthPot').addEventListener('click', staminaPot);
function staminaPot(){
    var sta = hero.stamina.max_health+= 1;
    console.log(sta);
}

// Potion d'agilité + click bouton
document.getElementById('agiPot').addEventListener('click', agilityPot);

function agilityPot(){
    var agi = hero.agility+= 1;
    console.log(agi);
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
    monster.name[Math.floor(Math.random()*2)];
}

// Creation du shop + item dans le shop



// Bouton d'accès au shop

document.getElementById('shopButton').addEventListener('click', shopAccess);

function shopAccess(){
    
}

// Creation de la fonction d'attaque + click bouton

document.getElementById('attackButton').addEventListener('click', attack);

/*function attack(){
    for(var hp of Object.keys())
*/