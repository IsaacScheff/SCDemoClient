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
                    console.log(move, player);
                    this.humorChange(move[1], player);
                    break;
                case 'spell':
                    break;
                case 'equip': 
                    break;
                default:
                    console.log('resolveMove function, move type provided not a match: ' + move);
            }
        }
        
        this.humorChange = (humor, player) => {
            //console.log(game.config/*[player]*/);
            game.config[player].humor = humor;
            //console.log(game.config[player]);
        }
        
        this.spellCast = () => {
        
        }
        
        this.equipmentChange = () => {
        
        }

        this.startTurn = () => {
            const scene = game.scene.scenes[2]; 

            scene.waitText.setVisible(false);
            this.turnUpdates();
            //console.log(scene.HumorButton);
            scene.HumorButton.button.setVisible(true);
            scene.SpellButton.button.setVisible(true);
            scene.EquipButton.button.setVisible(true);
        }

        this.turnUpdates = () => {
            this.humorChanneling('playerStats');
            this.humorChanneling('opStats');
        }

        this.humorChanneling = (player) => {
            const humor = game.config[player].humor;
            //console.log(game.config[player][game.config[player]['humor']]);
            game.config[player][humor] += 25;
            //console.log(humor);
        }

    }
}