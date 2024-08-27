type ButtonAttributes = {
  type: 'button' | 'submit' | 'reset';
};

const modifyButton = (attributes: ButtonAttributes) => {};

//PROBLEM
//HERE WE HAVE THE SAME PROBLEM AS EARLIER, AND WE DO NOT WANT TO ASSIGN A TYPE TO THIS OBJECT OR PASS A LITERAL VALUE TO FUNCTION

// const buttonAttributes = {
//   type: "button",
// };

//SOLUTION
// IN THIS CASE THE SOLUTION IS TO USE AS CONST ASSERTION TO FREEZE THE TYPE OF OBJECT AS IT IS DEFINED. it will make the properties as readonly and whatever the value is assigned to them will be the literal type

const buttonAttributes = {
  type: 'button',
} as const;

modifyButton(buttonAttributes);
