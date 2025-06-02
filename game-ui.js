// Import our game logic (we'll need to adapt this for browser)
// For now, we'll copy the essential parts here

// Expanded database with fruits and vegetables
const fruitData = [
  // FRUITS
  {
    "name": "Apple",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 520,
      "Water_g": 855.6,
      "Sugars_g": 103.9,
      "Fiber_g": 24,
      "VitaminC_mg": 46,
      "Potassium_mg": 1070
    }
  },
  {
    "name": "Green Apple",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 580,
      "Water_g": 840.2,
      "Sugars_g": 98.1,
      "Fiber_g": 26,
      "VitaminC_mg": 48,
      "Potassium_mg": 1070
    }
  },
  {
    "name": "Banana",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 890,
      "Water_g": 749.1,
      "Sugars_g": 122.3,
      "Fiber_g": 26,
      "VitaminC_mg": 87,
      "Potassium_mg": 3580
    }
  },
  {
    "name": "Orange",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 470,
      "Water_g": 867.5,
      "Sugars_g": 93.5,
      "Fiber_g": 24,
      "VitaminC_mg": 532,
      "Potassium_mg": 1810
    }
  },
  {
    "name": "Strawberry",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 320,
      "Water_g": 909.5,
      "Sugars_g": 48.9,
      "Fiber_g": 20,
      "VitaminC_mg": 588,
      "Potassium_mg": 1530
    }
  },
  {
    "name": "Blueberry",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 570,
      "Water_g": 842.1,
      "Sugars_g": 99.6,
      "Fiber_g": 24,
      "VitaminC_mg": 97,
      "Potassium_mg": 770
    }
  },
  {
    "name": "Grapes",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 690,
      "Water_g": 805.4,
      "Sugars_g": 154.8,
      "Fiber_g": 9,
      "VitaminC_mg": 32,
      "Potassium_mg": 1910
    }
  },
  {
    "name": "Watermelon",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 300,
      "Water_g": 914.5,
      "Sugars_g": 62,
      "Fiber_g": 4,
      "VitaminC_mg": 81,
      "Potassium_mg": 1120
    }
  },
  {
    "name": "Melon",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 340,
      "Water_g": 901.5,
      "Sugars_g": 78.6,
      "Fiber_g": 9,
      "VitaminC_mg": 367,
      "Potassium_mg": 2670
    }
  },
  {
    "name": "Pineapple",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 500,
      "Water_g": 860,
      "Sugars_g": 98.5,
      "Fiber_g": 14,
      "VitaminC_mg": 478,
      "Potassium_mg": 1090
    }
  },
  {
    "name": "Mango",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 600,
      "Water_g": 834.6,
      "Sugars_g": 136.6,
      "Fiber_g": 16,
      "VitaminC_mg": 364,
      "Potassium_mg": 1680
    }
  },
  {
    "name": "Kiwi",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 610,
      "Water_g": 830.7,
      "Sugars_g": 89.9,
      "Fiber_g": 30,
      "VitaminC_mg": 927,
      "Potassium_mg": 3120
    }
  },
  {
    "name": "Lemon",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 290,
      "Water_g": 889.8,
      "Sugars_g": 25,
      "Fiber_g": 28,
      "VitaminC_mg": 530,
      "Potassium_mg": 1380
    }
  },
  {
    "name": "Avocado",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 1600,
      "Water_g": 732.3,
      "Sugars_g": 6.6,
      "Fiber_g": 67,
      "VitaminC_mg": 100,
      "Potassium_mg": 4850
    }
  },
  {
    "name": "Cherry",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 630,
      "Water_g": 822.5,
      "Sugars_g": 128.2,
      "Fiber_g": 21,
      "VitaminC_mg": 70,
      "Potassium_mg": 2220
    }
  },
  {
    "name": "Pear",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 570,
      "Water_g": 839.6,
      "Sugars_g": 97.5,
      "Fiber_g": 31,
      "VitaminC_mg": 43,
      "Potassium_mg": 1160
    }
  },
  {
    "name": "Peach",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 390,
      "Water_g": 888.7,
      "Sugars_g": 83.9,
      "Fiber_g": 15,
      "VitaminC_mg": 66,
      "Potassium_mg": 1900
    }
  },
  {
    "name": "Coconut",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 3540,
      "Water_g": 470,
      "Sugars_g": 62,
      "Fiber_g": 90,
      "VitaminC_mg": 33,
      "Potassium_mg": 3560
    }
  },
  {
    "name": "Tomato",
    "type": "fruit",
    "stats_per_kg": {
      "Energy_kcal": 180,
      "Water_g": 948.5,
      "Sugars_g": 26.2,
      "Fiber_g": 12,
      "VitaminC_mg": 138,
      "Potassium_mg": 2370
    }
  },
  
  // VEGETABLES
  {
    "name": "Broccoli",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 340,
      "Water_g": 897.6,
      "Sugars_g": 15.5,
      "Fiber_g": 26,
      "VitaminC_mg": 892,
      "Potassium_mg": 3160
    }
  },
  {
    "name": "Spinach",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 230,
      "Water_g": 919.5,
      "Sugars_g": 4.2,
      "Fiber_g": 22,
      "VitaminC_mg": 282,
      "Potassium_mg": 5580
    }
  },
  {
    "name": "Carrot",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 410,
      "Water_g": 881.3,
      "Sugars_g": 47.4,
      "Fiber_g": 28,
      "VitaminC_mg": 59,
      "Potassium_mg": 3200
    }
  },
  {
    "name": "Bell Pepper",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 200,
      "Water_g": 940.5,
      "Sugars_g": 24.2,
      "Fiber_g": 25,
      "VitaminC_mg": 1900,
      "Potassium_mg": 2110
    }
  },
  {
    "name": "Sweet Potato",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 860,
      "Water_g": 775.8,
      "Sugars_g": 42.9,
      "Fiber_g": 30,
      "VitaminC_mg": 23,
      "Potassium_mg": 3370
    }
  },
  {
    "name": "Cucumber",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 160,
      "Water_g": 951.0,
      "Sugars_g": 17.3,
      "Fiber_g": 5,
      "VitaminC_mg": 28,
      "Potassium_mg": 1470
    }
  },
  {
    "name": "Onion",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 400,
      "Water_g": 894.0,
      "Sugars_g": 42.4,
      "Fiber_g": 17,
      "VitaminC_mg": 74,
      "Potassium_mg": 1460
    }
  },
  {
    "name": "Potato",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 770,
      "Water_g": 793.0,
      "Sugars_g": 8.2,
      "Fiber_g": 22,
      "VitaminC_mg": 197,
      "Potassium_mg": 4250
    }
  },
  {
    "name": "Eggplant",
    "type": "vegetable",
    "stats_per_kg": {
      "Energy_kcal": 250,
      "Water_g": 921.4,
      "Sugars_g": 35.3,
      "Fiber_g": 30,
      "VitaminC_mg": 22,
      "Potassium_mg": 2290
    }
  }
];

// Expanded emojis for fruits and vegetables
const fruitEmojis = {
  // Fruits
  'Apple': '🍎',
  'Green Apple': '🍏',
  'Banana': '🍌',
  'Orange': '🍊',
  'Strawberry': '🍓',
  'Blueberry': '🫐',
  'Grapes': '🍇',
  'Watermelon': '🍉',
  'Melon': '🍈',
  'Pineapple': '🍍',
  'Mango': '🥭',
  'Kiwi': '🥝',
  'Lemon': '🍋',
  'Avocado': '🥑',
  'Cherry': '🍒',
  'Pear': '🍐',
  'Peach': '🍑',
  'Coconut': '🥥',
  'Tomato': '🍅',
  
  // Vegetables
  'Broccoli': '🥦',
  'Spinach': '🥬',
  'Carrot': '🥕',
  'Bell Pepper': '🫑',
  'Sweet Potato': '🍠',
  'Cucumber': '🥒',
  'Onion': '🧅',
  'Potato': '🥔',
  'Eggplant': '🍆'
};

// Power calculation system
class PowerCalculator {
  constructor() {
    this.attributePercentiles = this.calculatePercentiles();
    this.addPowerScores();
  }
  
  calculatePercentiles() {
    const percentiles = {};
    
    // For each attribute, calculate percentiles
    for (let attr of ['Energy_kcal', 'Water_g', 'Sugars_g', 'Fiber_g', 'VitaminC_mg', 'Potassium_mg']) {
      const values = fruitData.map(item => item.stats_per_kg[attr]).sort((a, b) => a - b);
      percentiles[attr] = values;
    }
    
    return percentiles;
  }
  
  getPercentile(value, attribute) {
    const sortedValues = this.attributePercentiles[attribute];
    const rank = sortedValues.filter(v => v <= value).length;
    return rank / sortedValues.length;
  }
  
  calculatePowerScore(item) {
    const numAttributes = Object.keys(item.stats_per_kg).length;
    const weight = 1 / numAttributes;
    
    let totalScore = 0;
    for (let attr in item.stats_per_kg) {
      const percentile = this.getPercentile(item.stats_per_kg[attr], attr);
      totalScore += percentile * weight;
    }
    
    return Math.round(totalScore * 10000);
  }
  
  addPowerScores() {
    for (let item of fruitData) {
      item.powerScore = this.calculatePowerScore(item);
    }
  }
  
  analyzeBalance() {
    const fruits = fruitData.filter(item => item.type === 'fruit');
    const vegetables = fruitData.filter(item => item.type === 'vegetable');
    
    const fruitScores = fruits.map(f => f.powerScore);
    const vegScores = vegetables.map(v => v.powerScore);
    
    const avgFruit = fruitScores.reduce((a, b) => a + b, 0) / fruitScores.length;
    const avgVeg = vegScores.reduce((a, b) => a + b, 0) / vegScores.length;
    
    console.log('🍎 Fruit Average Power:', Math.round(avgFruit));
    console.log('🥬 Vegetable Average Power:', Math.round(avgVeg));
    console.log('⚖️ Balance Ratio:', (avgVeg / avgFruit * 100).toFixed(1) + '%');
    
    // Show top 5 of each type
    console.log('\n🏆 TOP 5 FRUITS:');
    fruits.sort((a, b) => b.powerScore - a.powerScore).slice(0, 5).forEach((item, i) => {
      console.log(`${i+1}. ${item.name}: ${item.powerScore}`);
    });
    
    console.log('\n🏆 TOP 5 VEGETABLES:');
    vegetables.sort((a, b) => b.powerScore - a.powerScore).slice(0, 5).forEach((item, i) => {
      console.log(`${i+1}. ${item.name}: ${item.powerScore}`);
    });
    
    // Show attribute dominance
    console.log('\n📊 ATTRIBUTE ANALYSIS:');
    for (let attr of ['Energy_kcal', 'Water_g', 'Sugars_g', 'Fiber_g', 'VitaminC_mg', 'Potassium_mg']) {
      const fruitValues = fruits.map(f => f.stats_per_kg[attr]);
      const vegValues = vegetables.map(v => v.stats_per_kg[attr]);
      const fruitMax = Math.max(...fruitValues);
      const vegMax = Math.max(...vegValues);
      const fruitAvg = fruitValues.reduce((a, b) => a + b, 0) / fruitValues.length;
      const vegAvg = vegValues.reduce((a, b) => a + b, 0) / vegValues.length;
      
      console.log(`${attr}: 🍎 ${fruitAvg.toFixed(1)} vs 🥬 ${vegAvg.toFixed(1)} (max: 🍎 ${fruitMax} vs 🥬 ${vegMax})`);
    }
    
    return {
      fruitAvg: avgFruit,
      vegAvg: avgVeg,
      ratio: avgVeg / avgFruit
    };
  }
}

// Game state
class FruitCardGameUI {
  constructor() {
    // Show loading screen and start initialization
    this.initializeGame();
  }
  
  async initializeGame() {
    // Start loading process
    this.updateLoadingProgress(10, "Initializing game...");
    
    // Initialize basic properties
    this.allFruits = fruitData.map(fruit => fruit.name);
    this.attributes = ['Energy_kcal', 'Water_g', 'Sugars_g', 'Fiber_g', 'VitaminC_mg', 'Potassium_mg'];
    this.attributeNames = {
      'Energy_kcal': 'Energy ⚡',
      'Water_g': 'Water 💧',
      'Sugars_g': 'Sugars 🍯',
      'Fiber_g': 'Fiber 🌾',
      'VitaminC_mg': 'Vitamin C 🍊',
      'Potassium_mg': 'Potassium 💪'
    };
    this.attributeColors = {
      'Energy_kcal': 'bg-yellow-500',
      'Water_g': 'bg-blue-500',
      'Sugars_g': 'bg-pink-500',
      'Fiber_g': 'bg-green-500',
      'VitaminC_mg': 'bg-orange-500',
      'Potassium_mg': 'bg-purple-500'
    };
    
    this.updateLoadingProgress(30, "Calculating nutrition values...");
    await this.delay(500);
    
    // Initialize power calculator and analyze balance
    this.powerCalculator = new PowerCalculator();
    this.balanceAnalysis = this.powerCalculator.analyzeBalance();
    
    this.updateLoadingProgress(50, "Setting up computer opponents...");
    await this.delay(500);
    
    // Team selection
    this.playerTeam = null; // 'fruit' or 'vegetable'
    this.teamSelected = false;
    
    // Player profile with localStorage
    this.userName = '';
    this.userIcon = '👤';
    this.profileSetup = false;
    
    // Mixed computer personalities - funny food names + professional ones
    this.computerPersonalities = [
      // Funny food characters
      { name: 'VeggieMaster3000', icon: '🤖', style: 'the nutrition-obsessed robot' },
      { name: 'Captain Carrot', icon: '🥕', style: 'the orange-powered superhero' },
      { name: 'Sir Broccoli', icon: '🥦', style: 'the fancy green knight' },
      { name: 'Professor Pickle', icon: '🥒', style: 'the sour science genius' },
      { name: 'Banana Bob', icon: '🍌', style: 'the slippery comedian' },
      { name: 'Count Celery', icon: '🧛‍♂️', style: 'the crunchy vampire' },
      { name: 'Pizza Pete', icon: '🍕', style: 'the cheesy champion' },
      { name: 'Granny Smith', icon: '👵', style: 'the wise recipe keeper' },
      
      // Professional/General characters  
      { name: 'NutriBot', icon: '🤖', style: 'the analytical nutrition expert' },
      { name: 'Chef Marco', icon: '👨‍🍳', style: 'the culinary master' },
      { name: 'Dr. Vita', icon: '👩‍⚕️', style: 'the health specialist' },
      { name: 'Farmer Joe', icon: '👨‍🌾', style: 'the agricultural guru' },
      { name: 'Professor Green', icon: '👩‍🔬', style: 'the food scientist' },
      { name: 'Captain Crunch', icon: '🦸‍♂️', style: 'the nutrition superhero' },
      { name: 'Iron Chef', icon: '👨‍💼', style: 'the competitive cook' },
      { name: 'DJ SpinachBeats', icon: '🎧', style: 'the leafy music mixer' }
    ];
    
    this.currentComputer = this.getRandomComputer();
    
    this.updateLoadingProgress(70, "Loading player options...");
    await this.delay(500);
    
    // Available user icons
    this.userIconOptions = [
      '👤', '👨', '👩', '🧑', '👦', '👧', 
      '👨‍🎓', '👩‍🎓', '🧑‍🎓', '👨‍💼', '👩‍💼', '🧑‍💼',
      '👨‍🔬', '👩‍🔬', '🧑‍🔬', '👨‍🍳', '👩‍🍳', '🧑‍🍳',
      '🦸‍♂️', '🦸‍♀️', '🥷', '👑', '🎯', '⭐'
    ];
    
    // Load user profile from localStorage
    this.loadUserProfile();
    
    this.updateLoadingProgress(90, "Finalizing setup...");
    await this.delay(500);
    
    this.initializeEventListeners();
    
    // Update profile button after everything is loaded
    this.updateProfileButton();
    
    this.updateLoadingProgress(100, "Ready to play!");
    await this.delay(500);
    
    // Hide loading screen and start game
    this.hideLoadingScreen();
    this.resetGame(); // Automatically start the game
  }
  
  updateLoadingProgress(percentage, message) {
    const progressBar = document.getElementById('loadingProgress');
    const loadingText = document.querySelector('#loadingScreen p');
    
    if (progressBar) {
      progressBar.style.width = percentage + '%';
    }
    if (loadingText) {
      loadingText.textContent = message;
    }
  }
  
  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  loadUserProfile() {
    const savedProfile = localStorage.getItem('fruitVeggieGameProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      this.userName = profile.userName || '';
      this.userIcon = profile.userIcon || '👤';
      this.profileSetup = !!(profile.userName && profile.userIcon);
      this.updateProfileButton();
    }
  }
  
  saveUserProfile() {
    const profile = {
      userName: this.userName,
      userIcon: this.userIcon
    };
    localStorage.setItem('fruitVeggieGameProfile', JSON.stringify(profile));
    this.profileSetup = true;
    this.updateProfileButton();
  }
  
  updateProfileButton() {
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn && this.userIcon) {
      // Update the profile button to show user's icon
      profileBtn.innerHTML = `
        <div class="text-lg">${this.userIcon}</div>
        <span class="hidden sm:inline">Me!</span>
      `;
    }
  }
  
  showProfileSetup() {
    const teamSelectionContent = document.getElementById('fruitSelectionContent');
    
    teamSelectionContent.innerHTML = `
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-purple-800 mb-3 fun-font">👋 Hi There! 👋</h2>
        <p class="text-base text-purple-600 mb-4 bubble-font">Let's set up your awesome profile!</p>
      </div>
      
      <!-- Username Input -->
      <div class="mb-6">
        <label class="block text-base font-bold text-gray-700 mb-2 fun-font">Your Cool Name:</label>
        <input type="text" id="usernameInput" 
               class="w-full px-4 py-4 border-4 border-purple-300 rounded-2xl text-center text-lg font-bold focus:border-purple-500 focus:outline-none bubble-font shadow-lg"
               placeholder="Type your name here..."
               value="${this.userName}"
               maxlength="20">
      </div>
      
      <!-- Icon Selection -->
      <div class="mb-6">
        <label class="block text-base font-bold text-gray-700 mb-3 fun-font">Pick Your Avatar:</label>
        <div class="overflow-x-auto scrollbar-hide">
          <div class="grid grid-rows-2 grid-flow-col auto-cols-max gap-3 justify-start pb-2" style="grid-template-rows: repeat(2, minmax(0, 1fr));">
            ${this.userIconOptions.map(icon => `
              <button class="user-icon-btn ${this.userIcon === icon ? 'bg-yellow-200 border-yellow-500 scale-110' : 'bg-white border-purple-300'} hover:bg-yellow-100 border-4 hover:border-yellow-500 rounded-2xl p-3 text-center hover:scale-125 transform transition shadow-lg hover:shadow-xl btn-bounce min-w-[60px]" data-icon="${icon}">
                <div class="text-2xl">${icon}</div>
              </button>
            `).join('')}
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2 text-center">← Scroll horizontally to see more avatars →</p>
      </div>
      
      <!-- Save Button -->
      <div class="text-center">
        <button id="saveProfileBtn" class="btn-rainbow bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform transition hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed fun-font">
          🚀 Let's Battle!
        </button>
      </div>
    `;
    
    // Add event listeners
    const usernameInput = document.getElementById('usernameInput');
    const saveBtn = document.getElementById('saveProfileBtn');
    
    // Username input handler
    usernameInput.addEventListener('input', (e) => {
      this.userName = e.target.value.trim();
      this.updateSaveButton();
    });
    
    // Icon selection handlers
    document.querySelectorAll('.user-icon-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove selection from all buttons
        document.querySelectorAll('.user-icon-btn').forEach(b => {
          b.className = 'user-icon-btn bg-white border-purple-300 hover:bg-yellow-100 border-4 hover:border-yellow-500 rounded-2xl p-3 text-center hover:scale-125 transform transition shadow-lg hover:shadow-xl btn-bounce';
        });
        
        // Add selection to clicked button
        btn.className = 'user-icon-btn bg-yellow-200 border-yellow-500 scale-110 border-4 rounded-2xl p-3 text-center transform shadow-xl';
        
        this.userIcon = btn.dataset.icon;
        this.updateSaveButton();
      });
    });
    
    // Save button handler
    saveBtn.addEventListener('click', () => {
      if (this.userName && this.userIcon) {
        this.saveUserProfile();
        this.showTeamSelection();
      }
    });
    
    this.updateSaveButton();
    document.getElementById('fruitSelectionModal').style.display = 'flex';
  }
  
  updateSaveButton() {
    const saveBtn = document.getElementById('saveProfileBtn');
    if (saveBtn) {
      saveBtn.disabled = !(this.userName && this.userIcon);
    }
  }
  
  getRandomComputer() {
    return this.computerPersonalities[Math.floor(Math.random() * this.computerPersonalities.length)];
  }
  
  resetGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = 1;
    this.gameOver = false;
    this.winner = null;
    this.isTiebreaker = false;
    this.tiebreakerChoices = null;
    this.cardSelectionMode = false;
    this.usedFruits = []; // Track fruits already used by the player
    this.currentRound = {
      player1Card: null,
      player2Card: null,
      chosenAttribute: null,
      result: null
    };
    
    // Get new computer personality for each game
    this.currentComputer = this.getRandomComputer();
    
    this.updateDisplay();
    
    // Update computer references in HTML after setting new personality
    this.updateComputerReferences();
    
    // Show team selection if not selected, otherwise start game
    if (!this.teamSelected || !this.profileSetup) {
      if (!this.profileSetup) {
        this.showProfileSetup();
      } else {
        this.showTeamSelection();
      }
    } else {
      this.dealCards();
    }
  }
  
  getFruitData(fruitName) {
    return fruitData.find(fruit => fruit.name === fruitName);
  }
  
  // Get available fruits (excluding already used ones)
  getAvailableFruits() {
    return this.allFruits.filter(fruit => !this.usedFruits.includes(fruit));
  }
  
  // Computer AI to choose best attribute for its card
  getComputerChoice() {
    const computerCard = this.currentRound.player2Card;
    const computerData = this.getFruitData(computerCard);
    
    // Find the attribute where computer has the highest value
    let bestAttribute = this.attributes[0];
    let bestValue = computerData.stats_per_kg[bestAttribute];
    
    for (let attr of this.attributes) {
      const value = computerData.stats_per_kg[attr];
      if (value > bestValue) {
        bestValue = value;
        bestAttribute = attr;
      }
    }
    
    return bestAttribute;
  }
  
  showTeamSelection() {
    const teamSelectionContent = document.getElementById('fruitSelectionContent');
    
    if (!this.profileSetup) {
      // Show profile setup first
      this.showProfileSetup();
    } else {
      // Show team selection
      teamSelectionContent.innerHTML = `
        <div class="text-center mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-purple-800 mb-3 fun-font">🏆 Choose Your Side! 🏆</h2>
          
          <!-- VS Display -->
          <div class="bg-gradient-to-r from-blue-100 via-purple-100 to-red-100 rounded-2xl p-4 mb-4 shadow-xl border-4 border-rainbow-300">
            <div class="flex items-center justify-center space-x-8">
              <div class="text-center flex-1">
                <div class="text-4xl mb-2 flex justify-center">${this.userIcon}</div>
                <div class="text-base md:text-lg font-bold text-blue-800 fun-font">${this.userName}</div>
              </div>
              
              <div class="flex flex-col items-center">
                <div class="text-2xl font-bold text-red-600 mb-1 fun-font">VS</div>
                <div class="text-base text-gray-600 italic bubble-font">⚔️</div>
              </div>
              
              <div class="text-center flex-1">
                <div class="text-4xl mb-2 flex justify-center">${this.currentComputer.icon}</div>
                <div class="text-base md:text-lg font-bold text-red-800 fun-font">${this.currentComputer.name}</div>
              </div>
            </div>
            <div class="text-center mt-2">
              <div class="text-base text-gray-600 italic bubble-font">${this.currentComputer.style}</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Fruits -->
          <button id="selectFruitTeam" class="team-selection-btn bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-blue-300 hover:border-blue-500 rounded-3xl p-6 text-center hover:scale-110 transform transition shadow-xl hover:shadow-2xl btn-bounce">
            <div class="text-6xl mb-4">🍎</div>
            <h3 class="text-xl font-bold text-blue-800 mb-2 fun-font">Fruits</h3>
            <p class="text-base text-blue-600 bubble-font">Sweet & Natural! 🍯</p>
          </button>
          
          <!-- Vegetables -->
          <button id="selectVegetableTeam" class="team-selection-btn bg-gradient-to-br from-green-100 to-teal-100 border-4 border-green-300 hover:border-green-500 rounded-3xl p-6 text-center hover:scale-110 transform transition shadow-xl hover:shadow-2xl btn-wiggle">
            <div class="text-6xl mb-4">🥬</div>
            <h3 class="text-xl font-bold text-green-800 mb-2 fun-font">Vegetables</h3>
            <p class="text-base text-green-600 bubble-font">Healthy & Strong! 💪</p>
          </button>
        </div>
        
        <div class="text-center">
          <div class="text-base text-gray-500 bg-gradient-to-r from-yellow-100 to-pink-100 px-4 py-2 rounded-full inline-block border-2 border-yellow-300 bubble-font">
            ${this.currentComputer.name} ${this.currentComputer.icon} can pick from both sides! 🎯
          </div>
        </div>
      `;
      
      // Add click handlers for team selection
      document.getElementById('selectFruitTeam').addEventListener('click', () => {
        this.selectTeam('fruit');
      });
      
      document.getElementById('selectVegetableTeam').addEventListener('click', () => {
        this.selectTeam('vegetable');
      });
    }
    
    document.getElementById('fruitSelectionModal').style.display = 'flex';
  }
  
  selectTeam(team) {
    this.playerTeam = team;
    this.teamSelected = true;
    
    // Update the header to show team choice
    this.updateTeamDisplay();
    
    // Close team selection and start the game
    document.getElementById('fruitSelectionModal').style.display = 'none';
    
    // Start the actual game
    this.dealCards();
  }
  
  updateTeamDisplay() {
    // Update player avatar and name
    const playerAvatar = document.getElementById('playerAvatar');
    const playerName = document.getElementById('playerName');
    if (playerAvatar && playerName && this.profileSetup) {
      playerAvatar.textContent = this.userIcon;
      playerName.textContent = this.userName;
    }
    
    // Update computer avatar and name
    const computerAvatar = document.getElementById('computerAvatar');
    const computerName = document.getElementById('computerName');
    if (computerAvatar && computerName) {
      computerAvatar.textContent = this.currentComputer.icon;
      computerName.textContent = this.currentComputer.name;
    }
    
    // Update static computer references in HTML
    this.updateComputerReferences();
  }
  
  updateComputerReferences() {
    // Update computer name in scoreboard
    const computerScoreHeader = document.querySelector('.text-red-600');
    if (computerScoreHeader && computerScoreHeader.textContent.includes('Computer')) {
      computerScoreHeader.textContent = `${this.currentComputer.name} ${this.currentComputer.icon}`;
    }
    
    // Update computer card header
    const computerCardHeaders = document.querySelectorAll('h4');
    computerCardHeaders.forEach(header => {
      if (header.textContent.includes("Computer's Card")) {
        header.textContent = `${this.currentComputer.name}'s Card ${this.currentComputer.icon}`;
      }
    });
  }
  
  showCardSelection() {
    this.cardSelectionMode = true;
    const fruitSelectionContent = document.getElementById('fruitSelectionContent');
    
    // Get items from player's team only
    const playerTeamItems = fruitData.filter(item => item.type === this.playerTeam);
    const playerTeamNames = playerTeamItems.map(item => item.name);
    
    // Filter available items to only include player's team
    let availableFromTeam = playerTeamNames.filter(name => !this.usedFruits.includes(name));
    
    if (availableFromTeam.length === 0) {
      // No more items available from player's team - reset used items
      this.usedFruits = [];
      availableFromTeam = playerTeamNames;
    }
    
    // Separate used and unused items from player's team
    const usedItems = playerTeamItems.filter(item => this.usedFruits.includes(item.name));
    const availableItems = playerTeamItems.filter(item => !this.usedFruits.includes(item.name));
    
    // RANDOMIZE the available items and show only 3 as active
    const shuffledAvailable = this.shuffleArray([...availableItems]);
    const activeItems = shuffledAvailable.slice(0, 3);
    const lockedItems = shuffledAvailable.slice(3);
    
    // Order: Active items first, then locked items, then used items at the end
    const teamItems = [...activeItems, ...lockedItems, ...usedItems];
    
    const teamIcon = this.playerTeam === 'fruit' ? '🍎' : '🥬';
    const teamName = this.playerTeam === 'fruit' ? 'Fruits' : 'Vegetables';
    const teamColor = this.playerTeam === 'fruit' ? 'blue' : 'green';
    
    const selectionTitle = this.isTiebreaker 
      ? `<h2 class="text-xl font-bold text-red-600 mb-2">⚡ SUDDEN DEATH! ⚡</h2>
         <p class="text-sm text-gray-700 mb-3">Choose your ${this.playerTeam} for the final battle!</p>`
      : `<h2 class="text-xl font-bold text-${teamColor}-600 mb-2">${teamIcon} Choose Your ${teamName} ${teamIcon}</h2>
         <p class="text-sm text-gray-700 mb-3">Pick your fighter (3 available):</p>`;
    
    fruitSelectionContent.innerHTML = `
      <div class="text-center mb-4">
        ${selectionTitle}
      </div>
      
      <!-- Player's Team Section -->
      <div class="mb-4">
        <div class="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2" 
             style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;">
          ${this.createItemCards(teamItems, activeItems.map(item => item.name))}
        </div>
      </div>
      
      <!-- Team Info -->
      <div class="flex justify-center mt-3">
        <div class="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
          ${this.currentComputer.name} chooses from both sides • ${teamIcon} vs 🤖
        </div>
      </div>
    `;
    
    document.getElementById('fruitSelectionModal').style.display = 'flex';
    
    // Add click handlers for card selection (only for available items)
    document.querySelectorAll('.card-selection-btn').forEach(btn => {
      if (!btn.disabled) {
        btn.addEventListener('click', (e) => {
          const itemName = e.target.closest('.card-selection-btn').dataset.fruit;
          this.selectPlayerCard(itemName);
        });
      }
    });
  }
  
  // Utility function to shuffle an array (Fisher-Yates shuffle)
  shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid mutating original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  createItemCards(items, availableItems) {
    return items.map(itemData => {
      const itemName = itemData.name;
      const emoji = fruitEmojis[itemName] || '🍎';
      const isUsed = this.usedFruits.includes(itemName);
      const isAvailable = !isUsed && availableItems.includes(itemName);
      const isLocked = !isUsed && !isAvailable; // Not used and not in available list = locked
      const powerScore = itemData.powerScore || 0;
      const typeIcon = itemData.type === 'fruit' ? '🍎' : '🥬';
      
      let buttonClass, textClass;
      
      if (isUsed) {
        // Used items - gray style
        buttonClass = 'bg-gray-100 border-2 border-gray-300 opacity-60';
        textClass = 'text-gray-400';
      } else if (isLocked) {
        // Locked items - darker gray
        buttonClass = 'bg-gray-200 border-2 border-gray-400 opacity-70';
        textClass = 'text-gray-500';
      } else if (this.isTiebreaker) {
        // Available items in tiebreaker - red theme
        buttonClass = 'bg-red-50 hover:bg-red-100 border-2 border-red-300 hover:border-red-500 hover:scale-105 transform transition shadow-lg hover:shadow-xl';
        textClass = 'text-gray-800';
      } else {
        // Available items in normal game - type-based theme
        const themeColor = itemData.type === 'fruit' ? 'blue' : 'green';
        buttonClass = `bg-white hover:bg-${themeColor}-50 border-2 border-${themeColor}-300 hover:border-${themeColor}-500 hover:scale-105 transform transition shadow-lg hover:shadow-xl`;
        textClass = 'text-gray-800';
      }
      
      return `
        <button 
          class="card-selection-btn ${buttonClass} rounded-xl p-4 flex-shrink-0 w-36 ${isAvailable ? 'cursor-pointer' : 'cursor-not-allowed'} relative"
          data-fruit="${itemName}"
          ${!isAvailable ? 'disabled' : ''}
          style="scroll-snap-align: center;"
        >
          <!-- Power Score Badge -->
          <div class="absolute top-2 right-2 ${isUsed ? 'bg-gray-400' : isLocked ? 'bg-gray-500' : (itemData.type === 'fruit' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-green-500 to-teal-500')} text-white text-xs font-bold px-2 py-1 rounded-full shadow">
            ${typeIcon} ${powerScore}
          </div>
          
          <div class="flex flex-col items-center h-full">
            <!-- Item emoji and name -->
            <div class="text-3xl mb-2 ${(isUsed || isLocked) ? 'grayscale' : ''}">${emoji}</div>
            <h3 class="text-xs font-bold ${textClass} text-center leading-tight mb-3">${itemName}</h3>
            
            <!-- Attribute preview -->
            <div class="w-full space-y-1">
              ${this.attributes.map(attr => {
                const value = itemData.stats_per_kg[attr];
                const displayValue = value % 1 === 0 ? value : value.toFixed(1);
                const shortLabel = this.attributeNames[attr].split(' ')[0];
                const colorClass = this.attributeColors[attr];
                
                return `
                  <div class="flex justify-between items-center text-xs bg-gray-50 rounded px-2 py-1">
                    <span class="font-medium text-gray-600">${shortLabel}</span>
                    <span class="font-bold ${textClass} ${colorClass.replace('bg-', 'text-')} px-1 rounded">${displayValue}</span>
                  </div>
                `;
              }).join('')}
            </div>
            
            ${isAvailable ? `
              <div class="mt-2 text-xs font-semibold text-${itemData.type === 'fruit' ? 'blue' : 'green'}-600">
                Tap to select ✨
              </div>
            ` : ''}
          </div>
        </button>
      `;
    }).join('');
  }
  
  selectPlayerCard(fruitName) {
    this.currentRound.player1Card = fruitName;
    
    // Add to used fruits (unless it's already there)
    if (!this.usedFruits.includes(fruitName)) {
      this.usedFruits.push(fruitName);
    }
    
    // Check if we need to unlock more items of the same type
    this.checkAndUnlockItems();
    
    // Computer gets a random fruit from all available fruits (can reuse)
    const computerChoices = this.allFruits.filter(f => f !== fruitName);
    this.currentRound.player2Card = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    this.cardSelectionMode = false;
    document.getElementById('fruitSelectionModal').style.display = 'none';
    
    // Show cards - player card revealed, computer card face down
    this.displayCards();
    this.updateDisplay();
    
    // If it's the computer's turn, show loading and make automatic choice after a delay
    if (this.currentPlayer === 2) {
      this.showComputerThinking();
      setTimeout(() => {
        this.hideComputerThinking();
        const computerChoice = this.getComputerChoice();
        this.selectAttribute(computerChoice);
      }, 2000); // 2 second delay for suspense
    }
  }
  
  checkAndUnlockItems() {
    // Get all items by type
    const allFruits = fruitData.filter(item => item.type === 'fruit');
    const allVegetables = fruitData.filter(item => item.type === 'vegetable');
    
    // Check available items of each type
    const availableFruits = allFruits.filter(item => !this.usedFruits.includes(item.name));
    const availableVegetables = allVegetables.filter(item => !this.usedFruits.includes(item.name));
    
    // If we have less than 3 available of any type, it means some were locked
    // This is fine - the locking system will automatically adjust to show the next 3 available
    // when the selection modal opens again. No need to do anything special here.
  }
  
  showComputerThinking() {
    // Show loading indicator for computer
    const player2Card = document.getElementById('player2Card');
    const originalContent = player2Card.innerHTML;
    
    player2Card.innerHTML = `
      <div class="text-center">
        <div class="text-4xl md:text-5xl mb-2">${this.currentComputer.icon}</div>
        <h3 class="text-base md:text-lg font-bold text-gray-800 mb-3">${this.currentComputer.name}</h3>
        <div class="flex justify-center items-center p-4">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
        </div>
        <div class="text-sm text-gray-600 mt-2">Analyzing fruit stats...</div>
      </div>
    `;
  }
  
  hideComputerThinking() {
    // This will be called when computer makes its choice, displayCards() will show the actual card
    this.displayCards();
  }
  
  dealCards() {
    // Reset the round
    this.currentRound.player1Card = null;
    this.currentRound.player2Card = null;
    this.currentRound.chosenAttribute = null;
    this.currentRound.result = null;
    
    // Show card selection for the player
    this.showCardSelection();
  }
  
  selectAttribute(attribute) {
    if (this.currentRound.chosenAttribute) return;
    
    this.currentRound.chosenAttribute = attribute;
    
    // Immediately reveal the computer's card when attribute is selected
    const player2CardElement = document.getElementById('player2Card');
    const fruit2Data = this.getFruitData(this.currentRound.player2Card);
    this.revealCardWithAnimation(player2CardElement, fruit2Data, this.currentRound.player2Card, 2, 'computer');
    
    // Add a brief delay before resolving to let the card reveal animation play
    setTimeout(() => {
      // For tiebreaker, handle both player and computer choices
      if (this.isTiebreaker && !this.tiebreakerChoices) {
        if (this.currentPlayer === 1) {
          // Player chose, now get computer's choice
          const computerChoice = this.getComputerChoice();
          this.tiebreakerChoices = {
            player1: attribute,
            player2: computerChoice
          };
          this.resolveTiebreaker();
        }
      } else {
        this.resolveRound();
      }
    }, 500); // Half second delay to let the card reveal
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
        message: `🎉 You Win! 🎉`
      };
    } else if (value2 > value1) {
      this.player2Score++;
      this.currentRound.result = {
        winner: 2,
        value1,
        value2,
        message: `🤖 ${this.currentComputer.name} Wins! 🤖`
      };
    } else {
      this.currentRound.result = {
        winner: 0,
        value1,
        value2,
        message: `🤝 It's a Tie! 🤝`
      };
    }
    
    // Show the round result immediately on cards
    this.showRoundResultOnCards();
    
    // Check for game winner or tiebreaker
    if (this.player1Score >= 4 && this.player2Score >= 4) {
      // Both reached 4 - enter tiebreaker after delay!
      this.isTiebreaker = true;
      this.updateDisplay();
      setTimeout(() => this.enterTiebreaker(), 2500);
    } else if (this.player1Score >= 4) {
      this.gameOver = true;
      this.winner = 1;
      this.updateDisplay();
      setTimeout(() => this.showGameOverModal(), 2500);
    } else if (this.player2Score >= 4) {
      this.gameOver = true;
      this.winner = 2;
      this.updateDisplay();
      setTimeout(() => this.showGameOverModal(), 2500);
    } else {
      // Continue to next round automatically
      this.updateDisplay();
      setTimeout(() => {
        this.startNextRoundWithLoading();
      }, 2500);
    }
  }
  
  showRoundResultOnCards() {
    const result = this.currentRound.result;
    
    // Update both cards to show the result
    this.displayCardsWithResult();
    
    // Show floating message
    this.showFloatingMessage(result.message);
  }
  
  showFloatingMessage(message) {
    // Create and show a floating message
    const gameArea = document.getElementById('gameArea');
    const floatingDiv = document.createElement('div');
    floatingDiv.className = 'fixed inset-0 flex items-center justify-center z-50 pointer-events-none';
    floatingDiv.innerHTML = `
      <div class="bg-white border-4 border-blue-400 rounded-xl p-6 w-full shadow-2xl animate-bounce pointer-events-auto">
        <div class="text-xl font-bold text-gray-800 text-center">${message}</div>
      </div>
    `;
    
    document.body.appendChild(floatingDiv);
    
    // Remove after 2 seconds
    setTimeout(() => {
      if (floatingDiv.parentNode) {
        floatingDiv.parentNode.removeChild(floatingDiv);
      }
    }, 2000);
  }
  
  displayCardsWithResult() {
    const result = this.currentRound.result;
    
    // Update player 1 card with result highlighting and animation
    const player1CardElement = document.getElementById('player1Card');
    const fruit1Data = this.getFruitData(this.currentRound.player1Card);
    this.showCardWithResultAnimation(player1CardElement, fruit1Data, this.currentRound.player1Card, 1, result);
    
    // Update player 2 card with result highlighting and animation
    const player2CardElement = document.getElementById('player2Card');
    const fruit2Data = this.getFruitData(this.currentRound.player2Card);
    this.showCardWithResultAnimation(player2CardElement, fruit2Data, this.currentRound.player2Card, 2, result);
  }
  
  createCardHTML(fruitData, fruitName, playerNumber) {
    const emoji = fruitEmojis[fruitName] || '🍎';
    const isPlayerTurn = this.currentPlayer === playerNumber;
    const isHumanPlayer = playerNumber === 1;
    const canClick = isPlayerTurn && isHumanPlayer && !this.currentRound.result && !this.cardSelectionMode;
    const powerScore = fruitData.powerScore || 0;
    const fruitType = fruitData.type || 'fruit';
    const typeIcon = fruitType === 'fruit' ? '🍎' : '🥬';
    
    // Get player/computer display info
    const playerIcon = isHumanPlayer ? this.userIcon : this.currentComputer.icon;
    const playerName = isHumanPlayer ? (this.userName || 'You') : this.currentComputer.name;
    
    // Add instruction message for player when it's their turn
    const instructionMessage = canClick ? 
      `<div class="bg-blue-100 border border-blue-300 rounded-lg p-2 mb-2 animate-pulse">
         <div class="text-xs font-semibold text-blue-800 text-center">
           👆 Tap any stat to attack!
         </div>
       </div>` : '';
    
    return `
      <div class="text-center relative">
        <!-- Power Score Badge -->
        <div class="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-lg">
          ${typeIcon} ${powerScore}
        </div>
        
        <!-- Player/Computer Info -->
        <div class="flex items-center justify-center mb-2 bg-gray-100 rounded-lg py-1 px-2">
          <div class="text-lg mr-2">${playerIcon}</div>
          <div class="text-sm font-bold text-gray-700 truncate max-w-24">${playerName}</div>
        </div>
        
        <!-- Fruit/Veggie Name and Icon Side by Side -->
        <div class="flex items-center justify-center mb-3">
          <div class="text-4xl mr-2">${emoji}</div>
          <h3 class="text-lg font-bold text-gray-800 truncate max-w-32">${fruitName}</h3>
        </div>
        
        ${instructionMessage}
        <div class="grid grid-cols-2 gap-2 text-sm">
          ${this.attributes.map(attr => {
            const value = fruitData.stats_per_kg[attr];
            const displayValue = value % 1 === 0 ? value : value.toFixed(1);
            const buttonClass = canClick 
              ? `attribute-stat-btn cursor-pointer hover:bg-blue-200 hover:scale-110 transform transition-all duration-200 ${this.attributeColors[attr].replace('bg-', 'hover:bg-')} hover:text-white shadow hover:shadow-lg animate-pulse` 
              : 'bg-gray-50';
            
            return `
              <div class="${buttonClass} rounded-lg p-2 ${canClick ? 'border-2 border-blue-300 hover:border-blue-500' : ''}" 
                   ${canClick ? `data-attribute="${attr}" role="button"` : ''}>
                <div class="font-semibold text-xs text-gray-600">${this.attributeNames[attr]}</div>
                <div class="font-bold text-gray-800 text-sm">${displayValue}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  createHiddenCardHTML(playerType = 'computer') {
    // Get the correct player info based on type
    const isPlayer = playerType === 'player';
    const playerIcon = isPlayer ? (this.userIcon || '👤') : this.currentComputer.icon;
    const playerName = isPlayer ? (this.userName || 'You') : this.currentComputer.name;
    
    return `
      <div class="text-center relative">
        <!-- Hidden Power Score -->
        <div class="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-lg">
          🎴 ???
        </div>
        
        <!-- Player/Computer Info -->
        <div class="flex items-center justify-center mb-2 bg-gray-100 rounded-lg py-1 px-2">
          <div class="text-lg mr-2">${playerIcon}</div>
          <div class="text-sm font-bold text-gray-700 truncate max-w-24">${playerName}</div>
        </div>
        
        <!-- Hidden Card Display -->
        <div class="flex items-center justify-center mb-3">
          <div class="text-4xl mr-2">🎴</div>
          <h3 class="text-lg font-bold text-gray-500 truncate max-w-32">Hidden Card</h3>
        </div>
        
        <!-- Placeholder for instruction message (to match height) -->
        <div class="h-0 mb-0"></div>
        
        <!-- Hidden Stats Grid -->
        <div class="grid grid-cols-2 gap-2 text-sm">
          ${this.attributes.map(attr => {
            return `
              <div class="bg-gray-100 rounded-lg p-2">
                <div class="font-semibold text-xs text-gray-500">${this.attributeNames[attr]}</div>
                <div class="font-bold text-gray-400 text-sm">???</div>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Hidden card message -->
        <div class="text-xs text-gray-500 mt-2 font-semibold">
          ${isPlayer ? '🎯 Waiting for your card selection...' : '🔍 Select an attribute to reveal!'}
        </div>
      </div>
    `;
  }
  
  createCardHTMLWithResult(fruitData, fruitName, playerNumber, result) {
    const emoji = fruitEmojis[fruitName] || '🍎';
    const isWinner = result.winner === playerNumber;
    const isTie = result.winner === 0;
    const powerScore = fruitData.powerScore || 0;
    const fruitType = fruitData.type || 'fruit';
    const typeIcon = fruitType === 'fruit' ? '🍎' : '🥬';
    const isHumanPlayer = playerNumber === 1;
    
    // Get player/computer display info
    const playerIcon = isHumanPlayer ? this.userIcon : this.currentComputer.icon;
    const playerName = isHumanPlayer ? (this.userName || 'You') : this.currentComputer.name;
    
    // Add crown or other indicators for winners
    let statusIcon = '';
    let cardClass = 'bg-white';
    let borderClass = '';
    
    if (isWinner) {
      statusIcon = '👑';
      cardClass = 'bg-yellow-50 border-2 border-yellow-400 celebrate';
      borderClass = 'animate-pulse';
    } else if (isTie) {
      statusIcon = '🤝';
      cardClass = 'bg-gray-50';
    } else {
      statusIcon = '';
      cardClass = 'bg-white opacity-75';
    }
    
    return `
      <div class="text-center relative">
        <!-- Power Score Badge with Winner Highlight -->
        <div class="absolute top-0 right-0 ${isWinner ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg shadow-lg ${isWinner ? 'animate-pulse' : ''}">
          ${typeIcon} ${powerScore}
        </div>
        
        <!-- Player/Computer Info -->
        <div class="flex items-center justify-center mb-2 ${isWinner ? 'bg-yellow-100' : 'bg-gray-100'} rounded-lg py-1 px-2">
          <div class="text-lg mr-2">${playerIcon}</div>
          <div class="text-sm font-bold ${isWinner ? 'text-yellow-800' : 'text-gray-700'} truncate max-w-24">${playerName}</div>
          ${statusIcon ? `<div class="text-sm ml-1">${statusIcon}</div>` : ''}
        </div>
        
        <!-- Fruit/Veggie Name and Icon Side by Side with Status -->
        <div class="flex items-center justify-center mb-3">
          <div class="text-4xl mr-2">${emoji}</div>
          <h3 class="text-lg font-bold text-gray-800 truncate max-w-32">${fruitName}</h3>
        </div>
        
        <div class="grid grid-cols-2 gap-2 text-sm">
          ${this.attributes.map(attr => {
            const value = fruitData.stats_per_kg[attr];
            const displayValue = value % 1 === 0 ? value : value.toFixed(1);
            const isChosenAttribute = attr === this.currentRound.chosenAttribute;
            
            let attributeClass = 'bg-gray-50';
            if (isChosenAttribute) {
              if (isWinner) {
                attributeClass = 'bg-green-200 border-2 border-green-400 font-bold';
              } else if (isTie) {
                attributeClass = 'bg-yellow-200 border-2 border-yellow-400';
              } else {
                attributeClass = 'bg-red-200 border-2 border-red-400';
              }
            }
            
            return `
              <div class="${attributeClass} rounded-lg p-2">
                <div class="font-semibold text-xs text-gray-600">${this.attributeNames[attr]}</div>
                <div class="font-bold text-gray-800 text-sm">${displayValue}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  startNextRoundWithLoading() {
    // Switch turns for next round
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    
    // Show loading bar
    this.showLoadingBar();
    
    // Start next round after loading
    setTimeout(() => {
      this.dealCards();
    }, 1500);
  }
  
  showLoadingBar() {
    const gameArea = document.getElementById('gameArea');
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loadingBar';
    loadingDiv.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-2xl z-50';
    loadingDiv.innerHTML = `
      <div class="text-center mb-3">
        <div class="text-lg font-bold text-gray-800">Next Round Starting...</div>
      </div>
      <div class="w-64 bg-gray-200 rounded-full h-2">
        <div class="bg-blue-500 h-2 rounded-full animate-pulse" style="width: 0%; animation: loadingProgress 1.5s ease-out forwards;"></div>
      </div>
    `;
    
    // Add CSS for loading animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes loadingProgress {
        0% { width: 0%; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loadingDiv);
    
    // Remove loading bar after animation
    setTimeout(() => {
      if (loadingDiv.parentNode) {
        loadingDiv.parentNode.removeChild(loadingDiv);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }, 1500);
  }
  
  enterTiebreaker() {
    // For tiebreaker, player chooses their fruit again
    this.isTiebreaker = true;
    this.showCardSelection();
  }
  
  displayCards() {
    // Update player 1 card - only show if it's their turn or in result mode
    const player1CardElement = document.getElementById('player1Card');
    const fruit1Data = this.getFruitData(this.currentRound.player1Card);
    
    if ((this.currentPlayer === 1 && this.currentRound.player1Card) || this.currentRound.result) {
      // Use animation for revealing cards
      this.revealCardWithAnimation(player1CardElement, fruit1Data, this.currentRound.player1Card, 1, 'player');
    } else {
      // Use animation for hidden cards - pass 'player' type for player 1
      this.showHiddenCardWithAnimation(player1CardElement, 'player');
    }
    
    // Update player 2 card - ONLY show in result mode, keep hidden until attribute is selected
    const player2CardElement = document.getElementById('player2Card');
    const fruit2Data = this.getFruitData(this.currentRound.player2Card);
    
    if (this.currentRound.result) {
      // Only reveal computer card after the round result is available
      this.revealCardWithAnimation(player2CardElement, fruit2Data, this.currentRound.player2Card, 2, 'computer');
    } else {
      // Keep computer card hidden until attribute is selected - pass 'computer' type for player 2
      this.showHiddenCardWithAnimation(player2CardElement, 'computer');
    }
    
    // Hide modals
    document.getElementById('fruitSelectionModal').style.display = 'none';
  }
  
  updateDisplay() {
    // Update scores
    document.getElementById('player1Score').textContent = this.player1Score;
    document.getElementById('player2Score').textContent = this.player2Score;
    
    // Update stars (visual score representation) with animation
    this.updateStars('player1Stars', this.player1Score);
    this.updateStars('player2Stars', this.player2Score);
    
    // Update team display if team is selected
    if (this.teamSelected) {
      this.updateTeamDisplay();
    }
  }
  
  updateStars(containerId, score) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {
      const star = document.createElement('div');
      star.className = 'w-6 h-6 text-lg transition-all duration-300';
      if (i < score) {
        star.textContent = '⭐';
        star.className += ' animate-bounce star-bounce';
      } else {
        star.textContent = '☆';
        star.className += ' opacity-50';
      }
      container.appendChild(star);
    }
  }
  
  showGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    const winnerMessage = document.getElementById('winnerMessage');
    
    let winnerIcon, loserIcon, winnerText, subtitle;
    
    if (this.winner === 0) {
      winnerIcon = '🤝';
      loserIcon = '';
      winnerText = 'Amazing Tie! 🤝';
      subtitle = 'You both played super well!';
    } else if (this.winner === 1) {
      winnerIcon = '🎉👑';
      loserIcon = '😔🤖';
      winnerText = `You Win! 🏆`;
      subtitle = `Awesome job ${this.userName || 'You'}! You beat ${this.currentComputer.name}!`;
    } else {
      winnerIcon = '👑🤖';
      loserIcon = '😔👤';
      winnerText = `${this.currentComputer.name} Wins! 🏆`;
      subtitle = `Good try ${this.userName || 'You'}! ${this.currentComputer.name} was super smart!`;
    }
    
    // Update the modal content
    const modalContent = modal.querySelector('.bg-white');
    modalContent.innerHTML = `
      <div class="text-6xl md:text-7xl mb-4 animate-bounce">${winnerIcon}</div>
      <h2 class="text-2xl md:text-3xl w-100 font-bold mb-2 text-purple-800 fun-font">${winnerText}</h2>
      <p class="text-purple-600 mb-2 text-base md:text-lg bubble-font">${subtitle}</p>
      ${loserIcon ? `<div class="text-3xl mb-4">${loserIcon}</div>` : ''}
      <div class="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-4 mb-4 border-4 border-yellow-300">
        <div class="text-base font-bold text-gray-700 mb-2 fun-font">Final Score 📊</div>
        <div class="flex justify-center space-x-6">
          <div class="text-center">
            <div class="text-lg font-bold text-blue-600 fun-font">${this.userName || 'You'}: ${this.player1Score}</div>
          </div>
          <div class="text-center">
            <div class="text-lg font-bold text-red-600 fun-font">${this.currentComputer.name}: ${this.player2Score}</div>
          </div>
        </div>
      </div>
      <button id="playAgainBtn" class="btn-bounce bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform transition hover:scale-110 fun-font">
        🔄 Play Again!
      </button>
    `;
    
    modal.style.display = 'flex';
    
    // Re-add event listener for the new button
    document.getElementById('playAgainBtn').addEventListener('click', () => {
      this.hideGameOverModal();
      this.resetGame();
    });
  }
  
  hideGameOverModal() {
    document.getElementById('gameOverModal').style.display = 'none';
  }
  
  initializeEventListeners() {
    // Restart game button at top - resets team selection but keeps profile if it exists
    document.getElementById('restartGameBtn').addEventListener('click', () => {
      // Close any open modals first
      document.getElementById('fruitSelectionModal').style.display = 'none';
      document.getElementById('gameOverModal').style.display = 'none';
      
      // Only reset team selection, keep profile if it exists
      this.teamSelected = false;
      this.playerTeam = null;
      
      // Reset game state but keep profile
      this.resetGame();
    });
    
    // Profile button - opens profile editor
    document.getElementById('profileBtn').addEventListener('click', () => {
      this.showProfileEditor();
    });
    
    // Play again button - keeps the same team and icon
    document.getElementById('playAgainBtn').addEventListener('click', () => {
      this.hideGameOverModal();
      this.resetGame(); // This will keep the same team and icon since they're still selected
    });

    // Delegate event handling for dynamically created attribute buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.attribute-stat-btn')) {
        const attributeBtn = e.target.closest('.attribute-stat-btn');
        const attribute = attributeBtn.dataset.attribute;
        if (attribute && this.currentPlayer === 1 && !this.currentRound.result) {
          this.selectAttribute(attribute);
        }
      }
    });
  }
  
  showProfileEditor() {
    const teamSelectionContent = document.getElementById('fruitSelectionContent');
    
    teamSelectionContent.innerHTML = `
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">⚙️ Edit Profile ⚙️</h2>
        <p class="text-gray-600 mb-4">Update your battle name and avatar</p>
      </div>
      
      <!-- Username Input -->
      <div class="mb-6">
        <label class="block text-sm font-bold text-gray-700 mb-2">Your Battle Name:</label>
        <input type="text" id="usernameEditInput" 
               class="w-full px-4 py-3 border-2 border-blue-300 rounded-lg text-center text-lg font-bold focus:border-blue-500 focus:outline-none"
               placeholder="Enter your awesome name..."
               value="${this.userName}"
               maxlength="20">
      </div>
      
      <!-- Icon Selection -->
      <div class="mb-6">
        <label class="block text-sm font-bold text-gray-700 mb-3">Choose Your Avatar:</label>
        <div class="overflow-x-auto scrollbar-hide">
          <div class="grid grid-rows-2 grid-flow-col auto-cols-max gap-3 justify-start pb-2" style="grid-template-rows: repeat(2, minmax(0, 1fr));">
            ${this.userIconOptions.map(icon => `
              <button class="user-icon-edit-btn ${this.userIcon === icon ? 'bg-blue-100 border-blue-500' : 'bg-white border-blue-300'} hover:bg-blue-50 border-2 hover:border-blue-500 rounded-lg p-3 text-center hover:scale-110 transform transition shadow hover:shadow-lg min-w-[60px]" data-icon="${icon}">
                <div class="text-2xl">${icon}</div>
              </button>
            `).join('')}
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2 text-center">← Scroll horizontally to see more avatars →</p>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-3 justify-center">
        <button id="saveProfileEditBtn" class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105">
          💾 Save Changes
        </button>
        <button id="cancelProfileEditBtn" class="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105">
          ❌ Cancel
        </button>
      </div>
      
      <!-- Reset Profile Button -->
      <div class="mt-4 text-center">
        <button id="resetProfileBtn" class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded-full text-sm shadow-lg transform transition hover:scale-105">
          🔄 Complete Reset (Clear All Data)
        </button>
      </div>
    `;
    
    // Store original values in case user cancels
    const originalName = this.userName;
    const originalIcon = this.userIcon;
    
    // Add event listeners
    const usernameInput = document.getElementById('usernameEditInput');
    const saveBtn = document.getElementById('saveProfileEditBtn');
    const cancelBtn = document.getElementById('cancelProfileEditBtn');
    const resetBtn = document.getElementById('resetProfileBtn');
    
    // Username input handler
    usernameInput.addEventListener('input', (e) => {
      this.userName = e.target.value.trim();
    });
    
    // Icon selection handlers
    document.querySelectorAll('.user-icon-edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove selection from all buttons
        document.querySelectorAll('.user-icon-edit-btn').forEach(b => {
          b.className = 'user-icon-edit-btn bg-white border-blue-300 hover:bg-blue-50 border-2 hover:border-blue-500 rounded-lg p-3 text-center hover:scale-110 transform transition shadow hover:shadow-lg';
        });
        
        // Add selection to clicked button
        btn.className = 'user-icon-edit-btn bg-blue-100 border-blue-500 border-2 rounded-lg p-3 text-center transform scale-110 shadow-lg';
        
        this.userIcon = btn.dataset.icon;
      });
    });
    
    // Save button handler
    saveBtn.addEventListener('click', () => {
      if (this.userName && this.userIcon) {
        this.saveUserProfile();
        document.getElementById('fruitSelectionModal').style.display = 'none';
        
        // Determine where to go after profile edit
        this.handlePostProfileEdit();
      }
    });
    
    // Cancel button handler
    cancelBtn.addEventListener('click', () => {
      this.userName = originalName;
      this.userIcon = originalIcon;
      document.getElementById('fruitSelectionModal').style.display = 'none';
      
      // Determine where to go after canceling profile edit
      this.handlePostProfileEdit();
    });
    
    // Reset profile button handler
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure? This will clear all your saved data and start fresh.')) {
        localStorage.removeItem('fruitVeggieGameProfile');
        this.userName = '';
        this.userIcon = '👤';
        this.profileSetup = false;
        this.teamSelected = false;
        this.playerTeam = null;
        document.getElementById('fruitSelectionModal').style.display = 'none';
        this.resetGame();
      }
    });
    
    document.getElementById('fruitSelectionModal').style.display = 'flex';
  }
  
  handlePostProfileEdit() {
    // Determine what screen to show after profile editing
    if (!this.teamSelected) {
      // User hasn't selected a team yet, show team selection
      this.showTeamSelection();
    } else if (this.gameOver) {
      // Game is over, don't show anything - let them use the restart or play again buttons
      return;
    } else if (this.cardSelectionMode) {
      // User was in the middle of selecting a card
      this.showCardSelection();
    } else if (this.currentRound.player1Card && this.currentRound.player2Card) {
      // Cards are already selected, show the game
      this.displayCards();
    } else {
      // Default: show card selection to continue the game
      this.dealCards();
    }
    
    // Update the team display now that we're back in game context
    this.updateTeamDisplay();
  }

  // Animation methods for card reveals
  revealCardWithAnimation(cardElement, fruitData, fruitName, playerNumber, playerType) {
    // Simple version without animation - just set innerHTML
    cardElement.innerHTML = this.createCardHTML(fruitData, fruitName, playerNumber);
  }
  
  showHiddenCardWithAnimation(cardElement, playerType) {
    // Simple version without animation - just set innerHTML
    cardElement.innerHTML = this.createHiddenCardHTML(playerType);
  }

  showCardWithResultAnimation(cardElement, fruitData, fruitName, playerNumber, result) {
    // Simple version without animation - just set innerHTML
    // Clear existing animations
    cardElement.className = cardElement.className.replace(/card-\w+(-\w+)*/g, '');
    
    // Update card content with result
    cardElement.innerHTML = this.createCardHTMLWithResult(fruitData, fruitName, playerNumber, result);
    
    // Add appropriate result animation
    if (result.winner === playerNumber) {
      cardElement.classList.add('card-win', 'card-sparkle');
    } else if (result.winner === 0) {
      cardElement.classList.add('card-tie');
    } else {
      cardElement.classList.add('card-lose');
    }
    
    // Clean up animation classes after animation (slower timing)
    setTimeout(() => {
      cardElement.classList.remove('card-win', 'card-lose', 'card-tie');
      // Keep sparkle for winners longer
      if (result.winner !== playerNumber) {
        cardElement.classList.remove('card-sparkle');
      }
    }, 2000);
  }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
  window.game = new FruitCardGameUI();
}); 