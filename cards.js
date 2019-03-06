class Card {
    constructor(suit, s_val, n_val){
        this.suit = suit;
        this.s_val = s_val;
        this.n_val = n_val;
    }
    
    showCard() {
        console.log("Suit: "+ this.suit + "Value: "+ this.s_val);
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck() {
        let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        let s_values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", 
            "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        for (var suit of suits){
            for (var i=0; i <13; i++){
                this.deck.push(new Card(suit, s_values[i], i+1));
            }
        }
    }

    shuffleDeck(arr) {
        var m = arr.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = arr[m];
          arr[m] = arr[i];
          arr[i] = t;
        }
        return arr;
    }

    resetDeck() {
        this.deck = [];
        this.createDeck();
    }

    dealCard() {
        var index = Math.floor(Math.random() * (this.deck.length-1));
        var dealt_card = this.deck[index]
        this.deck.splice(index, 1);
        return dealt_card;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    getCards(arr) {
        if (arr.length >= 5) {
            for (var i=0; i<5; i++){
                this.hand.push(arr[i]);
            }
            arr.splice(0,5);
        }
        return this.hand;
    }

    showHand() {
        console.log(this.name + "'s hand!");
        return this.hand;
    }

    // discardSuit(suit, val) {
    //     for (var idx in this.hand){
    //         if (this.hand[idx]['suit'] == suit && this.hand[idx]['val'] == val){
    //             this.hand.splice(idx, 1);
    //         }
    //     }
    //     return this.hand;
    // }
    discardIndex(idx){
        this.hand.splice(idx+1, 1);
        return this.hand;
    }

    drawCard(card) {
        if (card instanceof Card){
            this.hand.push(card);
        }
        return this.hand;
    }
}

var harrys = new Deck();
var p1 = new Player("Jake");
var p2 = new Player("John");

harrys.createDeck();
harrys.shuffleDeck(harrys.deck);
// console.log(harrys);

p1.getCards(harrys.deck);
p2.getCards(harrys.deck);
console.log(harrys.deck.length);
console.log(p1.showHand());
console.log(p1.discardIndex(3));
console.log(p1.drawCard(harrys.dealCard()));
