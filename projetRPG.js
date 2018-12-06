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
/*document.getElementById('start').addEventListener('click', checkName);
function checkName(){
    var verifName = document.getElementById('charName').value;

    if(verifName == null){
        document.getElementById('errorName').innerHTML = "Veuillez rentrer un nom pour jouer.";
    }
    else{
        document.getElementById('start').href = "./aventureRPG.html";
    }
}*/

// Interface HP pour joueur et monstre /!\ A FINIR /!\
function displayHeroHP(){
    document.getElementById('heroHP').innerHTML = '<img src="https://opengameart.org/sites/default/files/styles/medium/public/heart_3.png": />' + hero.stamina.health + "/" + hero.stamina.max_health;
}
function displayMonsterHP(){
    document.getElementById('monsterHP').innerHTML = '<img src="https://opengameart.org/sites/default/files/styles/medium/public/heart_3.png": />' + monster.stamina.health + "/" + monster.stamina.max_health;
}

// Interface statistique pour joueur et monstres

function displayHeroStats(){
    document.getElementById('heroStatsHUD').innerHTML = '<li>💪 ' + hero.strength + '</li>' + '<li>🤸 ' + hero.agility + '</li>' + '<li>❤️ ' + hero.stamina.max_health + '</li>' + '<li>💵 ' + hero.gold + '</li>';
}

function displayMonsterStats(){
    document.getElementById('monsterStatsHUD').innerHTML = '<li>💪 ' + monster.strength + '</li>' + '<li>❤️ ' + monster.stamina.max_health + '</li>';
}
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

/*document.getElementById('shopButton').addEventListener('click', shopAccess);

function shopAccess(){
    
}*/

// Creation de la fonction d'attaque du héros + click bouton

document.getElementById('attack').addEventListener('click', heroAttack);

function heroAttack(){
    monster.stamina.health -= hero.strength;
    if(monster.stamina.health > 0){
        displayMonsterHP();
        document.getElementById('msgFight').innerHTML = 'Vous avez infligé ' + hero.strength + ' dégats au monstre';
    }
    else{
        document.getElementById('msgFight').innerHTML = 'Félicitations, vous avez vaincu le monstre. Vous avez accès à la boutique!';
    }
    console.log(monster.stamina.health);
}
 
// Creation de la fonction d'attaque du monstre 

function monsterAttack(){
    hero.stamina.health -= monster.strength;
    console.log(hero.stamina.health);
}
