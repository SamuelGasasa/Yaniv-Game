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
    this.deck = [];
  }

  fillUp() {
    let rank = 13;
    let arr = [];

    while (rank) {
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
}

class PlayerDeck extends Deck {
  constructor() {
    super();
  }
}

class TableDeck extends Deck {
  constructor() {
    super();
  }
}

class PileDeck extends Deck {
  constructor() {
    super();
  }
}

const deck = document.getElementById("deck");

deck.addEventListener("onclick", dealDeck());

function dealDeck() {}

// const cardDeck = new Card("heart", 6);

// console.log(cardDeck.log);

const newDeck = new Deck();

newDeck.fillUp();

console.log(newDeck.deck);
