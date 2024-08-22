type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};
// CTRL + SPACE FOR CONTEXT MENU AUTOCOMPLETE
acceptsObj({
  foo: 'hello',
  bar: 123,
  baz: true,
  // Autocomplete in here!
});

document.addEventListener(
  // Autocomplete this string!
  'click',
  (event) => {
    console.log(event);
  }
);
