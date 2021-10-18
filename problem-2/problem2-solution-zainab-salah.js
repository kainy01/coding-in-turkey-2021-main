let fridge1 = {
  tomato: 1,
  onion: 1,
};
let ingredients1 = {
  tomato: 1,
  onion: 2,
};
let fridge2 = {
  tomato: 2,
  onion: 3,
  olives: 1,
};
let ingredients2 = {
  tomato: 2,
  onion: 3,
  olives: 1,
};
function validateRecipeWithQuantity(fridge, ingredients) {
  if (JSON.stringify(fridge) === JSON.stringify(ingredients)) return true;
  else return false;
}
console.log(validateRecipeWithQuantity(fridge1, ingredients1));
console.log(validateRecipeWithQuantity(fridge2, ingredients2));
