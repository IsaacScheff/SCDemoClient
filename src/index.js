import Phaser from 'phaser';
import pStadiumImg from './assets/pokemonStadium.png';
import jaceImg from './assets/lilJace.png';
import chandraImg from './assets/lilChandra.png';

import SocketHandler from './helpers/socketHandler';
import UIHandler from './helpers/UIHandler';

import CharacterSelect from './scenes/CharacterSelect';
import Game from './scenes/Game';
import LoadingGame from './scenes/LoadingGame';
import WelcomeScreen from './scenes/WelcomeScreen';

import io from 'socket.io-client';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [WelcomeScreen, CharacterSelect, Game, LoadingGame]
};

const game = new Phaser.Game(config);
game.config.socket = io('http://localhost:3000');

game.config.socket.on('connect', () => {
    console.log('Connected!' + game.config.socket);
    console.log(game.config);
});

game.config.SocketHandler = new SocketHandler(game);
//how do I pass in the scene, alternatively all the variables being put on scene right now could be put on game instead 


