// CODE

// PROBLEM

// let type = 'button';

//-----------------------

// both solutions are valid

let type: 'button' | 'submit' | 'reset' = 'button';
// const type = 'button';

// the reason it gives error is because type is expecting a narrow value but let type is of broad type of string and can be re assigned during runtime to any string. so to avoid that it needs to be narrowed to type, or assigned with const because const cannot be re-assigned during runtime.

// TESTS

type ButtonAttributes = {
  type: 'button' | 'submit' | 'reset';
};

const buttonAttributes: ButtonAttributes = {
  type,
};
