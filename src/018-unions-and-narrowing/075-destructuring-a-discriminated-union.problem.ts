import { Equal, Expect } from '@total-typescript/helpers';
import { expect, it } from 'vitest';

type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Shape = Circle | Square;

//there is a limitation to destructure a discriminated union
//because here if we destructure kind and then use ...shape, the kind will be detached from the shape and in the if block typescript will think shape is still union type.
// so the best approach is to pass the shape as it is and then destructure it in the if block
function calculateArea(shape: Shape) {
  if (shape.kind === 'circle') {
    const { radius } = shape;
    return Math.PI * shape.radius * radius;
  } else {
    const { sideLength } = shape;
    return sideLength * sideLength;
  }
}

it('Should calculate the area of a circle', () => {
  const result = calculateArea({
    kind: 'circle',
    radius: 5,
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});

it('Should calculate the area of a square', () => {
  const result = calculateArea({
    kind: 'square',
    sideLength: 5,
  });

  expect(result).toBe(25);

  type test = Expect<Equal<typeof result, number>>;
});
