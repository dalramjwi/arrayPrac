//재고가 있는 상품만 나열하게 하기
// Item 인터페이스 정의
interface Item {
  name: string;
  stock: number;
}
interface Item2 {
  name: string;
  price: number;
}

// 예제 아이템 목록
const items: Item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "주스", stock: 0 },
];
const availableitems: Item[] = items.filter((item: Item) => {
  return item.stock > 0;
});
console.log(availableitems);

//상품의 이름과 가격을 배열로 생성
const items2: Item2[] = [
  { name: "콜라", price: 1000 },
  { name: "사이다", price: 1200 },
  { name: "물", price: 800 },
  { name: "주스", price: 1500 },
];
const item2List = items2.map((item: Item2) => {
  return `${item.name}: ${item.price}원`;
});
console.log(item2List);
//재고가 많은 순서대로 상품 정렬
const items3: Item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "주스", stock: 2 },
];
const sortedItems = items.sort((a, b) => {
  return b.stock - a.stock;
});
console.log(sortedItems);
