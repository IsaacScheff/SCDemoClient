import { characters } from "../dictionaries/characters";
export default class StatHandler {
    constructor(scene) {
    
        this.initialStats = (character) => {
            let stats = {}
            stats.health = characters[character][0];
            stats.san = characters[character][1];
            stats.cho = characters[character][2];
            stats.mel = characters[character][3];
            stats.phleg = characters[character][4];

            return stats;
        }

        this.updateStats = () => {

        }
    }
}