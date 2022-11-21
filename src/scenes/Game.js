import Phaser from 'phaser';
import pStadiumImg from '../assets/pokemonStadium.png';
import jaceImg from '../assets/lilJace.png';
import chandraImg from '../assets/lilChandra.png';

import SocketHandler from '../helpers/socketHandler';
import UIHandler from '../helpers/UIHandler';
 

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('pStadium', pStadiumImg);
        this.load.image('jace', jaceImg);
        this.load.image('chandra', chandraImg);
    }
      
    create (data)
    {
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        
        const pStadium = this.add.image(400, 240, 'pStadium').setInteractive();
        const playerCharacter = this.add.image(260, 140, data.character);
        const chandra = this.add.image(550, 140, 'chandra');
    }
}


//const game = new Phaser.Game(config);
