// PROBLEM
// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
// HERE ALL THE PROPS ARE MUTABLE AND TO MAKE THEM IMMUTABLE SO THEY CANNOT BE REASSIGNED AND READONLY: WE CAN USE readonly keyword in front of property which is a typescript directive.

type User = {
  readonly id: number;
  name: string;
  age: number;
};

const updateUser = (user: User) => {
  user.name = 'Jane Doe';
  user.age = 30;

  // @ts-expect-error Should not be able to modify readonly
  user.id = 1;
};
