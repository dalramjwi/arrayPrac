interface Item9 {
  name: string;
  price: number;
}

interface item {
  [k: string]: number;
}

const items9: Item9[] = [
  { name: "콜라", price: 1000 },
  { name: "사이드", price: 1200 },
  { name: "물", price: 800 },
  { name: "주스", price: 1500 },
];

const kk = items9.reduce((obj, item) => {
  obj[item.name] = item.price;
  return obj;
}, {} as item);
console.log(kk);
