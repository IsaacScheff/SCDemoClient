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
        spellType(damage, buff, curse, summon) etc.
    ]
    */
    spAquaShot: [
        function(){
            return 3.5; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Phlegmatic >= 30 ? true : false);
        },
        'Phlegmatic',
        'damage'
    ],
    spBloodRitual: [
        function(game, player) {
            game.config[player].health -= 10;
            game.config[player].Sanguine -= 10;
            
            game.config[player].Choleric += 20;
            game.config[player].Melancholy += 20;
            game.config[player].Phlegmatic += 20;
        },
        function(player, game){
            return (game.config[player].Sanguine >= 10 ? true : false);
        },
        'Sanguine',
        'buff'
    ],
    spDrainHumor: [
        function(game, player) {
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
        function(){
            return true; //this spell always works
        },
        'Neutral',
        'curse'
    ],
    spFireball: [
        function(){
            return 3.5; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Choleric >= 30 ? true : false);
        },
        'Choleric',
        'damage'
    ],
    spMudslide: [
        function(){
            return 3.5; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Melancholic >= 30 ? true : false);
        },
        'Melancholic',
        'damage'
    ],
    spScortch: [
        function(){
            return 5.0; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Choleric >= 65 ? true : false);
        },
        'Choleric',
        'damage'
    ],
    spSimpleHeal: [
        function(game, player) {
            game.config[player].Sanguine -= 30;
            
            game.config[player].health += 35;
        },
        function(player, game){
            return (game.config[player].Sanguine >= 30 ? true : false);
        },
        'Sanguine',
        'buff'
    ],
    spWindScythe: [
        function(player, game){
            game.config[player].Sanguine -= 30;
            return 3.5; //damage functions return the base damage
        },
        function(player, game){
            return (game.config[player].Sanguine >= 30 ? true : false);
        },
        'Sanguine',
        'damage'
    ]
}
