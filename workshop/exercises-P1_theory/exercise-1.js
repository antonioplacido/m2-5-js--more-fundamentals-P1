// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression.
// What will happen in each step as the function is called?
// Write out your answer comments.
// 1-1
square(decrement(square(decrement(3))));

//Working from innermost towards the outermost;//
//decrement(3) will return (x-1) = (3-1) = 2
//square(decrement(3)) = square(2) = 2 * 2 = 4
//decrement(square(decrement(3))) = decrement(square(2)) = decrement(4) = X - 1 = 3
//square(decrement(square(decrement(3)))) = square(decrement(square(2))) = square(decrement(4)) = square(3) = 3 * 3 = 9


// 1-2
decrement(decrement(square(square(3))));
// square(3) = 3* 3 = 9
// square(square(3)) = square(9) = 9 * 9 = 81
// decrement(square(square(3))) = decrement(square(9)) = decrement(81) = 81-1 = 80
// decrement(decrement(square(square(3)))) = decrement(decrement(square(9))) = decrement(decrement(81)) = decrement(80) = 80 -1 = 79


// 1-3
duplicateString(reverseString('hello'));

// reverseString(`hello`) = takes the parameter, in which this case is `hello` , arranges it into an array, and reverses the order or the array, giving `olleh`
// duplicateString(olleh) = duplicateString returns the parameter, this case its olleh, and it concatenates with the same parameter, giving olleholleh


// 1-4
reverseString(duplicateString(duplicateString('foo')));

//duplicateString(`foo`) = `foofoo`
//duplicateString(`foofoo`) = `foofoofoofoo`
//reverseString(`foofoofoofoo`) = `oofoofoofoof`
