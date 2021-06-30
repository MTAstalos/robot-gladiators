//player stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

//enemy stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;
var enemyHealth = 50;

var fight = function(enemyName){
    //continues to fight the enemyNames[i] until dead
    while(enemyHealth > 0 && playerHealth> 0){
        //check to see if player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP"){ 
            //confirm skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //yes answer
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!~");
                //subtract money from player
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attached " + enemyName + ". " + " now has " + enemyHealth + " health remaining.");

        //checks to see if enemy has died
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};//end of fight function

for(var i = 0; i<enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    //give 50 health to all the new enemies
    enemyHealth = 50;
    fight(pickedEnemyName);
};