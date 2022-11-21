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
      
    create (data)
    {
        const character = this.add.image(400, 140, data.character);

        this.loadText = this.add.text(230, 400, 'You have selected ' + data.character, {fontSize: 24});
        this.waitText = this.add.text(250, 450, 'Waiting for opponent', {fontSize: 24});
    }
}




