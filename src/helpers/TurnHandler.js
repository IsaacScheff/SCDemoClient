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
                    console.log('resolveMove function, move type provided not a match: ' + move);
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
            
            this.checkWinCon();
            scene.waitText.setVisible(false);
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
        /* this is where we get into tricky terrotory with cheating, 
            for the purposes of the demo it's fine to handle the win/lost
            locally, but when it comes to a wider release will need the
            server to be able to verify results. Maybe ultimately the gamelogic wil need
            to be server side to verify accuracy 
        */
        this.endGame = (result) => { 
            game.config.result = result;
            game.scene.stop("Game");
            game.scene.start("ResultScreen");
        }
    }
}