import { Equal, Expect } from '@total-typescript/helpers';

// return type never means, this function does not return anything and throws an error

//if we omit the return type of never the default return type when no return is provided is void but if we throw and error it will be 'never'

const throwError = (message: string): never => {
  throw new Error(message);
};

type Str = string | never;

const handleSearchParams = (params: { id?: string }) => {
  // here id is always set as string type, because never type assigned to id makes it string type.
  const id = params.id || throwError('No id provided');

  type test = Expect<Equal<typeof id, string>>;

  return id;
};
