class HumorButton {
    constructor(scene, humor, x, y, color){
        this.button = scene.add.text(x, y, humor, {color: color}).setFontSize(20).setInteractive();

        this.button.on('pointerdown', function () {
            //console.log(humor + ' humor selected');
            scene.humorText.setText("Select Humor").setVisible(false);
            scene.SanguineButton.button.setVisible(false);
            scene.CholericButton.button.setVisible(false); 
            scene.MelancholycButton.button.setVisible(false);
            scene.PhlegmaticButton.button.setVisible(false);
            scene.game.config.socket.emit('moveSelection', 'humor', humor); 
            //moveSelection can be channeling humor, casting a spell, or changing equipment
            //don't locally change the humor, wait for socket message back so changes are not staggered
        });
    }
}


export default class ButtonHandler {
    constructor(scene) {

        this.startingHumor = () => {
            scene.humorText = scene.add.text(40, 440, "Select Initial Humor").setFontSize(32);

            scene.SanguineButton = new HumorButton(scene, 'Sanguine', 150, 490, "red");
            scene.CholericButton = new HumorButton(scene, 'Choleric', 350, 490, "yellow");
            scene.MelancholycButton = new HumorButton(scene, 'Melancholy', 150, 540, "green");
            scene.PhlegmaticButton = new HumorButton(scene, 'Phlegmatic', 350, 540, "gray");
        }
    }
}