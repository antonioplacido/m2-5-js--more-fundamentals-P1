// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  let phrase = str;
  let position = str.charAt(index);
  if (str.charAt(index) === "") {
    return undefined;
  } else {
    return position;
  }
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("nobody", 0), "n");
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 2), "o");
expect(getLetterAtIndex("hello", 6), undefined);
expect(getLetterAtIndex("goodbye", 1), "o");

console.log(getLetterAtIndex("hello", 4));
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
