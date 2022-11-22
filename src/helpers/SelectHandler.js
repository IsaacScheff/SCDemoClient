export default class SelectHandler {
    constructor(scene){

        this.buildSelections = () => {
            let jace = scene.add.image(260, 140, 'jace').setInteractive();
            let chandra = scene.add.image(550, 140, 'chandra').setInteractive();

            jace.on('pointerdown', function () {
                console.log("jace");
                scene.game.config.socket.emit('characterSelect', "jace", scene.game.config.socket.id);
                scene.scene.start("LoadingGame"); 
                scene.game.config.playerC = 'jace';
            });

            chandra.on('pointerdown', function () {
                console.log("chandra");
                scene.game.config.socket.emit('characterSelect', 'chandra', scene.game.config.socket.id);
                scene.scene.start("LoadingGame"); 
                scene.game.config.playerC = 'chandra';
            });
        }
    }
}
