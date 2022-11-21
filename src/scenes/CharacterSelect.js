import Phaser from 'phaser';
import jaceImg from '../assets/lilJace.png';
import chandraImg from '../assets/lilChandra.png';

import SocketHandler from '../helpers/socketHandler';
import SelectHandler from '../helpers/SelectHandler';
//import UIHandler from './helpers/UIHandler';
 

export default class CharacerSelect extends Phaser.Scene
{
    constructor ()
    {
        super('CharacerSelect');
    }

    preload ()
    {
        this.load.image('jace', jaceImg);
        this.load.image('chandra', chandraImg);
    }
      
    create ()
    {
        this.SocketHandler = new SocketHandler(this);
     
        this.SelectHandler = new SelectHandler(this);
        this.SelectHandler.buildSelections();

        // jace.on('pointerdown', function () {
        //     console.log("jace");
        //     console.log(this);
        //     this.socket.emit('characterSelect', "jace");
        // });
        this.instructions = this.add.text(200, 500, 'Select Your Wizard', {fontSize: 40});
    }
}




