import TurnHandler from './TurnHandler';
export default class SocketHandler { 
    constructor(game){
        //scene.TurnHandler = new TurnHandler(scene);
        game.config.TurnHandler = new TurnHandler(game);

        game.config.socket.on('oppoCharacter', (character, socketId) => {
            console.log('received oppoChracter message');
            if(socketId != game.config.socket.id){
                console.log("Oppo selected: " + character)
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
    
        game.config.socket.on('playerMoves', (playerMoves) => {
            game.config.TurnHandler.parseMoves(playerMoves);
            game.config.TurnHandler.startTurn();
        });

        game.config.socket.on('opponentDisconnect', () => {
            console.log("Opponent disconnected");
            if(!game.config.result){
                game.config.result = 'disconnect';
                game.scene.stop("Game");
                game.scene.start("ResultScreen");
            }
        });
    }
}