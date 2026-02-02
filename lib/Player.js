export class Player
{
    #isActive = false;
    #cards = [];
    #activeCards = [];

    constructor(name = "Player 1") 
    {        
    }

    takeCard(card)
    {
        this.#cards.push(card);
    }

    drawCard()
    {
        this.#activeCards.push(this.#cards.pop());
    }

    showActiveCards()
    {
        return this.#activeCards;
    }


}