//spells are all functions startign with sp such as spFireball, spMelancholyDrain etc.
//this object shoudl be organised alphabetically 
export const spells = {
    /*
    spSellExample: [
        function(game, player){
            logic
        },
        humorType,
        costcheck, a function that returns true if spell can be cast or false if it can't
        spellType(damage, buff, curse) etc.
    ]
    */

    spBloodRitual: function(game, player) {
        game.config[player].health -= 10;
        game.config[player].Sanguine -= 10;
        
        game.config[player].Choleric += 20;
        game.config[player].Melancholy += 20;
        game.config[player].Phlegmatic += 20;
    },

    spDrainHumor: function(game, player) {
        const otherPlayer = (player == 'playerStats' ? 'opStats' : 'playerStats');
        const humor = game.config[player].humor;

        if(game.config[otherPlayer][humor] >= 20){
            game.config[otherPlayer][humor] -= 20;
            game.config[player][humor] += 20;
        }else{
            game.config[player][humor] += game.config[otherPlayer][humor];
            game.config[otherPlayer][humor] = 0;
        }
    },
    /*
    spFireball: function(game, player) {
        game.config[player].Sanguine -= 30;
        const otherPlayer = (player == 'playerStats' ? 'opStats' : 'playerStats');
        game.config[otherPlayer].health -= 25;
    },
    */
    spFireball: [
        function(){
            return 35; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Sanguine >= 30 ? true : false);
        },
        'Sanguine',
        'damage'
    ],
    spHeal: function(game, player) {
        game.config[player].Sanguine -= 10;
        game.config[player].Choleric -= 10;
        game.config[player].Melancholy -= 10;
        game.config[player].Phlegmatic -= 10;

        game.config[player].health += 35;
    }
}
