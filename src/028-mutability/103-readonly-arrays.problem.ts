//PROBLEM
// HERE WE WANT TO MAKE ARRAY OF NAMES IMMUTABLE
// RIGHT NOW INSIDE THE FUNCTION YOU CAN CHANGE THE ARRAY ELEMENTS OR PUSH NEW TO IT.

// function printNames(names: string[]) {
//   for (const name of names) {
//     console.log(name);
//   }

//   // @ts-expect-error
//   names.push("John");

//   // @ts-expect-error
//   names[0] = "Billy";
// }

//SOLUTION
// by making it readonly array, we can basically remove all the mutable methods of array and still do all the read methods on array.
//there are two syntaxes one is names: readonly string[]
//other is ReadonlyArray<string>
function printNames(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }

  // @ts-expect-error
  names.push('John');

  // @ts-expect-error
  names[0] = 'Billy';
}
