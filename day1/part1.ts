// 1.) First, we get the string input for the puzzle
import { puzzleInput } from "./puzzleinput"
const input = puzzleInput;

// 2.) This chain of code chunks up the input data and ultimately
// produces an ordered array of the total calories carried by
// each elf in the party
const elfCalories = input

  // 2a.) create an array with each elf's calories - a double
  // newline (a blank line) indicates a break between the
  // calorie values listed for each elf
  .split("\n\n")

  // 2b.) Aggregate the calories for each elf into an array
  // of single numbers using Array.map
  .map((elf) => aggregateElfCalories(elf))

  // 2c.) Sort the resulting array from highest to lowest calories
  .sort((a, b) => b - a);

// 3.) Display the value of the highest calorie elf in the text field
puzzleSolution1.setValue(elfCalories[0]);

// A helper function for aggregating the calorie values for a single elf
function aggregateElfCalories(elfString) {
  return elfString
    .split("\n")
    .reduce((total, current) => total + Number(current.trim()), 0);
}
