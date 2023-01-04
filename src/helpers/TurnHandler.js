import { spells } from "../dictionaries/spells";
export default class TurnHandler {
    constructor(game) {

        this.parseMoves = (moves) => {
            const moveArray = moves.split(",");
            //console.log(moveArray);
            const playerAMove = moveArray.slice(0, 2);
            //console.log(playerAMove);
            const playerBMove = moveArray.slice(2, 4);
            //console.log(playerBMove);
            //console.log(game.config.playerA);
            const playerA = (game.config.playerA ? 'playerStats' : 'opStats');
            const playerB = (game.config.playerA ? 'opStats' : 'playerStats');
            //console.log(game.config.playerA, playerA, playerB);
            this.resolveMove(playerAMove, playerA);
            this.resolveMove(playerBMove, playerB);
        }

        this.resolveMove = (move, player) => {
            switch(move[0]){
                case 'humor':
                    //console.log(move, player);
                    this.humorChange(move[1], player);
                    break;
                case 'spell':
                    //console.log(move, player);
                    //spells[move[1]](game, player);
                    this.resolveSpell(move[1], player);
                    break;
                case 'equip': 
                    //console.log(move, player);
                    this.equipmentChange(move[1], player);
                    break;
                default:
                    console.log('resolveMove function first switch, move type provided not a match: ' + move);
            }
            if(player == 'opStats'){
                switch(move[0]){
                    case 'humor':
                        game.config.opMoveMessage = 'Opponent channeled ' + move[1];
                        break;
                    case 'spell':
                        game.config.opMoveMessage = 'Opponent cast ' + move[1];
                        break;
                    case 'equip': 
                        game.config.opMoveMessage = 'Opponent swicthed item to ' + move[1];
                        break;
                    default:
                        console.log('resolveMove function second switch, move type provided not a match: ' + move);
                }
            }
        }
        
        this.humorChange = (humor, player) => {
            game.config[player].humor = humor;
            //console.log(game.config[player]);
        }
        
        this.spellCast = () => {
            //this is currently superflous, but may be a beter option in the future
        }
        
        this.equipmentChange = (item, player) => {
            game.config[player].itemEquipped = item;
            //console.log(game.config[player]);
        }

        this.startTurn = () => {
            const scene = game.scene.scenes[2];
            
            scene.waitText.setVisible(false);
            scene.moveRecap.setText(game.config.opMoveMessage).setVisible(true);
            scene.openMoves.setVisible(true);
        }
        
        this.showMoves = () => {
            const scene = game.scene.scenes[2];
            
            scene.moveRecap.setVisible(false);
            scene.openMoves.setVisible(false);
            this.checkWinCon();
            this.turnUpdates();
            scene.HumorButton.button.setVisible(true);
            scene.SpellButton.button.setVisible(true);
            scene.EquipButton.button.setVisible(true);
        }

        this.turnUpdates = () => {
            this.humorChanneling('playerStats');
            this.humorChanneling('opStats');
        }

        this.humorChanneling = (player) => {
            //game.config[player][game.config[player].humor] += 25; 
            const humor = game.config[player].humor;
            game.config[player][humor] += 25;
        }

        this.resolveSpell = (spell, player) => {
            //let damage = '';
            const spellArray = spells[spell];
            console.log(spellArray);
            const targetPlayer = (player == 'playerStats' ? 'opStats' : 'playerStats');
            switch(spellArray[3]){ //spell type is the fourth index in the spell array
                case 'damage':
                    //damage = spell[0]();
                /* spellArray sub 0 is the damage function, sub 2 the humor type */
                    game.config[targetPlayer].health -= this.spellDamage(spellArray[0](player, game), spellArray[2], player); 
                    break;
                case 'curse':
                    console.log('curse lol');
                    break;
                case 'enchant':
                    console.log('buff or field effect');
                    break;
                case 'summon':
                    console.log('creates something');
                    break; 
                //other cases
                default:
                    console.log('resolveSpell switch statement spell type issue:' + spellArray[3]);
            }
        }

        this.spellDamage = (baseDamage, spellHumor, player) => {
            const attackPlayer = game.config[player];
            const defPlayer = game.config[(player == 'playerStats' ? 'opStats' : 'playerStats')];
            let attackModifier = 3;

            if(spellHumor == attackPlayer.humor)
                attackModifier = 2;
                
                console.log('attackModifier ' + attackModifier);
                console.log('attackPlayer.attack ' + attackPlayer.attack);
                console.log('defPlayer.defense ' + defPlayer.defense);
                console.log('baseDamage ' + baseDamage);
                let damage = (attackPlayer.attack + baseDamage)/attackModifier * (100/(100 + defPlayer.defense)); 
                //console.log(damage);

            if(spellHumor == defPlayer.humor)
                damage = damage/2;
            
            switch(spellHumor){
                case 'Sanguine':
                    if(defPlayer.humor == 'Melancholy')
                        damage *= 2;
                    break;
                case 'Choleric':
                    if(defPlayer.humor =='Phlegmatic')
                        damage *= 2;
                    break;
                case 'Melancholy':
                    if(defPlayer.humor == 'Sanguine')
                        damage *= 2;
                    break;
                case 'Phlegmatic':
                    if(defPlayer.humor == 'Choleric')
                        damage *= 2;
                    break;
                default:
                    console.log('function spellDamage switch statement error: ' + spellHumor);
            }  
            console.log('outputDamage ' + damage);
            return Math.round(damage);  
        }

        this.checkWinCon = () => {
            if(game.config.playerStats.health <= 0){
                if(game.config.opStats.health <= 0){
                    console.log("It's a tie!");
                    this.endGame('draw');
                }else{
                    console.log("You lose!");
                    this.endGame('lose');
                }
            }else if(game.config.opStats.health <= 0){
                console.log("You Win!");
                this.endGame('win');
            }
        }

        this.endGame = (result) => { 
            game.config.result = result;
            game.scene.stop("Game");
            game.scene.start("ResultScreen");
        }
    }
}