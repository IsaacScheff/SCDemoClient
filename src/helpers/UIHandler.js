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

            scene.PlayerHumor = scene.add.text(220, 60, 'Humor Text')//.setVisible(false);
            scene.OpHumor = scene.add.text(510, 60, 'Humor Text')//.setVisible(false);

            scene.PlayerItem = scene.add.text(220, 30, 'item equipped');
            scene.OpItem = scene.add.text(510, 30, 'item equipped');

            scene.waitText = scene.add.text(300, 520, 'Waiting for opponent...').setVisible(false);
        }

        this.updateStats = () => {
            scene.PlayerHealth.setText("Health:" + scene.game.config.playerStats.health);
            scene.OpHealth.setText("Health:" + scene.game.config.opStats.health);
            scene.PlayerSAN.setText("SAN:" + scene.game.config.playerStats.Sanguine);
            scene.OpSAN.setText("SAN:" + scene.game.config.opStats.Sanguine);
            scene.PlayerCHO.setText("CHO:" + scene.game.config.playerStats.Choleric);
            scene.OpCHO.setText("CHO:" + scene.game.config.opStats.Choleric);
            scene.PlayerMEL.setText("MEL:" + scene.game.config.playerStats.Melancholy);
            scene.OpMEL.setText("MEL:" + scene.game.config.opStats.Melancholy);
            scene.PlayerPHLEG.setText("PHLEG:" + scene.game.config.playerStats.Phlegmatic);
            scene.OpPHLEG.setText("PHLEG:" + scene.game.config.opStats.Phlegmatic);

            scene.PlayerHumor.setText(scene.game.config.playerStats.humor)//.setVisible(true);
            scene.OpHumor.setText(scene.game.config.opStats.humor)//.setVisible(true);

            scene.PlayerItem.setText(scene.game.config.playerStats.itemEquipped);
            scene.OpItem.setText(scene.game.config.opStats.itemEquipped);
        }

        this.buildUI = () => {
            this.buildStats();
        }

    }
}