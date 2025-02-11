const arrayOfObj = [
  { title: "T-shirt", price: 10, qty: 5 },
  { title: "Socks", price: 5, qty: 10 },
  { title: "Shoes", price: 50, qty: 0 },
  { title: "Hat", price: 15, qty: 5 },
  { title: "Gloves", price: 20, qty: 10 },
];

// arrayOfObj.forEach((arrayElements) => {
//   console.log(arrayElements);
// });

const fltr = arrayOfObj.filter((prod) => {
  console.log(prod.qty);
  return prod.qty > 0;
});

console.log(fltr);
