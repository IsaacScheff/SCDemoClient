import Phaser from 'phaser';
import pStadiumImg from '../assets/pokemonStadium.png';

export default class ResultScreen extends Phaser.Scene{
    constructor (result){
        super('ResultScreen');

        this.result = result;
    }

    preload (){
        this.load.image('pStadium', pStadiumImg);   
    }
      
    create (){
        let resultMessage = '';
        switch(this.game.config.result){
            case 'win':
                resultMessage = 'You Win!';
                break;
            case 'disconnect':
                resultMessage = 'You win, opponent disconected.';
                break;
            case 'lose':
                resultMessage = 'You Lose!';
                break;
            case 'draw':
                resultMessage = "It's a draw";
                break;
            default:
                console.log('Result message issue:', this.game.config.result);
        }

        this.resultText = this.add.text(30, 60, resultMessage, {fontSize: 42});

        const pStadium = this.add.image(400, 400, 'pStadium');
    }
}
