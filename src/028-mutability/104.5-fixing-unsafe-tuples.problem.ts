//PROBLEM
// HERE THE PROBLEM IS THAT THE Coordinate TUPLE IS UNSAFE,
// BECAUSE IF WE PASS THIS TUPLE TO dangerousFunction
// WHICH IS MUTATING THE PASSED ARRAY, THERE IS NO SAFETY AND IT WILL REMOVE THE ELEMENTS FROM ARRAY.
// type Coordinate = readonly [number, number] ;

//SOLUTION
// readonly tuple will not allow mutate operations on array

type Coordinate = readonly [number, number];
const myHouse: Coordinate = [0, 0];

const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerousFunction(
  // @ts-expect-error
  myHouse
);
