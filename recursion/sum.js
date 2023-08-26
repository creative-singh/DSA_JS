const sum = (num) => {
  if (num === 1) return 1;
  return num + sum(num - 1);
};

let res = 0;
console.log(sum(3));
