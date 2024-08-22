const users = [
  { id: '1', name: 'Robin' },
  { id: '2', name: 'Dennis' },
  { id: '3', name: 'Sara' },
];

// Imagine this function was 10x bigger
// with 10x more references to `id`

// How do we change id to userId?
// F2 is the key to rename symbol
const filterUsersById = (userIdToFilter: string) => {
  return users.filter((user) => user.id === userIdToFilter);
};
