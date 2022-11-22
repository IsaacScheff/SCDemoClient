import Phaser from 'phaser';
import pStadiumImg from '../assets/pokemonStadium.png';

import SocketHandler from '../helpers/socketHandler';

export default class WelcomeScreen extends Phaser.Scene
{
    constructor ()
    {
        super('WelcomeScreen');
    }

    preload ()
    {
        this.load.image('pStadium', pStadiumImg);   
    }
      
    create ()
    {
        let scene = this;

        this.SocketHandler = new SocketHandler(this);

        this.welcomeText = this.add.text(30, 60, 'Welcome to the demo for SpellClash', {fontSize: 36});

        this.readyButton = this.add.text(280, 200, "Click here to start", {fontSize: 24}).setInteractive();

        this.readyButton.on('pointerdown', function () {
            console.log("Ready!");
            scene.game.config.socket.emit('playerReady');
            this.destroy();
            scene.waitText = scene.add.text(200, 250, 'Waiting for opponent to connect...', {fontSize: 24});
        });

        const pStadium = this.add.image(400, 400, 'pStadium');
    }
}
