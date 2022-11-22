import Phaser from 'phaser';
import pStadiumImg from '../assets/pokemonStadium.png';
import jaceImg from '../assets/lilJace.png';
import chandraImg from '../assets/lilChandra.png';

import SocketHandler from '../helpers/socketHandler';
import UIHandler from '../helpers/UIHandler';
import StatHandler from '../helpers/StatHandler';
 

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
      
    create ()
    {
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.StatHandler = new StatHandler(this);

        this.playerStats = this.StatHandler.initialStats(this.game.config.playerC);
        this.opStats = this.StatHandler.initialStats(this.game.config.opponentC);
        console.log(this.playerStats + this.opStats);
        
        const pStadium = this.add.image(400, 240, 'pStadium').setInteractive();
        const playerCharacter = this.add.image(260, 140, this.game.config.playerC);
        const oppoCharacter = this.add.image(550, 140, this.game.config.opponentC);
        oppoCharacter.flipX = true;
    }

    update(){
        this.UIHandler.updateStats();
    }
}


//const game = new Phaser.Game(config);
