type ButtonAttributes = {
  type: 'button' | 'submit' | 'reset';
};

const modifyButton = (attributes: ButtonAttributes) => {};

// here the problem is type can be mutated because the const buttonAttributes is immutable but properties inside can be changed.
// like: buttonAttributes.type = 'anything'
// that's why it is infer to as 'string' by ts.
//to fix this problem we need to assign type to this object.

// PROBLEM
// const buttonAttributes = {
//   type: "button",
// };

// SOLUTION
const buttonAttributes: ButtonAttributes = {
  type: 'button',
};

// Doing int inline is also a prefered approch as ts knows this is the literal values passed to this function and cannot be changed.

//modifyButton({type: 'button'});

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: 'button',
  },
  {
    type: 'submit',
  },
];

modifyButtons(buttonsToChange);
