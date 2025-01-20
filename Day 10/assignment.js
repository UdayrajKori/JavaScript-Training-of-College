let i,
  num1 = 0,
  num2 = 1,
  sum;

for (i = 0; i <= 10; i++) {
  console.log(num1);
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;
}
