type ButtonType = 'button' | 'submit' | 'reset';

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => {};

// PROBLEM
//object.freeze only do readonly at the top level, and if there are nested objects it will ignore it and assign them as type: string, here in this case.
// const buttonAttributes = Object.freeze({
//   cancel: {
//     type: "button",
//   },
//   confirm: {
//     type: "button",
//   },
// });

// SOLUTION
// 'as const' will do the deep assignment, and freeze not the type but actual values to the properties.
const buttonAttributes = {
  cancel: {
    type: 'button',
  },
  confirm: {
    type: 'button',
  },
} as const;

modifyButtons(buttonAttributes);
