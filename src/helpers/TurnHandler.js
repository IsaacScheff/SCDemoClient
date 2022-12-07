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
                    spells[move[1]](game, player);
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