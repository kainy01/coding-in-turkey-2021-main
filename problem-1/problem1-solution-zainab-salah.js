let fridge1 = ["tomato", "banana", "apple", "onion", "cucumber"];
fridge2 = ["onion", "banana", "lettuce", "olives"];

let ingredients1 = ["tomato", "onion", "lettuce"];
ingredients2 = ["olives", "onion", "lettuce"];

let validateRecipe = (fridge, ingredients) =>
  ingredients.every((v) => fridge.includes(v));
console.log(validateRecipe(fridge1, ingredients1));
console.log(validateRecipe(fridge2, ingredients2));
