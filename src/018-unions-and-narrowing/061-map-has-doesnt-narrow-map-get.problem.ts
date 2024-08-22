type Event = {
  message: string;
};

// const processUserMap = (eventMap: Map<string, Event>) => {
//   if (eventMap.has('error')) {
//     const message = eventMap.get('error').message;

//     throw new Error(message);
//   }
// };

const processUserMap = (eventMap: Map<string, Event>) => {
  const event = eventMap.get('error');
  if (event) {
    const message = event.message;

    throw new Error(message);
  }
};
