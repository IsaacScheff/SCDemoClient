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
            stats.attack = characters[character][5];
            stats.defense = characters[character][6];
            stats.focus = characters[character][7];
            stats.humor = '';
            stats.itemEquipped = 'spellBook';
            stats.itemArray = ['staff', 'spellBook']; 
            stats.summons = []; //as players summon objects or creatures they are added to this array 

            return stats;
        }

        this.updateStats = () => {

        }
    }
}