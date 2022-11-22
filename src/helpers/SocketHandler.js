import { Game } from 'phaser';
import io from 'socket.io-client';

export default class SocketHandler {
    constructor(scene){
        
        scene.game.config.socket.on('oppoCharacter', (character, socketId) => {
            if(socketId != scene.game.config.socket.id){
                console.log("Opponent: " + character);
                scene.game.config.opponentC = character;
            }
        });

        scene.game.config.socket.on('selectScreen', () => {
            scene.scene.start("CharacterSelect"); 
        });
    }
}