export default class SelectHandler {
    constructor(scene){

        this.buildSelections = () => {
            let jace = scene.add.image(260, 140, 'jace').setInteractive();
            let chandra = scene.add.image(550, 140, 'chandra').setInteractive();

            jace.on('pointerdown', function () {
                console.log("jace");
                /* I think sending the socket id is superflous, leaving it commented for now in case it served a purpose I forgot about
                scene.game.config.socket.emit('characterSelect', "jace", scene.game.config.socket.id); */
                scene.game.config.socket.emit('characterSelect', "jace");
                scene.scene.start("LoadingGame"); 
                scene.game.config.playerC = 'jace';
            });

            chandra.on('pointerdown', function () {
                console.log("chandra");
                scene.game.config.socket.emit('characterSelect', 'chandra');
                scene.scene.start("LoadingGame"); 
                scene.game.config.playerC = 'chandra';
            });
        }
    }
}
