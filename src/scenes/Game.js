import Phaser from 'phaser';
import pStadiumImg from '../assets/pokemonStadium.png';
import jaceImg from '../assets/lilJace.png';
import chandraImg from '../assets/lilChandra.png';

import UIHandler from '../helpers/UIHandler';
import StatHandler from '../helpers/StatHandler';
import ButtonHandler from '../helpers/ButtonHandler';
 

export default class Game extends Phaser.Scene
{
    constructor(){
        super('Game');
    }

    preload (){
        this.load.image('pStadium', pStadiumImg);
        this.load.image('jace', jaceImg);
        this.load.image('chandra', chandraImg);
    }
      
    create (){
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.ButtonHandler = new ButtonHandler(this);
        this.ButtonHandler.startingHumor();
        this.ButtonHandler.moveType();
        
        this.game.config.StatHandler = new StatHandler(this.game);

        this.game.config.playerStats = this.game.config.StatHandler.initialStats(this.game.config.playerC);
        this.game.config.opStats = this.game.config.StatHandler.initialStats(this.game.config.opponentC);
        //console.log(this.game.config.playerStats + this.game.config.opStats);
        
        const pStadium = this.add.image(400, 240, 'pStadium');
        const playerCharacter = this.add.image(260, 140, this.game.config.playerC);
        const oppoCharacter = this.add.image(550, 140, this.game.config.opponentC);
        oppoCharacter.flipX = true;
    }

    update(){
        this.UIHandler.updateStats();
    }
}


//const game = new Phaser.Game(config);
