import { items } from "../dictionaries/items";
//import { spells } from "../dictionaries/spells";
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
            scene.waitText.setVisible(true);
            scene.game.config.socket.emit('moveSelection', 'humor', humor); 
        });
    }
}

class spellButton { 
    constructor(scene, spell, x, y){
        const spellName = spell.slice(2);
        console.log(spellName);
        this.button = scene.add.text(x, y, spell.slice(2)).setFontSize(20).setInteractive();

        this.button.on('pointerdown', function () {
            for (const button in scene.spellButtons){
                scene.spellButtons[button].button.destroy();
            }
            delete scene.spellButtons;
            scene.waitText.setVisible(true);
            scene.game.config.socket.emit('moveSelection', 'spell', spell); 
        });
    }
}

class equipButton {
    constructor(scene, item, x, y){
        this.button = scene.add.text(x, y, item).setFontSize(20).setInteractive();

        this.button.on('pointerdown', function () {
            for (const button in scene.equipButtons){
                scene.equipButtons[button].button.destroy();
            }
            delete scene.equipButtons;
            scene.waitText.setVisible(true);
            scene.game.config.socket.emit('moveSelection', 'equip', item); 
        });
    }
}

class moveTypeButton {
    constructor(scene, type, x, y){
        this.button = scene.add.text(x, y, type).setFontSize(30).setInteractive().setVisible(false);

        this.clearOptions = () => {
            scene.HumorButton.button.setVisible(false);
            scene.SpellButton.button.setVisible(false);
            scene.EquipButton.button.setVisible(false);
        }

        switch(type){
            case 'humor':
                this.typeFunction = () => {
                    this.clearOptions();
                    scene.SanguineButton.button.setVisible(true);
                    scene.CholericButton.button.setVisible(true);
                    scene.MelancholycButton.button.setVisible(true);
                    scene.PhlegmaticButton.button.setVisible(true);
                }
                break;
            case 'spell':
                this.typeFunction = () => {
                    this.clearOptions();
                    
                    scene.spellButtons = {};
                    items[scene.game.config.playerStats.itemEquipped].forEach(function (spell, index) {
                        const buttonName = spell + 'Button';
                        scene.spellButtons[buttonName] = new spellButton(scene, spell, 200 + 150 * index, 540);
                    });
                }
                break;
            case 'equip':
                this.typeFunction = () => {
                    this.clearOptions();
                    
                    scene.equipButtons = {};
                    scene.game.config.playerStats.itemArray.forEach(function (item, index) {
                        const buttonName = item + 'Button';
                        scene.equipButtons[buttonName] = new equipButton(scene, item, 200 + 150 * index, 540);
                    });
                }
                break;
            default:
                console.log('moveTypeButton switch statment failed, type: ', type);
        }

        this.button.on('pointerdown', this.typeFunction);
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

        this.moveType = () => {
            scene.HumorButton = new moveTypeButton(scene, 'humor', 205, 520);
            scene.SpellButton = new moveTypeButton(scene, 'spell', 355, 520);
            scene.EquipButton = new moveTypeButton(scene, 'equip', 505, 520);
        }
    }
}