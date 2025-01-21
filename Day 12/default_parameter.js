function getValue(n = 0) {
  console.log("The n is = " + n);

  if (isNaN(n)) {
    return "This is string";
  } else {
    return n;
  }
}

getValue(10);

let result = getValue(2);

console.log(result);
