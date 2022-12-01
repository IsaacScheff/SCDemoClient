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
            console.log("received you're playerA");
        });

        // game.config.socket.on('yourePlayerB', () => { //redundant 
        //     game.config.playerA = false;
        // });
    
        game.config.socket.on('playerMoves', (playerMoves) => {
            game.config.TurnHandler.parseMoves(playerMoves);
            game.config.TurnHandler.startTurn();
        });
    }
}