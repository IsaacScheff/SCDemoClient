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

            scene.PlayerHumor = scene.add.text(190, 220, 'Channel Humor').setVisible(false);
            scene.OpHumor = scene.add.text(505, 220, 'Chanel Humor').setVisible(false);
        }

        this.updateStats = () => {
            scene.PlayerHealth.setText("Health:" + scene.playerStats.health);
            scene.OpHealth.setText("Health:" + scene.opStats.health);
            scene.PlayerSAN.setText("SAN:" + scene.playerStats.san);
            scene.OpSAN.setText("SAN:" + scene.opStats.san);
            scene.PlayerCHO.setText("CHO:" + scene.playerStats.cho);
            scene.OpCHO.setText("CHO:" + scene.opStats.cho);
            scene.PlayerMEL.setText("MEL:" + scene.playerStats.mel);
            scene.OpMEL.setText("MEL:" + scene.opStats.mel);
            scene.PlayerPHLEG.setText("PHLEG:" + scene.playerStats.phleg);
            scene.OpPHLEG.setText("PHLEG:" + scene.opStats.phleg);

            //scene.PlayerHumor.setText(scene.playerStats.activeHumor).setVisible();
            //scene.OpHumor.setText(scene.opStats.activeHumor).setVisible();
        }

        this.buildUI = () => {
            this.buildStats();
        }
    }
}