//spells are all functions startign with sp such as spFireball, spMelancholyDrain etc.
//this object shoudl be organised alphabetically 
export const spells = {
    spFireball: function(game, player) {
        game.config[player].Sanguine -= 30;
        const otherPlayer = (player == 'playerStats' ? 'opStats' : 'playerStats');
        game.config[otherPlayer].health -= 25;
    }
}