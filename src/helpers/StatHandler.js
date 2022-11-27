import { characters } from "../dictionaries/characters";
export default class StatHandler {
    constructor(game) {
    
        this.initialStats = (character) => {
            //declaring as an empty obkect is unnesesary here, will correct later
            let stats = {}
            stats.health = characters[character][0];
            stats.san = characters[character][1];
            stats.cho = characters[character][2]; 
            stats.mel = characters[character][3];
            stats.phleg = characters[character][4];
            stats.humor = ''; 

            return stats;
        }

        this.updateStats = () => {

        }
    }
}