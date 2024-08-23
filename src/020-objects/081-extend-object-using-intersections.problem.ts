import { Extends, Expect } from '@total-typescript/helpers';

type BaseEntity = {
  id: string;
  createdAt: Date;
  name: string;
};

type User = BaseEntity & {
  email: string;
};

type Product = BaseEntity & {
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >
];
