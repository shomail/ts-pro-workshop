const func = () => {
  // Refactor this to be its own function
  const randomPercentage = newFunction();
  console.log(randomPercentage);
};
function newFunction() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
