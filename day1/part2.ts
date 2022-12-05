import { puzzleInput } from "./puzzleinput.ts";
function aggregateElfCalories(elf) {
  // Split the string of calorie values by newlines to get
  // an array of individual calorie values
  const calorieValues = elf.split("\n");

  // Use Array.reduce to sum up all the calorie values
  const totalCalories = calorieValues.reduce((sum, calories) => {
    // Convert the string value to a number and add it to the sum
    return sum + Number(calories);
  }, 0);

  // Return the total number of calories for the given elf
  return totalCalories;
}

const input = puzzleInput;

const elfCalories = input
  // 2a.) create an array with each elf's calories - a double
  // newline (a blank line) indicates a break between the
  // calorie values listed for each elf
  .split("\n\n")

  // 2b.) Aggregate the calories for each elf into an array
  // of single numbers using Array.map
  .map((elf) => {
    // You need to implement this function to return the
    // total number of calories for the given elf
    return aggregateElfCalories(elf);
  })

  // 2c.) Sort the resulting array from highest to lowest calories
  .sort((a, b) => b - a);

// Get the three highest calorie values
const highestCalories = elfCalories.slice(0, 3);

// Find the elves with the highest calorie values
const highestCalorieElves = input
  .split("\n\n")
  .filter((elf) => highestCalories.includes(aggregateElfCalories(elf)));

// Calculate the total calories for the highest calorie elves
const totalCalories = highestCalorieElves.reduce((sum, elf) => {
  return sum + aggregateElfCalories(elf);
}, 0);

// Print the total calories for the highest calorie elves to the console
console.log(totalCalories);
