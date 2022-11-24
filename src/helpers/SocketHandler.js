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

        scene.game.config.socket.on('yourePlayerA', () => {
            scene.game.config.playerA = true;
            console.log(scene.game.config.playerA);
        });

        scene.game.config.socket.on('yourePlayerB', () => {
            scene.game.config.playerA = false;
            console.log(scene.game.config.playerA);
        });
    }
}