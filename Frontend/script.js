const deck = document.getElementById("deck");

deck.addEventListener("onclick", dealDeck());

function dealDeck() {
  let currentDeck = 54;
}

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    if (this.rank === "A") {
      this.isJoker = true;
    } else this.isJoker = false;
  }

  log() {
    console.log("test");
  }
}

const cardDeck = new Card("heart", 6);

console.log(cardDeck.log);
