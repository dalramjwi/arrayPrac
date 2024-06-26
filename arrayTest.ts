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
// JavaScript의 배열 객체에서 제공하는 sort() 메서드는 배열의 요소를 정렬하는 데 사용됩니다. 이 메서드는 기본적으로 배열의 요소를 문자열로 변환한 후 유니코드 코드 포인트 순서로 정렬합니다. 그러나 숫자를 정렬할 때는 이 점에 유의해야 하며, 비교 함수를 제공하여 정렬 순서를 사용자가 정의할 수 있습니다.
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
