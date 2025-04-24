
import { JSX } from "react";

// Define categories and subcategories for clothing
export type Category = "face" | "upper" | "lower" | "legs";

export type SubCategory =
  | "hair" | "eyes" | "nose" | "lips"
  | "shirt" | "coat"
  | "pant" | "jeans" | "skirt"
  | "shoes";

// Interface for the clothing item
export interface ClothingItem {
  category: Category;
  subCategory: SubCategory;
  name: string;
  variant?: string;
  svg: JSX.Element;
  gender?: "male" | "female";
}

// Type for character profile
export interface CharacterProfile {
  face: {
    shape: string[];
    eyes: string[];
    nose: string[];
    eyebrows: string[];
    lips: string[];
  };
  skinTone: string[];
  bodyParts: {
    hands: string;
    legs: string;
  };
  hairstyles: {
    men: string[];
    women: string[];
  };
  clothing: {
    shirts: {
      men: string[];
      women: string[];
    };
    pants: {
      men: string[];
      women: string[];
    };
    shoes: {
      men: string[];
      women: string[];
    };
  };
}

// Example of a character profile object
//const CharacterProfile: CharacterProfile = {
export const CharacterProfile = {
  face: {
    shape: ["oval", "round", "square", "diamond", "heart", "pear", "oblong"],
    eyes: ["almond", "round", "monolid", "protruding", "hooded", "upturned", "downturned"],
    nose: [
      "Greek nose", "Roman nose", "Hawk nose", "Button nose", "Nubian nose",
      "Wide nose", "Long nose", "Celestial nose"
    ],
    eyebrows: ["rounded", "straight", "arched", "S-shaped"],
    lips: [
      "Full Lips", "Wide Lips", "Narrow Lips", "Downturned Lips",
      "Heart-Shaped Lips", "Bow-Shaped Lips", "Round Lips", "Fuller Upper Lip"
    ]
  },

  skinTone: [
    "very light beige", // Type 1
    "light brown",      // Type 2
    "medium brown",     // Type 3
    "dark brown",       // Type 4
    "very dark brown"   // Type 5
  ],

  bodyParts: {
    hands: "Hands with fingers",
    legs: "Legs with feet"
  },

  hairstyles: {
    men: [
      "Crew Cut", "Caesar Cut", "Ivy League", "Fade", "Taper Fade", "Low Fade", "High Fade", "Mid Fade",
      "Skin Fade", "Undercut", "Quiff", "Pompadour", "Slick Back", "Comb Over", "French Crop",
      "Textured Crop", "Spiky Hair", "Flat Top", "Hard Part", "Side Part", "Faux Hawk", "Mohawk",
      "Man Bun", "Top Knot"
    ],
    women: [
      "Classic Waves", "Retro Waves", "Hollywood Waves", "Pixie Cut", "Bob Cut", "Lob", "Blunt Cut",
      "Layered Cut", "Shag Cut", "A-Line Bob", "Inverted Bob", "Asymmetrical Bob", "Choppy Bob",
      "Long Layers", "Short Layers", "Tapered Cut", "Shaggy Bob", "Textured Cut", "Feathered Cut",
      "Stacked Bob", "Graduated Bob", "Wavy Lob", "Curly Bob", "Razor Cut", "Classic Bob"
    ]
  },

  clothing: {
    shirts: {
      men: [
        "Dress Shirt", "Polo Shirt", "T-Shirt", "Oxford Shirt", "Henley Shirt",
        "Cuban Collar Shirt", "Flannel Shirt", "Denim Shirt", "Overshirt",
        "Mandarin Collar Shirt", "Linen Shirt", "Chambray Shirt"
      ],
      women: [
        "Blouse", "Top", "Tank Top", "Button-Down Shirt", "Polo Shirt",
        "Long Sleeve Top", "Short Sleeve Top", "Crew Neck T-shirt",
        "V-Neck T-shirt", "Henley T-shirt"
      ]
    },
    pants: {
      men: [
        "Jeans", "Chinos", "Dress Pants", "Joggers", "Track Pants",
        "Cargo Pants", "Khakis", "Flannel Pants", "Pleated Pants",
        "Wool Pants", "Drawstring Pants", "Cropped Pants", "Linen Pants"
      ],
      women: [
        "Jeans", "Chinos", "Culottes", "Leggings", "Joggers", "Dress Pants",
        "Cargo Pants", "Palazzo Pants", "Wide-Leg Trousers", "Pleated Pants",
        "Corduroy Pants", "Bell-bottom Jeans", "Bootcut Jeans", "Sirwal Pants",
        "High-Rise Pants", "Low-Rise Pants", "Overalls", "Jumpsuit",
        "Jeggings", "Sweatpants", "Cropped Pants", "Linen Pants"
      ]
    },
    shoes: {
      men: [
        "Loafers", "Sneakers", "Boots", "Oxfords", "Derby Shoes",
        "Brogues", "Sandals", "Boat Shoes"
      ],
      women: [
        "Heels", "Flats", "Boots", "Sneakers", "Sandals",
        "Clogs", "Mules", "Slides"
      ]
    }
  }
};

export const CharacterProfileSVG = {
  face: {
    shape: [
      "<circle cx='50' cy='50' r='30' stroke='black' stroke-width='3' fill='transparent'/>", // Oval
      "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='transparent'/>", // Round
      "<rect x='30' y='30' width='40' height='40' stroke='black' stroke-width='3' fill='transparent'/>", // Square
      "<polygon points='30,50 50,30 70,50 50,70' stroke='black' stroke-width='3' fill='transparent'/>", // Diamond
      "<path d='M30,50 Q50,20 70,50 Q50,80 30,50' stroke='black' stroke-width='3' fill='transparent'/>", // Heart
      "<ellipse cx='50' cy='50' rx='30' ry='40' stroke='black' stroke-width='3' fill='transparent'/>", // Pear
      "<ellipse cx='50' cy='50' rx='40' ry='30' stroke='black' stroke-width='3' fill='transparent'/>", // Oblong
    ],
    eyes: [
      "<ellipse cx='40' cy='45' rx='10' ry='5' stroke='black' stroke-width='3' fill='transparent'/>", // Almond
      "<circle cx='40' cy='45' r='10' stroke='black' stroke-width='3' fill='transparent'/>", // Round
      "<path d='M30,40 Q40,30 50,40' stroke='black' stroke-width='3' fill='transparent'/>", // Monolid
      "<ellipse cx='35' cy='45' rx='12' ry='7' stroke='black' stroke-width='3' fill='transparent'/>", // Protruding
      "<path d='M30,40 Q40,35 50,40' stroke='black' stroke-width='3' fill='transparent'/>", // Hooded
      "<ellipse cx='40' cy='45' rx='10' ry='6' stroke='black' stroke-width='3' fill='transparent'/>", // Upturned
      "<ellipse cx='40' cy='45' rx='10' ry='6' stroke='black' stroke-width='3' fill='transparent'/>", // Downturned
    ],
    nose: [
      "<path d='M40,50 L45,60 L50,50' stroke='black' stroke-width='3' fill='transparent'/>", // Greek nose
      "<path d='M40,55 Q45,45 50,55' stroke='black' stroke-width='3' fill='transparent'/>", // Roman nose
      "<path d='M40,50 Q45,60 50,50' stroke='black' stroke-width='3' fill='transparent'/>", // Hawk nose
      "<circle cx='45' cy='55' r='5' stroke='black' stroke-width='3' fill='transparent'/>", // Button nose
      "<path d='M40,50 Q45,40 50,50' stroke='black' stroke-width='3' fill='transparent'/>", // Nubian nose
      "<path d='M40,50 L45,60 L50,50' stroke='black' stroke-width='3' fill='transparent'/>", // Wide nose
      "<path d='M40,55 Q45,50 50,55' stroke='black' stroke-width='3' fill='transparent'/>", // Long nose
      "<path d='M40,50 Q45,40 50,50' stroke='black' stroke-width='3' fill='transparent'/>", // Celestial nose
    ],
    eyebrows: [
      "<path d='M30,40 Q40,30 50,40' stroke='black' stroke-width='3' fill='transparent'/>", // Rounded
      "<path d='M30,40 L50,40' stroke='black' stroke-width='3' fill='transparent'/>", // Straight
      "<path d='M30,35 Q40,30 50,35' stroke='black' stroke-width='3' fill='transparent'/>", // Arched
      "<path d='M30,40 S40,30 50,40' stroke='black' stroke-width='3' fill='transparent'/>", // S-shaped
    ],
    lips: [
      "<path d='M35,60 Q40,70 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Full Lips
      "<path d='M30,60 Q40,80 50,60' stroke='black' stroke-width='3' fill='transparent'/>", // Wide Lips
      "<path d='M35,60 Q40,55 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Narrow Lips
      "<path d='M35,60 Q40,65 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Downturned Lips
      "<path d='M35,60 Q40,55 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Heart-Shaped Lips
      "<path d='M35,60 Q40,50 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Bow-Shaped Lips
      "<circle cx='40' cy='60' r='5' stroke='black' stroke-width='3' fill='transparent'/>", // Round Lips
      "<path d='M35,60 Q40,50 45,60' stroke='black' stroke-width='3' fill='transparent'/>", // Fuller Upper Lip
    ]
  },

  skinTone: [
    "<rect width='50' height='50' fill='#F2E1B3'/>", // Very Light Beige
    "<rect width='50' height='50' fill='#B88A56'/>", // Light Brown
    "<rect width='50' height='50' fill='#6F4F28'/>", // Medium Brown
    "<rect width='50' height='50' fill='#3C2A21'/>", // Dark Brown
    "<rect width='50' height='50' fill='#2D1F16'/>", // Very Dark Brown
  ],

  bodyParts: {
    hands: "<path d='M10,50 L30,50 L30,70 L10,70 Z' fill='transparent' stroke='black' stroke-width='2'/>", // Hands with fingers
    legs: "<path d='M40,60 L60,60 L60,80 L40,80 Z' fill='transparent' stroke='black' stroke-width='2'/>", // Legs with feet
  },

  hairstyles: {
    men: [
      "<path d='M30,20 Q50,5 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Crew Cut
      "<path d='M30,20 Q50,10 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Caesar Cut
      "<path d='M30,20 Q50,10 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Ivy League
      "<path d='M30,20 Q50,15 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Fade
      "<path d='M30,20 Q50,15 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Taper Fade
    ],
    women: [
      "<path d='M30,20 Q50,5 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Classic Waves
      "<path d='M30,20 Q50,10 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Retro Waves
      "<path d='M30,20 Q50,10 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Hollywood Waves
      "<path d='M30,20 Q50,5 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Pixie Cut
      "<path d='M30,20 Q50,10 70,20' fill='transparent' stroke='black' stroke-width='3'/>", // Bob Cut
    ]
  },

  clothing: {
    shirts: {
      men: [
        "<rect width='60' height='30' fill='transparent' stroke='black' stroke-width='2'/>", // Dress Shirt
        "<rect width='60' height='30' fill='transparent' stroke='black' stroke-width='2'/>", // Polo Shirt
      ],
      women: [
        "<rect width='60' height='30' fill='transparent' stroke='black' stroke-width='2'/>", // Blouse
        "<rect width='60' height='30' fill='transparent' stroke='black' stroke-width='2'/>", // Top
      ]
    },
    pants: {
      men: [
        "<rect width='50' height='60' fill='transparent' stroke='black' stroke-width='2'/>", // Jeans
        "<rect width='50' height='60' fill='transparent' stroke='black' stroke-width='2'/>", // Chinos
      ],
      women: [
        "<rect width='50' height='60' fill='transparent' stroke='black' stroke-width='2'/>", // Jeans
        "<rect width='50' height='60' fill='transparent' stroke='black' stroke-width='2'/>", // Chinos
      ]
    },
    shoes: {
      men: [
        "<circle cx='25' cy='85' r='10' stroke='black' stroke-width='2' fill='transparent'/>", // Loafers
        "<circle cx='25' cy='85' r='10' stroke='black' stroke-width='2' fill='transparent'/>", // Sneakers
      ],
      women: [
        "<circle cx='25' cy='85' r='10' stroke='black' stroke-width='2' fill='transparent'/>", // Heels
        "<circle cx='25' cy='85' r='10' stroke='black' stroke-width='2' fill='transparent'/>", // Flats
      ]
    }
  }
};


/*
const CharacterProfile = {
  face: {
    shape: ["oval", "round", "square", "diamond", "heart", "pear", "oblong"],
    eyes: ["almond", "round", "monolid", "protruding", "hooded", "upturned", "downturned"],
    nose: [
      "Greek nose", "Roman nose", "Hawk nose", "Button nose", "Nubian nose",
      "Wide nose", "Long nose", "Celestial nose"
    ],
    eyebrows: ["rounded", "straight", "arched", "S-shaped"],
    lips: [
      "Full Lips", "Wide Lips", "Narrow Lips", "Downturned Lips",
      "Heart-Shaped Lips", "Bow-Shaped Lips", "Round Lips", "Fuller Upper Lip"
    ]
  },

  skinTone: [
    "very light beige", // Type 1
    "light brown",      // Type 2
    "medium brown",     // Type 3
    "dark brown",       // Type 4
    "very dark brown"   // Type 5
  ],

  bodyParts: {
    hands: "Hands with fingers",
    legs: "Legs with feet"
  },

  hairstyles: {
    men: [
      "Crew Cut", "Caesar Cut", "Ivy League", "Fade", "Taper Fade", "Low Fade", "High Fade", "Mid Fade",
      "Skin Fade", "Undercut", "Quiff", "Pompadour", "Slick Back", "Comb Over", "French Crop",
      "Textured Crop", "Spiky Hair", "Flat Top", "Hard Part", "Side Part", "Faux Hawk", "Mohawk",
      "Man Bun", "Top Knot"
    ],
    women: [
      "Classic Waves", "Retro Waves", "Hollywood Waves", "Pixie Cut", "Bob Cut", "Lob", "Blunt Cut",
      "Layered Cut", "Shag Cut", "A-Line Bob", "Inverted Bob", "Asymmetrical Bob", "Choppy Bob",
      "Long Layers", "Short Layers", "Tapered Cut", "Shaggy Bob", "Textured Cut", "Feathered Cut",
      "Stacked Bob", "Graduated Bob", "Wavy Lob", "Curly Bob", "Razor Cut", "Classic Bob"
    ]
  },

  clothing: {
    shirts: {
      men: [
        "Dress Shirt", "Polo Shirt", "T-Shirt", "Oxford Shirt", "Henley Shirt",
        "Cuban Collar Shirt", "Flannel Shirt", "Denim Shirt", "Overshirt",
        "Mandarin Collar Shirt", "Linen Shirt", "Chambray Shirt"
      ],
      women: [
        "Blouse", "Top", "Tank Top", "Button-Down Shirt", "Polo Shirt",
        "Long Sleeve Top", "Short Sleeve Top", "Crew Neck T-shirt",
        "V-Neck T-shirt", "Henley T-shirt"
      ]
    },
    pants: {
      men: [
        "Jeans", "Chinos", "Dress Pants", "Joggers", "Track Pants",
        "Cargo Pants", "Khakis", "Flannel Pants", "Pleated Pants",
        "Wool Pants", "Drawstring Pants", "Cropped Pants", "Linen Pants"
      ],
      women: [
        "Jeans", "Chinos", "Culottes", "Leggings", "Joggers", "Dress Pants",
        "Cargo Pants", "Palazzo Pants", "Wide-Leg Trousers", "Pleated Pants",
        "Corduroy Pants", "Bell-bottom Jeans", "Bootcut Jeans", "Sirwal Pants",
        "High-Rise Pants", "Low-Rise Pants", "Overalls", "Jumpsuit",
        "Jeggings", "Sweatpants", "Cropped Pants", "Linen Pants"
      ]
    },
    shoes: {
      men: [
        "Loafers", "Sneakers", "Boots", "Oxfords", "Derby Shoes",
        "Brogues", "Sandals", "Boat Shoes"
      ],
      women: [
        "Heels", "Flats", "Boots", "Sneakers", "Sandals",
        "Clogs", "Mules", "Slides"
      ]
    }
  }
};

import { JSX } from "react";

export type Category = "face" | "upper" | "lower" | "legs";

export type SubCategory =
  | "hair" | "eyes" | "nose" | "lips"
  | "shirt" | "coat"
  | "pant" | "jeans" | "skirt"
  | "shoes";

export interface ClothingItem {
  category: Category;
  subCategory: SubCategory;
  name: string;
  variant?: string;
  svg: JSX.Element;
  gender?: "male" | "female";
}
*/