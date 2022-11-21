import Phaser from 'phaser';
import pStadiumImg from './assets/pokemonStadium.png';
import jaceImg from './assets/lilJace.png';
import chandraImg from './assets/lilChandra.png';

import SocketHandler from './helpers/socketHandler';
import UIHandler from './helpers/UIHandler';

import CharacterSelect from './scenes/CharacterSelect';
import Game from './scenes/Game';
import LoadingGame from './scenes/LoadingGame';
 
// class Game extends Phaser.Scene
// {
//     constructor()
//     {
//         super(Game);
//     }

//     preload ()
//     {
//         this.load.image('pStadium', pStadiumImg);
//         this.load.image('jace', jaceImg);
//         this.load.image('chandra', chandraImg);
//     }
      
//     create ()
//     {
//         this.SocketHandler = new SocketHandler(this);
//         this.UIHandler = new UIHandler(this);
//         this.UIHandler.buildUI();
        
//         const pStadium = this.add.image(400, 240, 'pStadium');
//         const jace = this.add.image(260, 140, 'jace');
//         const chandra = this.add.image(550, 140, 'chandra');
//     }
// }

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [CharacterSelect, Game, LoadingGame]
};

const game = new Phaser.Game(config);
