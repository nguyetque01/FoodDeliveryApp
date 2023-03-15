const CATEGORIES = [
  { name: 'Chicken', logo: 'FRIED_CHICKEN' },
  { name: 'Burgers', logo: 'BURGER' },
  { name: 'Pizza', logo: 'PIZZA' },
  { name: 'Desserts', logo: 'DESSERT' },
  { name: 'Drinks', logo: 'DRINKS' },
  { name: 'Noodles', logo: 'NOODLES' },
];

const RESTAURANT = [
  {
    "id": "100",
    "name": "McDonalds",
    "type": "Take-Away",
    "tags": [
      "burgers",
      "chicken",
      "coffee",
      "tea",
      "drinks",
      "pizza",
      "sesserts",
      "chocolate",
      "sundae",
      "paneer",
      "nuggets"
    ],
    "location": "13A Street, New york",
    "distance": 5000,
    "time": 30,
    "images": {
      "logo": "logo_mcdonalds",
      "poster": "poster_mcdonalds",
      "cover": "burgers"
    },
    "categories": ["Burgers & Wraps", "Snacks & sides", "Desserts", "Beverages"]
  },
  {
    "id": "101",
    "name": "Burger King",
    "type": "Dine-In",
    "tags": ["burgers", "chicken", "veg", "grilled", "fries"],
    "location": "15th Avenue, New york",
    "distance": 3900,
    "time": 25,
    "images": {
      "logo": "logo_burgerking",
      "poster": "poster_burgerking",
      "cover": "burgerking"
    },
    "categories": ["Burgers", "Whopper", "Chicken Wings", "Sides"]
  },
  {
    "id": "102",
    "name": "Dominos Pizza",
    "type": "Dine-In",
    "tags": [
      "pizza",
      "chicken",
      "barbeque",
      "sausage",
      "indian",
      "veg",
      "mexican",
      "paneer",
      "bread"
    ],
    "location": "15th Avenue, New york",
    "distance": 6300,
    "time": 35,
    "images": {
      "logo": "logo_dominos",
      "poster": "poster_dominos",
      "cover": "dominospizza"
    },
    "categories": [
      "Non-Veg Pizza",
      "Veg Pizza",
      "Pizza Mania",
      "Sides and Beverages"
    ]
  },
  {
    "id": "103",
    "name": "Pizza Hut",
    "type": "Dine-In",
    "tags": ["Pizza", "American Foods", "Chicken", "Meat"],
    "location": "15th Avenue, New york",
    "distance": 5560,
    "time": 31,
    "images": {
      "logo": "logo_pizzahut",
      "poster": "poster_pizzahut",
      "cover": "pizzahut"
    },
    "categories": ["Pizzas", "Sides", "Desserts", "Drinks"]
  },
  {
    "id": "104",
    "name": "Baskin Robins",
    "type": "Take-Away",
    "tags": ["Icecream", "American Foods", "Desserts"],
    "location": "15th Avenue, New york",
    "distance": 3400,
    "time": 21,
    "images": {
      "logo": "logo_baskinrobbins",
      "poster": "poster_baskinrobbins",
      "cover": "baskinrobbins"
    },
    "categories": [
      "Twin Combo Packs",
      "Scoops",
      "Icecream Cakes",
      "Sundaes",
      "Icecream Sandwich",
      "Super-Duper Thick Shakes"
    ]
  },
  {
    "id": "105",
    "name": "Starbucks",
    "type": "Cafe",
    "tags": ["Coffee", "American Foods", "Tea"],
    "location": "15th Avenue, New york",
    "distance": 6600,
    "time": 36,
    "images": {
      "logo": "logo_starbucks",
      "poster": "poster_starbucks",
      "cover": "starbucks"
    },
    "categories": [
      "Featured Drinks",
      "Freshly Brewed Coffee",
      "Crème Frappuccino®",
      "Cold Brew",
      "Espresso",
      "Coffee Frappuccino®",
      "Teavana® Tea"
    ]
  },
  {
    "id": "106",
    "name": "Subway",
    "type": "Take-Away",
    "tags": ["American Foods", "Burger", "Sandwitch"],
    "location": "15th Avenue, New york",
    "distance": 4800,
    "time": 26,
    "images": {
      "logo": "logo_subway",
      "poster": "poster_subway",
      "cover": "subway"
    },
    "categories": [
      "Signature Wraps",
      "All Sandwiches",
      "Breakfast",
      "Salads",
      "Snacks",
      "Sides & Drinks"
    ]
  },
  {
    "id": "107",
    "name": "KFC",
    "type": "Dine-In",
    "tags": ["American Foods", "Chicken"],
    "location": "15th Avenue, New york",
    "distance": 2600,
    "time": 16,
    "images": {
      "logo": "logo_kfc",
      "poster": "poster_kfc",
      "cover": "kfc"
    },
    "categories": ["Chicken", "Burgers", "Rice Bowls", "Snacks", "Beverages"]
  }
];

const FOOD = [
  {
    "id": "2000",
    "restaurantId": "100",
    "name": "McSpicy Chicken",
    "price": 220.0,
    "image": "mcspicychicken",
    "category": "Burgers & Wraps",
    "description": "Zesty and redolent whole muscle leg meat patty: Fried to perfect golden tan; quenched with creamy veg mayo and garden-fresh shredded iceberg lettuce. The sandwich is served in fresh, sesame-studded quarter pounder bun.",
    "ingredients": "Quarter pounder bun crown, Veg sauce, Shredded lettuce, McSpicy chicken patty, Quarter pounder bun heel."
  },
  {
    "id": "2001",
    "restaurantId": "100",
    "name": "McSpicy Paneer",
    "price": 210.0,
    "image": "mcspicypaneer",
    "category": "Burgers & Wraps",
    "description": "Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping.",
    "ingredients": "Quarter pounder bun crown, Shredded lettuce, Tandoori mayo, Spicy paneer patty, Quarter pounder bun heel."
  },
  {
    "id": "2002",
    "restaurantId": "100",
    "name": "McChicken",
    "price": 160.0,
    "image": "mcchicken",
    "category": "Burgers & Wraps",
    "description": "Batter & breaded chicken patty containing green peas, carrots, green beans, onion, potatoes, rice and spices, served in a bun with eggless mayonnaise and lettuce.",
    "ingredients": "Quarter bun crown, Veg mayonnaise, Shredded lettuce, McChicken patty, Quarter bun heel."
  },
  {
    "id": "2003",
    "restaurantId": "100",
    "name": "Chicken Maharaja Mac",
    "price": 250.0,
    "image": "chickenmaharajamac",
    "category": "Burgers & Wraps",
    "description": "A double-decker toasted Maharaja bun sandwiched with one layer of flame-grilled chicken patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese. Topped with another layer of flame-grilled chicken patty; tomato slices; and crunchy iceberg lettuce infused with harberno sauce.",
    "ingredients": "Maharaja bun crown, Haberno sauce, Shredded lettuce, Shredded onion, Jalapenos, Flame-grilled chicken patty, Sliced cheese, Maharaja bun heel."
  },
  {
    "id": "2004",
    "restaurantId": "100",
    "name": "Chicken McNuggets",
    "price": 180.0,
    "image": "chickenmcnuggets",
    "category": "Snacks & sides",
    "description": "Bite-sized pieces of breaded, boneless chicken formed in various shapes (Ball, Boot, Bell & Bone) fried and served hot with smoky Barbeque Sauce or Mustard Sauce.",
    "ingredients": "Chicken bites."
  },
  {
    "id": "2005",
    "restaurantId": "100",
    "name": "Pizza McPuff",
    "price": 150.0,
    "image": "pizzamcpuff",
    "category": "Snacks & sides",
    "description": "A blend of assorted vegetables (carrot, beans,capsicum, onion & green peas); mozzarella cheese mixed with tomato sauce; and exotic spices stuffed in rectangle shaped savoury dough. Quick frozen.",
    "ingredients": "Assorted vegetables, Refined wheat flour, Pizza seasoning"
  },
  {
    "id": "2006",
    "restaurantId": "100",
    "name": "Our World Famous Fries",
    "price": 120.0,
    "image": "ourworldfamousfries",
    "category": "Snacks & sides",
    "description": "The crisp, craveable, fan favourite: our World Famous Fries®. These epic fries are crispy and golden on the outside and fluffy on the inside.",
    "ingredients": "Potato and salt"
  },
  {
    "id": "2007",
    "restaurantId": "100",
    "name": "Sundae (Chocolate Brownie)",
    "price": 130.0,
    "image": "sundaechocolatebrownie",
    "category": "Desserts",
    "description": "An iconic premium dessert option. Can be bought as an add-on to make it a 'full meal' or simply as an indulgence.",
    "ingredients": "Soft serve mix (100% diary), Hazelnut brownie, Hot fudge topping."
  },
  {
    "id": "2008",
    "restaurantId": "100",
    "name": "McFlurry (Choco Crunch)",
    "price": 160.0,
    "image": "mcflurrychococrunch",
    "category": "Desserts",
    "description": "Milk-based frozen dessert with chocolate crispies and chocolate dip.",
    "ingredients": "Milk fat, Chocolate."
  }
]

export default { CATEGORIES, RESTAURANT, FOOD };