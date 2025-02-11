//Quiz1
let num = 100;
for (let idx = 1; idx <= num; idx++) {
  if (num % idx === 0) {
    console.log(idx);
  }
}

//Quiz2
function isPrimeNumber(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

//Quiz3
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, subtract);
