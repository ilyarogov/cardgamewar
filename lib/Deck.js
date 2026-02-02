export class Deck 
{
    #cards = [];
    #cardAmount = 0;

    constructor()
    {
        const suits = ['c','d','h','s'];
        const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
        const nums = range(1,13);
        suits.forEach(suit => {
            nums.forEach(num => {
                this.#cards.push(suit+num);
            });
            
        });
        this.#cardAmount = this.#cards.length;
    }

    shuffle()
    {
        let currentIndex = this.#cards.length;
        while (currentIndex != 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.#cards[currentIndex], this.#cards[randomIndex]] = [
            this.#cards[randomIndex], this.#cards[currentIndex]];
        }
    }

    draw()
    {
        return this.#cards.pop();
    }

}