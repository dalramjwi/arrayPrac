//재고가 있는 상품만 나열하게 하기
// Item 인터페이스 정의
interface Item {
  name: string;
  stock: number;
}

// 예제 아이템 목록
const items: Item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "주스", stock: 0 },
];
const availableitems = items.filter((item) => {
  return item.stock > 0;
});
console.log(availableitems);
