class CharacterSelect {
    constructor(scene, character, x, y){
        let characterIcon  = scene.add.image(x, y, character).setInteractive();

        characterIcon.on('pointerdown', function () {
            scene.game.config.socket.emit('characterSelect', character);
            scene.scene.start("LoadingGame"); 
            scene.game.config.playerC = character;
        });
    }
}

export default class SelectHandler {
    constructor(scene){

        this.buildSelections = () => {
            let jace = new CharacterSelect(scene, 'jace', 260, 140);
            let chandra = new CharacterSelect(scene, 'chandra', 550, 140);
        }
    }
}
