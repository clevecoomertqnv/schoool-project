function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colors = ["red", "green", "blue"];
  return colors[getRandomInt(colors.length)];
}

const randomNumber = getRandomInt(100);
const randomColor = getRandomColor();
console.log(`The random number is ${randomNumber}.`);
console.log(`The random color is ${randomColor}.`);
