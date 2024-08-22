import { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  const searchParamsName = searchParams.name;
  if (searchParamsName) {
    //because of the if statement typescript knows that searchParams.name is not undefined
    // but in another scope it can still be undefined and because it is a mutable value we can change it to undefined, thats why typescript is seeing it as sting | undefined
    //so we can cast it to sting or assign it to cont outside of the if statement that way because it cannot be reassigned it will be seen as string
    return users.filter((user) => user.name.includes(searchParamsName));
  }

  return users;
};

it('Should find the exact name', () => {
  const result = findUsersByName(
    {
      name: 'Bob',
    },
    [
      {
        id: '1',
        name: 'Bob',
      },
      {
        id: '2',
        name: 'Alice',
      },
    ]
  );

  expect(result).toEqual([
    {
      id: '1',
      name: 'Bob',
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
