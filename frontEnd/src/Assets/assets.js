import food_1 from "../Assets/food_1.jpeg";
import food_2 from "../Assets/food_2.jpeg";
import food_3 from "../Assets/food_3.jpeg";
import food_4 from "../Assets/food_4.jpeg";
import food_5 from "../Assets/food_5.jpeg";
import food_6 from "../Assets/food_6.jpeg";
import food_7 from "../Assets/food_7.jpeg";
import food_8 from "../Assets/food_8.jpeg";
import food_9 from "../Assets/food_9.jpeg";
import food_10 from "../Assets/food_10.jpeg";
import food_11 from "../Assets/food_11.jpeg";
import food_12 from "../Assets/food_12.jpeg";
import food_13 from "../Assets/food_13.jpeg";
import food_14 from "../Assets/food_14.png";
import food_15 from "../Assets/food_15.jpeg";
import food_16 from "../Assets/food_16.jpeg";

export const menu_list = [
    { menu_name: "Salad" },
    { menu_name: "Rolls" },
    { menu_name: "Deserts" },
    { menu_name: "Sandwich" },
    { menu_name: "Cake" },
    { menu_name: "Pure Veg" },
    { menu_name: "Pasta" },
    { menu_name: "Noodles" }
];

export const food_list =   [
    {
      _id: "1",
      name: "Greek Salad",
      time: "12 min",
      image: food_1,
      description: "Delicious fresh Mediterranean cheese and olives",
      category: "Salad",
      ingredients: ["Feta cheese", "Olives", "Tomatoes", "Cucumbers", "Red onions"],
      steps: [
        "Chop the tomatoes, cucumbers, and red onions into bite-sized pieces.",
        "Combine the chopped vegetables in a large bowl.",
        "Add the olives and crumbled feta cheese to the bowl.",
        "Drizzle with olive oil and toss gently to combine.",
        "Season with salt and pepper to taste and serve immediately."
      ],
      nutrition: {
        calories: 150,
        protein: 5,
        fat: 10,
        carbs: 10
      }
    },
    {
      _id: "2",
      name: "California Roll",
      time: "20 min",
      image: food_2,
      description: "Sushi roll filled with crab, avocado, and cucumber",
      category: "Rolls",
      ingredients: ["Sushi rice", "Nori", "Crab meat", "Avocado", "Cucumber"],
      steps: [
        "Cook the sushi rice according to the package instructions and let it cool.",
        "Place a sheet of nori on a bamboo mat and spread an even layer of rice on top.",
        "Place crab meat, avocado slices, and cucumber strips on the rice.",
        "Roll the nori tightly using the bamboo mat.",
        "Slice the roll into bite-sized pieces and serve with soy sauce."
      ],
      nutrition: {
        calories: 200,
        protein: 8,
        fat: 8,
        carbs: 24
      }
    },
    {
      _id: "3",
      name: "Spicy Tuna Roll",
      time: "18 min",
      image: food_3,
      description: "Sushi roll filled with spicy tuna and topped with spicy mayo",
      category: "Rolls",
      ingredients: ["Sushi rice", "Nori", "Tuna", "Spicy mayo", "Green onions"],
      steps: [
        "Cook the sushi rice according to the package instructions and let it cool.",
        "Mix diced tuna with spicy mayo in a bowl.",
        "Place a sheet of nori on a bamboo mat and spread an even layer of rice on top.",
        "Spread the spicy tuna mixture over the rice.",
        "Roll the nori tightly using the bamboo mat.",
        "Slice the roll into bite-sized pieces and garnish with chopped green onions."
      ],
      nutrition: {
        calories: 220,
        protein: 12,
        fat: 10,
        carbs: 22
      }
    },
    {
      _id: "4",
      name: "Chocolate Cake",
      time: "40 min",
      image: food_4,
      description: "Rich and decadent chocolate cake, perfect for dessert lovers",
      category: "Cake",
      ingredients: ["Flour", "Sugar", "Cocoa powder", "Baking powder", "Milk", "Eggs", "Butter"],
      steps: [
        "Preheat the oven to 350°F (175°C).",
        "Mix the flour, sugar, cocoa powder, and baking powder in a bowl.",
        "Add the milk, eggs, and melted butter and mix until smooth.",
        "Pour the batter into a greased cake pan and bake for 35-40 minutes.",
        "Let the cake cool before frosting with chocolate frosting."
      ],
      nutrition: {
        calories: 450,
        protein: 6,
        fat: 20,
        carbs: 65
      }
    },
    {
      _id: "5",
      name: "Carrot Cake",
      time: "35 min",
      image: food_5,
      description: "Moist and flavorful carrot cake with cream cheese frosting",
      category: "Cake",
      ingredients: ["Carrots", "Flour", "Sugar", "Baking powder", "Eggs", "Butter", "Cream cheese"],
      steps: [
        "Preheat the oven to 350°F (175°C).",
        "Grate the carrots and set aside.",
        "Mix the flour, sugar, and baking powder in a bowl.",
        "Add the grated carrots, eggs, and melted butter and mix until combined.",
        "Pour the batter into a greased cake pan and bake for 30-35 minutes.",
        "Let the cake cool before frosting with cream cheese frosting."
      ],
      nutrition: {
        calories: 400,
        protein: 5,
        fat: 18,
        carbs: 50
      }
    },
    {
      _id: "6",
      name: "Vegetable Sandwich",
      time: "10 min",
      image: food_6,
      description: "Healthy sandwich filled with fresh vegetables and hummus",
      category: "Sandwich",
      ingredients: ["Whole wheat bread", "Hummus", "Lettuce", "Tomatoes", "Cucumbers", "Bell peppers"],
      steps: [
        "Spread hummus on one side of each slice of bread.",
        "Layer the vegetables on one slice of bread.",
        "Top with the other slice of bread.",
        "Cut the sandwich in half and serve immediately."
      ],
      nutrition: {
        calories: 250,
        protein: 6,
        fat: 8,
        carbs: 38
      }
    },
    {
      _id: "7",
      name: "Grilled Cheese Sandwich",
      time: "8 min",
      image: food_7,
      description: "Classic comfort food with melted cheese between crispy bread slices",
      category: "Sandwich",
      ingredients: ["Bread", "Butter", "Cheese"],
      steps: [
        "Butter one side of each slice of bread.",
        "Place one slice of bread, butter side down, in a skillet over medium heat.",
        "Add a slice of cheese and top with the other slice of bread, butter side up.",
        "Cook until the bread is golden brown and the cheese is melted, flipping once.",
        "Serve immediately."
      ],
      nutrition: {
        calories: 300,
        protein: 10,
        fat: 20,
        carbs: 25
      }
    },
    {
      _id: "8",
      name: "Caprese Pasta",
      time: "25 min",
      image: food_8,
      description: "Pasta dish with cherry tomatoes, fresh mozzarella, and basil",
      category: "Pasta",
      ingredients: ["Pasta", "Cherry tomatoes", "Fresh mozzarella", "Basil", "Olive oil", "Garlic"],
      steps: [
        "Cook the pasta according to package instructions.",
        "In a large bowl, combine halved cherry tomatoes, fresh mozzarella balls, and chopped basil.",
        "Heat olive oil in a pan and sauté minced garlic until fragrant.",
        "Toss the cooked pasta with the tomato mixture and garlic oil.",
        "Serve immediately, garnished with more basil."
      ],
      nutrition: {
        calories: 350,
        protein: 12,
        fat: 15,
        carbs: 45
      }
    },
    {
      _id: "9",
      name: "Spaghetti Carbonara",
      time: "30 min",
      image: food_9,
      description: "Classic Italian pasta dish with creamy sauce, bacon, and Parmesan cheese",
      category: "Pasta",
      ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan cheese", "Black pepper"],
      steps: [
        "Cook the spaghetti according to the package instructions.",
        "In a separate pan, cook the bacon until crispy.",
        "Beat the eggs in a bowl and mix with grated Parmesan cheese.",
        "Drain the spaghetti and return to the pot. Quickly mix in the bacon and egg mixture.",
        "Season with black pepper and serve immediately."
      ],
      nutrition: {
        calories: 400,
        protein: 15,
        fat: 20,
        carbs: 45
      }
    },
    {
      _id: "10",
      name: "Vegetable Noodles",
      time: "22 min",
      image: food_10,
      description: "Stir-fried noodles with a colorful mix of vegetables",
      category: "Noodles",
      ingredients: ["Noodles", "Broccoli", "Bell peppers", "Carrots", "Soy sauce", "Garlic", "Ginger"],
      steps: [
        "Cook the noodles according to the package instructions.",
        "Heat oil in a large pan or wok.",
        "Add the garlic and ginger and cook until fragrant.",
        "Add the vegetables and stir-fry until tender-crisp.",
        "Pour in the soy sauce and toss to combine with the noodles.",
        "Serve immediately."
      ],
      nutrition: {
        calories: 300,
        protein: 8,
        fat: 10,
        carbs: 40
      }
    },
    {
      _id: "11",
      name: "Chicken Chow Mein",
      time: "25 min",
      image: food_11,
      description: "Chinese-style noodles with tender chicken and crunchy vegetables",
      category: "Noodles",
      ingredients: ["Noodles", "Chicken breast", "Carrots", "Bell peppers", "Soy sauce", "Garlic", "Ginger"],
      steps: [
        "Cook the noodles according to the package instructions.",
        "In a large skillet or wok, heat oil over medium-high heat.",
        "Add minced garlic and ginger, and cook until fragrant.",
        "Add sliced chicken breast and cook until browned and cooked through.",
        "Push the chicken to one side of the skillet and add sliced carrots and bell peppers.",
        "Cook the vegetables until tender-crisp.",
        "Mix everything together in the skillet and add soy sauce.",
        "Toss until well combined and heated through.",
        "Serve hot and enjoy."
        ],
        nutrition: {
        calories: 380,
        protein: 30,
        fat: 10,
        carbs: 45
        }
        },
        {
        _id: "12",
        name: "Tiramisu",
        time: "45 min",
        image: food_12,
        description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese",
        category: "Desserts",
        ingredients: ["Ladyfingers", "Espresso", "Mascarpone cheese", "Eggs", "Sugar", "Cocoa powder"],
        steps: [
        "Brew a strong cup of espresso and let it cool.",
        "In a bowl, whisk together egg yolks and sugar until light and creamy.",
        "Add mascarpone cheese to the egg mixture and beat until smooth.",
        "In a separate bowl, beat egg whites until stiff peaks form.",
        "Gently fold the egg whites into the mascarpone mixture.",
        "Dip ladyfingers into the cooled espresso and arrange them in a single layer in a serving dish.",
        "Spread half of the mascarpone mixture over the ladyfingers.",
        "Repeat the layers with remaining ladyfingers and mascarpone mixture.",
        "Cover and refrigerate for at least 4 hours, or overnight.",
        "Before serving, dust the top with cocoa powder."
        ],
        nutrition: {
        calories: 320,
        protein: 8,
        fat: 20,
        carbs: 25
        }
        },
        {
        _id: "13",
        name: "Fruit Salad",
        time: "10 min",
        image: food_13,
        description: "Refreshing salad with a mix of seasonal fruits",
        category: "Desserts",
        ingredients: ["Strawberries", "Blueberries", "Kiwi", "Bananas", "Oranges", "Honey", "Lime juice"],
        steps: [
        "Wash and prepare all the fruits, then chop them into bite-sized pieces.",
        "In a large bowl, combine all the fruits together.",
        "Drizzle honey and lime juice over the fruits and gently toss to coat.",
        "Chill in the refrigerator for at least 30 minutes before serving.",
        "Serve cold and enjoy."
        ],
        nutrition: {
        calories: 120,
        protein: 2,
        fat: 0,
        carbs: 30
        }
        },
        {
        _id: "14",
        name: "Veggie Pizza",
        time: "30 min",
        image: food_14,
        description: "Pizza topped with assorted fresh vegetables and gooey cheese",
        category: "Pure Veg",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Bell peppers", "Mushrooms", "Red onions", "Black olives"],
        steps: [
        "Preheat the oven to 425°F (220°C).",
        "Roll out the pizza dough on a floured surface to your desired thickness.",
        "Spread tomato sauce evenly over the dough, leaving a small border around the edges.",
        "Sprinkle shredded mozzarella cheese over the sauce.",
        "Top with sliced bell peppers, mushrooms, red onions, and black olives.",
        "Bake in the preheated oven for 15-20 minutes, or until the crust is golden and the cheese is bubbly.",
        "Slice and serve hot."
        ],
        nutrition: {
        calories: 280,
        protein: 12,
        fat: 10,
        carbs: 35
        }
        },
        {
        _id: "15",
        name: "Mushroom Risotto",
        time: "35 min",
        image: food_15,
        description: "Creamy Italian rice dish flavored with mushrooms and Parmesan cheese",
        category: "Pure Veg",
        ingredients: ["Arborio rice", "Mushrooms", "Onion", "Garlic", "Vegetable broth", "Parmesan cheese", "White wine"],
        steps: [
        "In a saucepan, heat vegetable broth over medium heat and keep it warm.",
        "In a separate pan, heat olive oil over medium heat.",
        "Add chopped onions and garlic, and cook until softened.",
        "Add Arborio rice to the pan and toast until lightly golden.",
        "Deglaze the pan with white wine, stirring constantly until absorbed.",
        "Add a ladleful of warm broth to the rice, stirring frequently until absorbed.",
        "Continue adding broth gradually and stirring until the rice is creamy and tender, about 25 minutes.",
        "Stir in sliced mushrooms and Parmesan cheese, and cook until mushrooms are tender.",
        "Season with salt and pepper to taste.",
        "Serve hot, garnished with extra Parmesan cheese and chopped parsley."
        ],
        nutrition: {
        calories: 350,
        protein: 10,
        fat: 8,
        carbs: 50
        }
        },
        {
            _id: "16",
            name: "Caesar Salad",
            time: "15 min",
            image: food_16,
            description: "Classic salad with romaine lettuce, croutons, and Parmesan cheese",
            category: "Salad",
            ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
            steps: [
              "Chop the romaine lettuce into bite-sized pieces.",
              "Toss the lettuce with Caesar dressing in a large bowl.",
              "Top with croutons and freshly grated Parmesan cheese.",
              "Serve immediately."
            ],
            nutrition: {
              calories: 250,
              protein: 6,
              fat: 20,
              carbs: 15
            }
          }
];

