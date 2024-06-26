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
