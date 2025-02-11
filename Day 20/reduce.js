const arrayOfObj = [
  { title: "T-shirt", price: 10, qty: 5 },
  { title: "Socks", price: 5, qty: 10 },
  { title: "Shoes", price: 50, qty: 0 },
  { title: "Hat", price: 15, qty: 5 },
  { title: "Gloves", price: 20, qty: 10 },
];

const reduces = arrayOfObj.reduce((acc, prod) => {
  //   console.log(prod);
  //   console.log(acc);
  //   return acc + 10;

  return acc + prod.price * prod.qty;
}, 0);

console.log(reduces);
