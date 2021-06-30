//player stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

//enemy stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //informs that the fight has start via popout
    window.alert("Welcome to Robot Gladiators!");

    //player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attached " + enemyName + ". " + " now has " + enemyHealth + " health remaining."
    );

    //checks to see if enemy has died
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    //enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // checks to see if player is dead
    if (playerHealth <= 0 ) {
        window.alert(playerName+" has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }


}//end of code block

fight();