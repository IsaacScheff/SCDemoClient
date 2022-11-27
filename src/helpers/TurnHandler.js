export default class TurnHandler {
    constructor(game) {

        // this.fullTurn = (playerAMove, playerBMove) => {
        //     this.resolveMove(playerAMove, 'playerStats');
        //     this.resolveMove(playerBMove, 'opStats');
        // }

        this.resolveMove = (move, player) => {
            let moveArray = move.split(",");
            //console.log(moveArray);

            switch(moveArray[0]){
                case 'humor':
                    //console.log(moveArray[0], moveArray[1], player);
                    this.humorChange(moveArray[1], player);
                    break;
                case 'spell':
                    break;
                case 'equip': 
                    break;
                default:
                    console.log('parseMove function, move type provided not a match: ' + moveArray);
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

    }
}