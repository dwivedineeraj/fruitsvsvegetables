const FruitCardGame = require('./game.js');

// Create a new game
const game = new FruitCardGame();

console.log('🍎 Welcome to Fruit Card Battle! 🍎');
console.log('First to win 4 rounds wins the game!\n');

function displayGameState() {
  const state = game.getGameState();
  console.log(`📊 Score: Player 1: ${state.player1Score} | Player 2: ${state.player2Score}`);
  console.log(`🎯 Current Player: Player ${state.currentPlayer}\n`);
  
  if (state.currentRound.player1Card && state.currentRound.player2Card) {
    console.log(`🃏 Cards this round:`);
    console.log(`   Player 1: ${state.currentRound.player1Card}`);
    console.log(`   Player 2: ${state.currentRound.player2Card}\n`);
    
    if (!state.currentRound.chosenAttribute) {
      console.log(`Available attributes to choose from:`);
      state.getAvailableAttributes ? state.getAvailableAttributes() : game.getAvailableAttributes().forEach((attr, index) => {
        console.log(`   ${index + 1}. ${attr.name}`);
      });
    }
  }
  
  if (state.currentRound.result) {
    console.log(`🎲 Round Result: ${state.currentRound.result.message}\n`);
  }
  
  if (state.gameOver) {
    console.log(`🎉 GAME OVER! Player ${state.winner} wins! 🎉\n`);
  }
}

function simulateGame() {
  console.log('🎮 Starting a simulated game...\n');
  
  // Play a few rounds automatically
  for (let round = 1; round <= 8 && !game.gameOver; round++) {
    console.log(`--- Round ${round} ---`);
    
    // Deal cards for this round
    game.startNewRound();
    displayGameState();
    
    // Simulate current player choosing a random attribute
    const attributes = game.getAvailableAttributes();
    const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
    
    console.log(`Player ${game.currentPlayer} chooses: ${randomAttribute.name}`);
    game.selectAttribute(randomAttribute.key);
    
    displayGameState();
    console.log('─'.repeat(50));
  }
}

// Run the simulation
simulateGame();

// Show how to access fruit data
console.log('\n📋 Sample fruit data:');
const appleData = game.getFruitData('Apple');
console.log('Apple stats:', appleData.stats_per_kg);

const bananaData = game.getFruitData('Banana');
console.log('Banana stats:', bananaData.stats_per_kg); 