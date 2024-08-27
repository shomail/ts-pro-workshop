import { Equal, Expect } from '@total-typescript/helpers';

const fetchData = async () => {
  const result = await fetch('/');

  if (!result.ok) {
    return [new Error('Could not fetch data.')] as const;
  }

  const data = await result.json();

  return [undefined, data] as const;
};

// If we annotate return type 'as const', and it is an array: TS will make it as a tuple. useful in react when you want to return some data from custom hook and you want it as a tuple.
const example = async () => {
  const [error, data] = await fetchData();

  type Tests = [Expect<Equal<typeof error, Error | undefined>>, Expect<Equal<typeof data, unknown>>];
};
