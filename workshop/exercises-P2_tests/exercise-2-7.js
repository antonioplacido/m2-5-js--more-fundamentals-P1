// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (arr[1] > 0) {
    return arr[0].repeat(arr[1]);
  } else {
    return undefined;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["test", 2]), "testtest");
expect(repeat(["yo", 10]), "yoyoyoyoyoyoyoyoyoyo");
expect(repeat(["hey", 2]), "heyhey");
expect(repeat(["add", -4]), undefined);
expect(repeat(["mult", 3]), "multmultmult");
expect(repeat(["sub", -1]), undefined);
expect(repeat(["we", 1]), "we");

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
