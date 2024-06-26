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
const sortedItems = items3.sort((a, b) => {
  return b.stock - a.stock;
});
console.log(sortedItems);
//이름이 사이다인 제품 찾기
const items4: Item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "주스", stock: 2 },
];
const soda = items4.find((item) => {
  return item.name === "사이다";
});
console.log(soda);
//모든 상품의 총 재고 확인
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
const items5: Item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "주스", stock: 2 },
];
const tottalStock: number = items5.reduce((total, item) => {
  return total + item.stock;
}, 0);
console.log(tottalStock);
//모든 상품 이름 리스트 생성
const itemNames: string[] = items5.map((item) => {
  return item.name;
});
//가격이 1000원 이상인 상품 나열
const expensiveItems = items2.filter((item) => {
  return item.price > 1000;
});
//재고가 하나라도 있는지 확인
// some() 메서드는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고, 콜백 함수가 최소한 한 번이라도 true를 반환하면 some() 메서드 자체도 true를 반환하는 배열 메서드입니다. 그렇지 않고 모든 요소에서 콜백 함수가 false를 반환하면 some() 메서드는 false를 반환합니다.
const hasStock = items.some((item) => {
  return item.stock > 0;
});
// 상품 이름을 키로 하고 가격을 값으로 하는 객체 생성
const itemObject: { [itemName: string]: number | string | boolean } =
  items2.reduce((obj, item) => {
    obj[item.name] = item.price;
    return obj;
  }, {});
console.log(itemObject);
