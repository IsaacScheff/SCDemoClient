class HumorButton {
    constructor(scene, humor, x, y, color){
        this.button = scene.add.text(x, y, humor, {color: color}).setFontSize(20).setInteractive();

        this.button.on('pointerdown', function () {
            console.log(humor + ' humor selected');
            //socket emit humor selected
            //change players humor in scene, or set it and wait for opponent 
        });
    }
}


export default class ButtonHandler {
    constructor(scene) {

        this.startingHumor = () => {
            scene.startingHumor = scene.add.text(40, 440, "Select Initial Humor").setFontSize(32);

            scene.SanguineButton = new HumorButton(scene, 'Sanguine', 150, 490, "red");
            scene.CholericButton = new HumorButton(scene, 'Choleric', 350, 490, "yellow");
            scene.MelancholycButton = new HumorButton(scene, 'Melancholy', 150, 540, "green");
            scene.PhlegmaticButton = new HumorButton(scene, 'Phlegmatic', 350, 540, "gray");
        }
    }
}