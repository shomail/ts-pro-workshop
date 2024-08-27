type ButtonAttributes = {
  type: 'button' | 'submit' | 'reset';
};
// by making properties 'as const' it will default to literal string value. instead of doing it on the whole object level.
const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: 'button' as const,
};

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
  {
    type: 'button' as const,
  },
  {
    type: 'submit' as const,
  },
];

modifyButtons(buttonsToChange);
