// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"]

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function(enemyName) {

  while(enemyHealth > 0 && playerHealth > 0) {
    // Alert players that they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this Battle? Enter FIGHT or SKIP to choose.");
    
    console.log(promptFight)

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
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

  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators!" + ( i +1 ) );
      var pickedEnemyName = enemyNames[i]
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length -1) {
        var storeConfirm =  window.confirm("The fight is over, visit the store before the next round?");
        
        if (storeConfirm) {
          shop();
        }
      }
      enemyHealth = 50;
    }
    else {
      window.alert("You have lost your robot in battle! Game over!")
      break;
    }
  }
    endGame();
}
var endGame = function () {
  if (playerHealth > 0) {
    window.alert("Greath job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
};

var shop = function () {
  console.log("entered the shop.");
};

var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  startGame();
}

else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!")
}

startGame();