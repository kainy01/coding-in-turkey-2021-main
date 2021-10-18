let fridge = ["banana", "apple", "orange"];

function whereIsMyFood(fridge, item) {
  var i;
  for (i = 0; i < fridge.length; i++) {
    if (fridge[i] === item) {
      return i;
    }
  }
  return -1;
}
console.log(whereIsMyFood(fridge, "banana"));
console.log(whereIsMyFood(fridge, "apple"));
console.log(whereIsMyFood(fridge, "orange"));
console.log(whereIsMyFood(fridge, "grabes"));
