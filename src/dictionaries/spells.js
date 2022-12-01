//spells are all functions startign with sp such as spFireball, spMelancholyDrain etc.
//this object shoudl be organised alphabetically 
export const spells = {
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

    spFireball: function(game, player) {
        game.config[player].Sanguine -= 30;
        const otherPlayer = (player == 'playerStats' ? 'opStats' : 'playerStats');
        game.config[otherPlayer].health -= 25;
    },

    spHeal: function(game, player) {
        game.config[player].Sanguine -= 10;
        game.config[player].Choleric -= 10;
        game.config[player].Melancholy -= 10;
        game.config[player].Phlegmatic -= 10;

        game.config[player].health += 35;
    }
}
