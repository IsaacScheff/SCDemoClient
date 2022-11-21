export default class UIHandler {
    constructor(scene) {

        this.buildStats = () => {
            scene.dealCards = scene.add.text(960, 445, "Deal Cards").setFontSize(14).setFontFamily('Trebuchet MS');

            scene.PlayerHealth = scene.add.text(20, 20, 'Health:');
            scene.OpHealth = scene.add.text(690, 20, 'Health:');
            scene.PlayerSAN = scene.add.text(20, 35, 'SAN:');
            scene.OpSAN = scene.add.text(690, 35, 'SAN:');
            scene.PlayerCHO = scene.add.text(20, 50, 'CHO:');
            scene.OpCHO = scene.add.text(690, 50, 'CHO:');
            scene.PlayerMEL = scene.add.text(20, 65, 'MEL:');
            scene.OpMEL = scene.add.text(690, 65, 'MEL:');
            scene.PlayerPHLEG = scene.add.text(20, 80, 'PHLEG:');
            scene.OpPHLEG = scene.add.text(690, 80, 'PHLEG:');
           
        }

        this.buildUI = () => {
            this.buildStats();
        }
    }
}