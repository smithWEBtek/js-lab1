var testMeals = {}

var foods = new Object({entree: "salad", dessert: "cake"});

const firstMeal = 'breakfast';
const secondMeal = 'lunch';
const thirdMeal = 'dinner';

var midniteSnack = 'lastSnack'; 

var testMeals = { 
  [firstMeal]: "oatmeal",
  [secondMeal]: "bean soup",
  [thirdMeal]: "salad",
  [midniteSnack]: "cereal",
  ["thirsty"]: "water",
  ["breakfast2"]: 'tunafish',
  ["gameJunkFood"]: 'chips'
}

var meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti'
};
 
var mealNames = Object.keys(meals);

function menu() {
  for (var i = 0, l = mealNames.length; i < l; i++); {
  console.log(`I ate ${meals[mealNames[i]]} for ${mealNames[i]}!`);
}
}