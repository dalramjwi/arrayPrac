// 예제 아이템 목록
var items = [
    { name: "콜라", stock: 5 },
    { name: "사이다", stock: 0 },
    { name: "물", stock: 10 },
    { name: "주스", stock: 0 },
];
var availableitems = items.filter(function (item) {
    return item.stock > 0;
});
console.log(availableitems);
//상품의 이름과 가격을 배열로 생성
var items2 = [
    { name: "콜라", price: 1000 },
    { name: "사이다", price: 1200 },
    { name: "물", price: 800 },
    { name: "주스", price: 1500 },
];
var item2List = items2.map(function (item) {
    return "".concat(item.name, ": ").concat(item.price, "\uC6D0");
});
console.log(item2List);
//재고가 많은 순서대로 상품 정렬
// JavaScript의 배열 객체에서 제공하는 sort() 메서드는 배열의 요소를 정렬하는 데 사용됩니다. 이 메서드는 기본적으로 배열의 요소를 문자열로 변환한 후 유니코드 코드 포인트 순서로 정렬합니다. 그러나 숫자를 정렬할 때는 이 점에 유의해야 하며, 비교 함수를 제공하여 정렬 순서를 사용자가 정의할 수 있습니다.
var items3 = [
    { name: "콜라", stock: 5 },
    { name: "사이다", stock: 0 },
    { name: "물", stock: 10 },
    { name: "주스", stock: 2 },
];
var sortedItems = items3.sort(function (a, b) {
    return b.stock - a.stock;
});
console.log(sortedItems);
//이름이 사이다인 제품 찾기
var items4 = [
    { name: "콜라", stock: 5 },
    { name: "사이다", stock: 0 },
    { name: "물", stock: 10 },
    { name: "주스", stock: 2 },
];
var soda = items4.find(function (item) {
    return item.name === "사이다";
});
console.log(soda);
//모든 상품의 총 재고 확인
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
var items5 = [
    { name: "콜라", stock: 5 },
    { name: "사이다", stock: 0 },
    { name: "물", stock: 10 },
    { name: "주스", stock: 2 },
];
var tottalStock = items5.reduce(function (total, item) {
    return total + item.stock;
}, 0);
console.log(tottalStock);
//모든 상품 이름 리스트 생성
var itemNames = items5.map(function (item) {
    return item.name;
});
//가격이 1000원 이상인 상품 나열
var expensiveItems = items2.filter(function (item) {
    return item.price > 1000;
});
//재고가 하나라도 있는지 확인
// some() 메서드는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고, 콜백 함수가 최소한 한 번이라도 true를 반환하면 some() 메서드 자체도 true를 반환하는 배열 메서드입니다. 그렇지 않고 모든 요소에서 콜백 함수가 false를 반환하면 some() 메서드는 false를 반환합니다.
var hasStock = items.some(function (item) {
    return item.stock > 0;
});
//상품 이름과 가격으로 객체 생성
var itemObject = items2.reduce(function (obj, item) {
    obj[item.name] = item.price;
    return obj;
}, {});
