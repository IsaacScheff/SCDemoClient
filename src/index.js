import Phaser from 'phaser';
//import logoImg from './assets/logo.png';
import pStadiumImg from './assets/pokemonStadium.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //this.load.image('logo', logoImg);
        this.load.image('pStadium', pStadiumImg);
    }
      
    create ()
    {
        //const logo = this.add.image(400, 150, 'logo');
        const pStadium = this.add.image(400, 350, 'pStadium');
      
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
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
