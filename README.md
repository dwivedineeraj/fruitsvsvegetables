# 🍎 Fruit Card Battle 🍊

A fun, educational card game for children to learn about fruit nutrition while playing! Built with HTML, CSS (Tailwind), and JavaScript.

## 🎮 How to Play

1. **Goal**: Be the first player to win 4 rounds!
2. **Setup**: Each round, two fruit cards are dealt - one for each player
3. **Turn**: The current player chooses which nutritional attribute to compare (Energy, Water, Sugars, Fiber, Vitamin C, or Potassium)
4. **Winner**: Whoever has the higher value for that attribute wins the round
5. **Victory**: First player to reach 4 round wins is the champion!

## 🍓 Features

- **Mobile-Friendly**: Optimized for phones and tablets with large touch buttons
- **Educational**: Real nutritional data for 7 different fruits
- **Kid-Friendly**: Colorful design with fruit emojis and fun animations
- **Simple Rules**: Easy to understand for young children
- **Visual Feedback**: Star ratings, smooth animations, and clear results

## 🍎 Included Fruits

1. **Apple** 🍎 - Well-balanced nutrition
2. **Banana** 🍌 - High in potassium and energy
3. **Orange** 🍊 - Rich in Vitamin C
4. **Strawberry** 🍓 - High Vitamin C, low sugar
5. **Watermelon** 🍉 - Very high water content
6. **Avocado** 🥑 - High energy, fiber, and potassium
7. **Lemon** 🍋 - Extremely high Vitamin C, low sugar

## 📊 Nutritional Attributes

- **Energy ⚡**: Calories per kg
- **Water 💧**: Water content in grams per kg  
- **Sugars 🍯**: Sugar content in grams per kg
- **Fiber 🌾**: Dietary fiber in grams per kg
- **Vitamin C 🍊**: Vitamin C in milligrams per kg
- **Potassium 💪**: Potassium in milligrams per kg

## 🧒 Educational Value

Children learn about:
- Different types of fruits and their appearance
- Nutritional content and what makes fruits healthy
- Comparative thinking (which fruit has more Vitamin C?)
- Basic math concepts (comparing numbers)
- Decision making and strategy

## 🎯 Perfect For

- **Ages 6+**: Simple enough for early readers
- **Family Game Time**: Parents and kids can play together
- **Educational Settings**: Great for nutrition lessons
- **Mobile Devices**: Designed for touch interfaces

## 🚀 Getting Started

1. **Simple Setup**: Just open `index.html` in any modern web browser
2. **No Installation**: Everything runs in the browser - no server needed
3. **Mobile Ready**: Works great on phones, tablets, and desktop

## 🎨 Design Features

- Bright, cheerful color scheme
- Large, touch-friendly buttons
- Smooth animations and transitions
- Fruit emojis for visual appeal
- Star rating system for scores
- Clear visual feedback for winners

## 🔧 Technical Details

- **Frontend**: Vanilla JavaScript, HTML5, Tailwind CSS
- **Backend**: Node.js game engine (for testing and future server features)
- **Data**: Real USDA nutritional information
- **Responsive**: Mobile-first design with Tailwind CSS
- **No Dependencies**: Runs entirely in the browser

## 🏗️ Project Structure

```
gameoflife/
├── index.html              # Main game interface for the Fruit Card Battle
├── starting.jpg            # Loading screen background image
├── icon.jpg                # Main application icon (used in header)
├── test_power.html         # Developer utility for game balance analysis
├── frontend/
│   ├── styles.css          # Custom CSS styles for the game
│   ├── tailwind-backup.css # Fallback Tailwind CSS if CDN fails
│   ├── game-ui.js          # Core frontend game logic, UI rendering, and PWA interactions
│   ├── mobile-pwa.js       # JavaScript for PWA-specific features (e.g., install prompt)
│   ├── sw.js               # Service worker for PWA caching and offline capabilities
│   ├── manifest.json       # Web app manifest for PWA configuration
│   └── icons/              # Directory for PWA icons (various sizes)
├── backend/                # (Currently for local testing/future server-side features)
│   ├── db.js               # Fruit nutritional database (Node.js module)
│   ├── game.js             # Core game engine logic (Node.js module)
│   └── test-game.js        # Console-based script for testing backend game logic
└── README.md               # This file: project overview, setup, and documentation
```

Enjoy playing and learning about fruits! 🍎🍌🍊 