import Phaser from 'phaser';
import pStadiumImg from './assets/pokemonStadium.png';
import SocketHandler from './helpers/socketHandler';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pStadium', pStadiumImg);
    }
      
    create ()
    {
        this.SocketHandler = new SocketHandler(this);
        const pStadium = this.add.image(400, 350, 'pStadium');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
