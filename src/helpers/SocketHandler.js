import TurnHandler from './TurnHandler';
export default class SocketHandler { 
    constructor(game){
        //scene.TurnHandler = new TurnHandler(scene);
        game.config.TurnHandler = new TurnHandler(game);

        game.config.socket.on('oppoCharacter', (character, socketId) => {
            if(socketId != game.config.socket.id){
                //console.log("Opponent: " + character);
                game.config.opponentC = character;
            }
        });

        game.config.socket.on('selectScreen', () => {
            //console.log('game: ', game); 
            game.scene.stop("WelcomeScreen");
            game.scene.start("CharacterSelect");
        });

        game.config.socket.on('yourePlayerA', () => {
            game.config.playerA = true;
        });

        game.config.socket.on('yourePlayerB', () => {
            game.config.playerA = false;
        });
    
        game.config.socket.on('playerMoves', (playerAMove, playerBMove) => {
            if(game.config.playerA == true){
                //scene.TurnHandler.resolveMove(playerBMove, 'opStats');
                game.config.TurnHandler.resolveMove(playerAMove, 'playerStats');
                game.config.TurnHandler.resolveMove(playerBMove, 'opStats');
            }else{
                game.config.TurnHandler.resolveMove(playerBMove, 'playerStats');
                game.config.TurnHandler.resolveMove(playerAMove, 'opStats');
            }
        });
    }
}