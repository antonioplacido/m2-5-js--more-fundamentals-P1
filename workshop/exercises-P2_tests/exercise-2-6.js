// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  switch (arr[0]) {
    case "add":
      return arr[1] + arr[2];
      break;
    case "sub":
      return arr[1] - arr[2];
      break;
    case "mult":
      return arr[1] * arr[2];
      break;
    default:
      return undefined;
      break;
  }
}

const testArray = ["test"];
console.log(testArray.calculator);
// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 4, 4]), 8);
expect(calculator(["sub", 12, 4]), 8);
expect(calculator(["add", 6, 4]), 10);
expect(calculator(["mult", 5, 4]), 20);
expect(calculator(["add", 1, 4]), 5);
expect(calculator(["sub", 3, 4]), -1);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["kickit", 2, 4]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
