const dragon = (numbers) => {
  numbers[0] % 2 === 0
    ? result.push("EVEN")
    : result.push("ODD");
  numbers.shift();

  if (numbers.length === 0) return;
  else dragon(numbers);
};

let result = [];
dragon([3142, 5798, 6551, 5914]);
console.log(result);
