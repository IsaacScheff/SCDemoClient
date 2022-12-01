import { characters } from "../dictionaries/characters";
export default class StatHandler {
    constructor(game) {
    
        this.initialStats = (character) => {
            //declaring as an empty obkect is unnesesary here, will correct later
            let stats = {}
            stats.health = characters[character][0];
            stats.Sanguine = characters[character][1];
            stats.Choleric = characters[character][2]; 
            stats.Melancholy = characters[character][3];
            stats.Phlegmatic = characters[character][4];
            stats.humor = ''; 

            return stats;
        }

        this.updateStats = () => {

        }
    }
}