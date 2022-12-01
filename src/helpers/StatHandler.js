import { characters } from "../dictionaries/characters";

//import { items } from "../dictionaries/items";
//temporarily hardcoding the items availbe to players here,
//will be adding item selection and building that out later
export default class StatHandler {
    constructor(game) {
    
        this.initialStats = (character) => {
            let stats = {}
            stats.health = characters[character][0];
            stats.Sanguine = characters[character][1];
            stats.Choleric = characters[character][2]; 
            stats.Melancholy = characters[character][3];
            stats.Phlegmatic = characters[character][4];
            stats.humor = '';
            stats.itemEquipped = 'spellBook';
            stats.itemArray = ['staff', 'spellBook']; 

            return stats;
        }

        this.updateStats = () => {

        }
    }
}