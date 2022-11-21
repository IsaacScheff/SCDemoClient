export default class SelectHandler {
    constructor(scene){

        this.buildSelections = () => {
            let jace = scene.add.image(260, 140, 'jace').setInteractive();
            let chandra = scene.add.image(550, 140, 'chandra').setInteractive();

            jace.on('pointerdown', function () {
                console.log("jace");
                scene.socket.emit('characterSelect', "jace");
                scene.scene.start("LoadingGame", {character: 'jace'}); 
            });

            chandra.on('pointerdown', function () {
                console.log("chandra");
                scene.socket.emit('characterSelect', 'chandra');
                scene.scene.start("LoadingGame", {character: 'chandra'}); 
            });
        }
    }
}
