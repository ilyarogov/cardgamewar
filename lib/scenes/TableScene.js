import { CardObject } from "../objects/CardObject.js";
import { Deck } from "../Deck.js";
import { Player } from "../Player.js";

export class TableScene extends Phaser.Scene {

    #deck = [];
    #chosenCards = [];
    #player = '';

    preload ()
    {
        this.load.image('back', 'assets/back_2.png');
        
        this.load.image('c1', 'assets/clubs_1.png');
        this.load.image('c2', 'assets/clubs_2.png');
        this.load.image('c3', 'assets/clubs_3.png');
        this.load.image('c4', 'assets/clubs_4.png');
        this.load.image('c5', 'assets/clubs_5.png');
        this.load.image('c6', 'assets/clubs_6.png');
        this.load.image('c7', 'assets/clubs_7.png');
        this.load.image('c8', 'assets/clubs_8.png');
        this.load.image('c9', 'assets/clubs_9.png');
        this.load.image('c10', 'assets/clubs_10.png');
        this.load.image('c11', 'assets/clubs_11.png');
        this.load.image('c12', 'assets/clubs_12.png');
        this.load.image('c13', 'assets/clubs_13.png');

        this.load.image('d1', 'assets/diamonds_1.png');
        this.load.image('d2', 'assets/diamonds_2.png');
        this.load.image('d3', 'assets/diamonds_3.png');
        this.load.image('d4', 'assets/diamonds_4.png');
        this.load.image('d5', 'assets/diamonds_5.png');
        this.load.image('d6', 'assets/diamonds_6.png');
        this.load.image('d7', 'assets/diamonds_7.png');
        this.load.image('d8', 'assets/diamonds_8.png');
        this.load.image('d9', 'assets/diamonds_9.png');
        this.load.image('d10', 'assets/diamonds_10.png');
        this.load.image('d11', 'assets/diamonds_11.png');
        this.load.image('d12', 'assets/diamonds_12.png');
        this.load.image('d13', 'assets/diamonds_13.png');

        this.load.image('h1', 'assets/hearts_1.png');
        this.load.image('h2', 'assets/hearts_2.png');
        this.load.image('h3', 'assets/hearts_3.png');
        this.load.image('h4', 'assets/hearts_4.png');
        this.load.image('h5', 'assets/hearts_5.png');
        this.load.image('h6', 'assets/hearts_6.png');
        this.load.image('h7', 'assets/hearts_7.png');
        this.load.image('h8', 'assets/hearts_8.png');
        this.load.image('h9', 'assets/hearts_9.png');
        this.load.image('h10', 'assets/hearts_10.png');
        this.load.image('h11', 'assets/hearts_11.png');
        this.load.image('h12', 'assets/hearts_12.png');
        this.load.image('h13', 'assets/hearts_13.png');

        this.load.image('s1', 'assets/spades_1.png');
        this.load.image('s2', 'assets/spades_2.png');
        this.load.image('s3', 'assets/spades_3.png');
        this.load.image('s4', 'assets/spades_4.png');
        this.load.image('s5', 'assets/spades_5.png');
        this.load.image('s6', 'assets/spades_6.png');
        this.load.image('s7', 'assets/spades_7.png');
        this.load.image('s8', 'assets/spades_8.png');
        this.load.image('s9', 'assets/spades_9.png');
        this.load.image('s10', 'assets/spades_10.png');
        this.load.image('s11', 'assets/spades_11.png');
        this.load.image('s12', 'assets/spades_12.png');
        this.load.image('s13', 'assets/spades_13.png');

    }

    create ()
    {

        this.#deck = new Deck();
        this.#player = new Player();

        this.#deck.shuffle();
        
        let cardsToDeal = 26;
        while(cardsToDeal > 0){
            const card = this.#deck.draw();
            this.#player.takeCard(card);
            cardsToDeal--;
        }
        this.#player.drawCard();
        this.#player.drawCard();
        this.#player.drawCard();
        const activeCards = this.#player.showActiveCards();
        
        let xVar = 0;

        activeCards.forEach(card => {
            this.#chosenCards.push(new CardObject(this, 250+xVar, 500, card));
            xVar+= 45;
        });
        this.events.on('card-chosen', this.handleCardChosenEvent, this);

    }

    handleCardChosenEvent(cardName) {
        console.log(this.#player);
        console.log('Card chosen '+cardName);
        this.#chosenCards.forEach(card => {
            if(card.getName() != cardName){
                card.destroy();
                this.#player.return(cardName);
            }
        });
    }

    update ()
    {
    }
}