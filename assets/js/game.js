// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var fight = function(enemy) {

  while(enemy.health > 0 && playerInfo.health > 0) {
    // Alert players that they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this Battle? Enter FIGHT or SKIP to choose.");
    
    console.log(promptFight)

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack)
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    // if player choses to skip
  } if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money)
      break;
    }

    else{
        fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
  }
}

var startGame = function () {

  playerInfor.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators!" + ( i +1 ) );
      var pickedEnemyObj = enemyInfo[i];
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        var storeConfirm =  window.confirm("The fight is over, visit the store before the next round?");
        
        if (storeConfirm) {
          shop();
        }
      }
      pickedEnemyObj = randomNumber (40, 60);
    }
    else {
      window.alert("You have lost your robot in battle! Game over!")
      break;
    }
  }
    endGame();
}
var endGame = function () {
  if (playerInfo.health > 0) {
    window.alert("Greath job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE', to make a choice."
  );

  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerInfo.money >= 7) {
        window.alert("Refilling the player's health by 20 for 7 dollars.");
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      }

      else {
        window.alert("You don't have enough money!");
      }

      break;
    
    case "upgarde":
    case "UPGRADE":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.")
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!")
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      break;
  }
};

var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  startGame();
}

else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!")
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min;

  return value
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10

  reset: function() {
    this.health = 100
    this.money = 10
    this.attack = 10
  }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health)

var enemeyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];
startGame();