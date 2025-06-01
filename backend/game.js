const fruitData = require('./db.js');

class FruitCardGame {
  constructor() {
    // Select 7 diverse fruits for the game deck
    this.gameDeck = [
      'Apple', 'Banana', 'Orange', 'Strawberry', 
      'Watermelon', 'Avocado', 'Lemon'
    ];
    
    this.attributes = [
      'Energy_kcal', 'Water_g', 'Sugars_g', 
      'Fiber_g', 'VitaminC_mg', 'Potassium_mg'
    ];
    
    this.attributeNames = {
      'Energy_kcal': 'Energy (kcal)',
      'Water_g': 'Water (g)',
      'Sugars_g': 'Sugars (g)',
      'Fiber_g': 'Fiber (g)',
      'VitaminC_mg': 'Vitamin C (mg)',
      'Potassium_mg': 'Potassium (mg)'
    };
    
    this.resetGame();
  }
  
  resetGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = 1; // 1 or 2
    this.gameOver = false;
    this.winner = null;
    this.currentRound = {
      player1Card: null,
      player2Card: null,
      chosenAttribute: null,
      result: null
    };
    this.deck = [...this.gameDeck]; // Copy the deck
    this.shuffleDeck();
  }
  
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  
  getFruitData(fruitName) {
    return fruitData.find(fruit => fruit.name === fruitName);
  }
  
  dealCards() {
    if (this.deck.length < 2) {
      // Reshuffle if we don't have enough cards
      this.deck = [...this.gameDeck];
      this.shuffleDeck();
    }
    
    this.currentRound.player1Card = this.deck.pop();
    this.currentRound.player2Card = this.deck.pop();
    this.currentRound.chosenAttribute = null;
    this.currentRound.result = null;
  }
  
  selectAttribute(attribute) {
    if (!this.attributes.includes(attribute)) {
      throw new Error('Invalid attribute');
    }
    
    if (this.currentRound.chosenAttribute) {
      throw new Error('Attribute already selected for this round');
    }
    
    this.currentRound.chosenAttribute = attribute;
    this.resolveRound();
  }
  
  resolveRound() {
    const fruit1Data = this.getFruitData(this.currentRound.player1Card);
    const fruit2Data = this.getFruitData(this.currentRound.player2Card);
    
    const value1 = fruit1Data.stats_per_kg[this.currentRound.chosenAttribute];
    const value2 = fruit2Data.stats_per_kg[this.currentRound.chosenAttribute];
    
    if (value1 > value2) {
      this.player1Score++;
      this.currentRound.result = {
        winner: 1,
        value1,
        value2,
        message: `Player 1 wins! ${value1} > ${value2}`
      };
    } else if (value2 > value1) {
      this.player2Score++;
      this.currentRound.result = {
        winner: 2,
        value1,
        value2,
        message: `Player 2 wins! ${value2} > ${value1}`
      };
    } else {
      // Tie - no one gets a point
      this.currentRound.result = {
        winner: 0,
        value1,
        value2,
        message: `It's a tie! ${value1} = ${value2}`
      };
    }
    
    // Check for game winner
    if (this.player1Score >= 4) {
      this.gameOver = true;
      this.winner = 1;
    } else if (this.player2Score >= 4) {
      this.gameOver = true;
      this.winner = 2;
    } else {
      // Switch turns for next round
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
  }
  
  startNewRound() {
    if (this.gameOver) {
      throw new Error('Game is over. Start a new game.');
    }
    
    this.dealCards();
  }
  
  getGameState() {
    return {
      player1Score: this.player1Score,
      player2Score: this.player2Score,
      currentPlayer: this.currentPlayer,
      gameOver: this.gameOver,
      winner: this.winner,
      currentRound: {
        ...this.currentRound,
        player1CardData: this.currentRound.player1Card ? this.getFruitData(this.currentRound.player1Card) : null,
        player2CardData: this.currentRound.player2Card ? this.getFruitData(this.currentRound.player2Card) : null
      },
      attributes: this.attributes,
      attributeNames: this.attributeNames
    };
  }
  
  getAvailableAttributes() {
    return this.attributes.map(attr => ({
      key: attr,
      name: this.attributeNames[attr]
    }));
  }
}

module.exports = FruitCardGame; 