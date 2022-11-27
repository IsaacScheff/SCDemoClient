export default class UIHandler {
    constructor(scene) {

        this.buildStats = () => {
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

            scene.PlayerHumor = scene.add.text(220, 60, 'Channel Humor')//.setVisible(false);
            scene.OpHumor = scene.add.text(510, 60, 'Chanel Humor')//.setVisible(false);
        }

        this.updateStats = () => {
            scene.PlayerHealth.setText("Health:" + scene.game.config.playerStats.health);
            scene.OpHealth.setText("Health:" + scene.game.config.opStats.health);
            scene.PlayerSAN.setText("SAN:" + scene.game.config.playerStats.san);
            scene.OpSAN.setText("SAN:" + scene.game.config.opStats.san);
            scene.PlayerCHO.setText("CHO:" + scene.game.config.playerStats.cho);
            scene.OpCHO.setText("CHO:" + scene.game.config.opStats.cho);
            scene.PlayerMEL.setText("MEL:" + scene.game.config.playerStats.mel);
            scene.OpMEL.setText("MEL:" + scene.game.config.opStats.mel);
            scene.PlayerPHLEG.setText("PHLEG:" + scene.game.config.playerStats.phleg);
            scene.OpPHLEG.setText("PHLEG:" + scene.game.config.opStats.phleg);

            scene.PlayerHumor.setText(scene.game.config.playerStats.humor)//.setVisible(true);
            scene.OpHumor.setText(scene.game.config.opStats.humor)//.setVisible(true);
        }

        this.buildUI = () => {
            this.buildStats();
        }
    }
}