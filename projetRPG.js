// Caractéristique du personnage
var hero = {
    name: "",
    strength: 10,
    agility: 10,
    stamina: {
        max_health: 100,
        health: 100,
    },
    inventory: {
        lootPot: 0
    },
    gold: 0
};

// Caractéristique des monstres 

var monster = {
    name:['macron','BAMMMBBOUU','Petdjarno'],
    stamina: {
        max_health: 11,
        health: 11,
    },
    strength: 5,
};
// Boutique
var shopInventory = {
    strengthPotion: {
        price: 2
    },
    agilityPotion: {
        price: 2
    },
    staminaPotion: {
        price: 2
    },
    healingPotion: {
        price: 5
    }
}


// Fonction verification du nom + bouton play /!\ A MODIFIER!! NE FONCTIONNE PAS /!\


// Interface HP pour joueur et monstre /!\ A FINIR /!\
function displayHeroHP(){
    document.getElementById('heroHP').innerHTML = 'Vie: ' + hero.stamina.health + "/" + hero.stamina.max_health;
}
displayHeroHP();

function displayMonsterHP(){
    document.getElementById('monsterHP').innerHTML = 'Vie: ' + monster.stamina.health + "/" + monster.stamina.max_health;
}
displayMonsterHP();

// Interface statistique pour joueur et monstres

function displayHeroStats(){
    document.getElementById('heroStatsHUD').innerHTML = '<li>💪 ' + hero.strength + '</li>' + '<li>🤸 ' + hero.agility + '</li>' + '<li>❤️ ' + hero.stamina.max_health + '</li>' + '<li>💵 ' + hero.gold + '</li>';
}
displayHeroStats();

function displayMonsterStats(){
    document.getElementById('monsterStatsHUD').innerHTML = '<li>💪 ' + monster.strength + '</li>' + '<li>❤️ ' + monster.stamina.max_health + '</li>';
}
displayMonsterStats();

// Potion de soin + click bouton 
//document.getElementById('healthPot').addEventListener('click', healingPot);

function healingPot(){
    var hp = hero.stamina.health+= 20;
    console.log(hp);
}
// Potion de force + click bouton
//document.getElementById('strPot').addEventListener('click', strengthPot);

function strengthPot(){
    var str = hero.strength+=1;
    console.log(str);
}

// Potion d'endurance + bouton
//document.getElementById('healthPot').addEventListener('click', staminaPot);
function staminaPot(){
    var sta = hero.stamina.max_health+= 1;
    console.log(sta);
}

// Potion d'agilité + click bouton
//document.getElementById('agiPot').addEventListener('click', agilityPot);

function agilityPot(){
    var agi = hero.agility+= 1;
    console.log(agi);
}

// Fonction de selection de monstre de manière aléatoire

function randomMonster(){
    monster.name[Math.floor(Math.random()*2)];
}

// Creation du shop + item dans le shop



// Bouton d'accès au shop

function shopAccess(){
    
}

// Creation de la fonction d'attaque du héros + click bouton
function linkButton(){
    document.getElementById('attack').addEventListener('click', heroAttack);
}
linkButton();
function heroAttack(){
    document.getElementById('divAttack').innerHTML = '<button id="attack">Attaquer</button>';
    monster.stamina.health -= hero.strength;
    if(monster.stamina.health > 0){
        displayMonsterHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez infligé ' + hero.strength + ' dégats au monstre';
        document.getElementById('divAttack').innerHTML = '';
        var timer;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            monsterAttack();
        }, 2500);
    }
    else{
        displayMonsterHP();
        document.getElementById('msgFight').innerHTML = 'Félicitations, vous avez vaincu le monstre.';
        loot();
    }
    console.log(monster.stamina.health);
}
 
// Creation de la fonction d'attaque du monstre 

function monsterAttack(){
    hero.stamina.health -= monster.strength;
    if(hero.stamina.health > 0){
        displayHeroHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez subis ' + monster.strength + ' dégats';
        document.getElementById('divAttack').innerHTML = '<button id="attack">Attaquer</button>';
        linkButton();
    }
    else{
        displayHeroHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez perdu, sale nul de merde';
    }
}

//Loot après le combat
function loot(){
    hero.gold += 3;
    dropChance();
    if(dropChance() == true){
        hero.inventory.lootPot + 1;
    }
    else{
        hero.inventory.lootPot = hero.inventory.lootPot;
    }
    console.log(dropChance());
}
function dropChance(){
    var chanceHero = 10 / 100;
    var chanceLose = Math.random().toFixed(1);
    if(chanceHero < chanceLose){
        return true;
    }
    else{
        return false;
    }
}