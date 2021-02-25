class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    if (this.rank === "A") {
      this.isJoker = true;
    } else this.isJoker = false;
  }
}

class Deck {
  constructor() {
    let rank = 14;
    let arr = [];

    while (rank) {
      if (rank === 14) {
        arr.push(new Card("Heart", "A"));
        arr.push(new Card("Club", "A"));
        arr.push(new Card("Diamond", "A"));
        arr.push(new Card("Spade", "A"));
        rank--;
      }
      if (rank === 13) {
        arr.push(new Card("Heart", "K"));
        arr.push(new Card("Club", "K"));
        arr.push(new Card("Diamond", "K"));
        arr.push(new Card("Spade", "K"));
        rank--;
        continue;
      }
      if (rank === 12) {
        arr.push(new Card("Heart", "Q"));
        arr.push(new Card("Club", "Q"));
        arr.push(new Card("Diamond", "Q"));
        arr.push(new Card("Spade", "Q"));
        rank--;
        continue;
      }
      if (rank === 11) {
        arr.push(new Card("Heart", "J"));
        arr.push(new Card("Club", "J"));
        arr.push(new Card("Diamond", "J"));
        arr.push(new Card("Spade", "J"));
        rank--;
        continue;
      }
      arr.push(new Card("Heart", rank));
      arr.push(new Card("Club", rank));
      arr.push(new Card("Diamond", rank));
      arr.push(new Card("Spade", rank));
      rank--;
    }
    this.deck = arr;
  }

  static deal() {
    const randomCard = tableDeck[Math.floor(Math.random() * tableDeck.length)];
    this.hand.push(tableDeck[randomCard]);
    tableDeck.remove(randomCard);
  }
}

class PlayerDeck extends Deck {
  constructor() {
    super();
    this.hand = [];
  }
}

class TableDeck extends Deck {
  constructor() {
    super();
    this.table = [];
  }
}

class PileDeck extends Deck {
  constructor() {
    super();
    this.pile = [];
  }
}

function dealDeck() {}

// const cardDeck = new Card("heart", 6);

// console.log(cardDeck.log);

let newDeck = new Deck();

console.log(newDeck.deck);

let player1Deck = new PlayerDeck();
let player2Deck = new PlayerDeck();
let player3Deck = new PlayerDeck();
let player4Deck = new PlayerDeck();

let table = new tableDeck();

let pile = new PileDeck();

const deck = document.getElementById("deck");

deck.addEventListener("onclick", dealDeck());
