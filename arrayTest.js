// // 예제 아이템 목록
// var items = [
//   { name: "콜라", stock: 5 },
//   { name: "사이다", stock: 0 },
//   { name: "물", stock: 10 },
//   { name: "주스", stock: 0 },
// ];
// var availableitems = items.filter(function (item) {
//   return item.stock > 0;
// });
// console.log(availableitems);
// //상품의 이름과 가격을 배열로 생성
// var items2 = [
//   { name: "콜라", price: 1000 },
//   { name: "사이다", price: 1200 },
//   { name: "물", price: 800 },
//   { name: "주스", price: 1500 },
// ];
// var item2List = items2.map(function (item) {
//   return "".concat(item.name, ": ").concat(item.price, "\uC6D0");
// });
// console.log(item2List);
// //재고가 많은 순서대로 상품 정렬
// // JavaScript의 배열 객체에서 제공하는 sort() 메서드는 배열의 요소를 정렬하는 데 사용됩니다. 이 메서드는 기본적으로 배열의 요소를 문자열로 변환한 후 유니코드 코드 포인트 순서로 정렬합니다. 그러나 숫자를 정렬할 때는 이 점에 유의해야 하며, 비교 함수를 제공하여 정렬 순서를 사용자가 정의할 수 있습니다.
// var items3 = [
//   { name: "콜라", stock: 5 },
//   { name: "사이다", stock: 0 },
//   { name: "물", stock: 10 },
//   { name: "주스", stock: 2 },
// ];
// var sortedItems = items3.sort(function (a, b) {
//   return b.stock - a.stock;
// });
// console.log(sortedItems);
