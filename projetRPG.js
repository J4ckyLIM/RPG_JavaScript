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

// Fonction d'affichage du shop

function linkShopButton(){
    document.getElementById('shop').addEventListener('click',displayShop);
}


function displayShop(){
    document.getElementById('commands').innerHTML = '';
    document.getElementById('commands').innerHTML = '<button id="inventory">Acceder à l\'inventaire</button>';
    document.getElementById('fightLog').innerHTML = '';
    document.getElementById('fightLog').innerHTML = '<div id="shopDisplay"></div>';
    document.getElementById('shopDisplay').innerHTML =  '<i class="pots" id ="healingPot"></i>'; //LIER LES ID AUX IMAGES DE POTIONS
    document.getElementById('shopDisplay').innerHTML =  '<i class="pots" id ="strengthPot"></i>';
    document.getElementById('shopDisplay').innerHTML =  '<i class="pots" id ="agilityPot"></i>';
    document.getElementById('shopDisplay').innerHTML =  '<i class="pots" id ="staminaPot"></i>';
    document.getElementById('healingPot').addEventListener('click',buyingFunction);
    document.getElementById('strengthPot').addEventListener('click',buyingFunction);
    document.getElementById('agilityPot').addEventListener('click',buyingFunction);
    document.getElementById('staminaPot').addEventListener('click',buyingFunction);
}

// Fonction d'affichage de l'inventaire

function displayInventory(){
    document.getElementById('inventory').innerHTML = 
}

// Bouton d'accès au shop

function shopAccess(){  
    document.getElementById('commands').innerHTML = '<button id="shop">Acceder à la boutique</button>';
    linkShopButton();
}

// fonction d'attaque du héros + click bouton
function linkAttackButton(){
    document.getElementById('attack').addEventListener('click', heroAttack);
}
linkAttackButton();
function heroAttack(){
    document.getElementById('divAttack').innerHTML = '<button id="attack">Attaquer</button>';
    monster.stamina.health -= hero.strength;
    if(monster.stamina.health > 0){
        displayMonsterHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez infligé ' + hero.strength + ' dégats au monstre';
        document.getElementById('divAttack').innerHTML = '@';
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
        shopAccess();
    }
    console.log(monster.stamina.health);
}
 
// fonction d'attaque du monstre 

function monsterAttack(){
    hero.stamina.health -= monster.strength;
    if(hero.stamina.health > 0){
        displayHeroHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez subis ' + monster.strength + ' dégats';
        document.getElementById('divAttack').innerHTML = '<button id="attack">Attaquer</button>';
        linkAttackButton();
    }
    else{
        displayHeroHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez perdu!';
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
