const fruitData = [
  {
    "name": "Apple",
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
    "name": "Banana",
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
    "name": "Pineapple",
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
    "name": "Pomegranate",
    "stats_per_kg": {
      "Energy_kcal": 830,
      "Water_g": 779.3,
      "Sugars_g": 136.7,
      "Fiber_g": 40,
      "VitaminC_mg": 102,
      "Potassium_mg": 2360
    }
  },
  {
    "name": "Cherry",
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
    "name": "Peach",
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
    "name": "Pear",
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
    "name": "Raspberry",
    "stats_per_kg": {
      "Energy_kcal": 520,
      "Water_g": 857.5,
      "Sugars_g": 44.2,
      "Fiber_g": 65,
      "VitaminC_mg": 262,
      "Potassium_mg": 1510
    }
  },
  {
    "name": "Blackberry",
    "stats_per_kg": {
      "Energy_kcal": 430,
      "Water_g": 881.5,
      "Sugars_g": 48.8,
      "Fiber_g": 53,
      "VitaminC_mg": 210,
      "Potassium_mg": 1620
    }
  },
  {
    "name": "Cantaloupe",
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
    "name": "Grapefruit",
    "stats_per_kg": {
      "Energy_kcal": 420,
      "Water_g": 880.6,
      "Sugars_g": 68.9,
      "Fiber_g": 16,
      "VitaminC_mg": 312,
      "Potassium_mg": 1350
    }
  }
];

// Optional: Make it available for Node.js environments
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = fruitData;
} 