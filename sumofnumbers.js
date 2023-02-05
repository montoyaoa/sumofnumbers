function sumFor(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

function sumWhile(input) {
  let result = 0;
  let i = 0;
  while (i < input.length) {
    result += input[i];
    i++;
  }
  return result;
}

function sumRecursion(input, index) {
  if (index === input.length) {
    return 0;
  }
  return sumRecursion(input, index + 1) + input[index];
}

function sumTheSimpleWay(input) {
  return _.reduce(input, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4], 0));
console.log(sumTheSimpleWay([1, 2, 3, 4]));
