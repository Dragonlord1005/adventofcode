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

// Get the highest calorie value
const highestCalories = elfCalories[0];

// Find the elf with the highest calorie value
const highestCalorieElf = input
  .split("\n\n")
  .find((elf) => aggregateElfCalories(elf) === highestCalories);

// Calculate the total calories for the highest calorie elf
const totalCalories = aggregateElfCalories(highestCalorieElf);

// Print the total calories for the highest calorie elf to the console
console.log(totalCalories);
