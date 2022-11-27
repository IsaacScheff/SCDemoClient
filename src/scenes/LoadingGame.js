import Phaser from 'phaser';
import jaceImg from '../assets/lilJace.png';
import chandraImg from '../assets/lilChandra.png';

import SocketHandler from '../helpers/socketHandler';
import SelectHandler from '../helpers/SelectHandler';
//import UIHandler from './helpers/UIHandler';
 

export default class LoadingGame extends Phaser.Scene
{
    constructor ()
    {
        super('LoadingGame');
    }

    preload ()
    {
        this.load.image('jace', jaceImg);
        this.load.image('chandra', chandraImg);
    }
      
    create ()
    {
        const character = this.add.image(400, 140, this.game.config.playerC);

        this.loadText = this.add.text(230, 400, 'You have selected ' + this.game.config.playerC, {fontSize: 24});
        this.waitText = this.add.text(250, 450, 'Waiting for opponent', {fontSize: 24});
    }


    update () {
        if(this.game.config.opponentC && this.game.config.playerC){
            //console.log(this.game.config.opponentC, this.game.config.playerC);
            this.scene.start("Game");
        }
    }
}




