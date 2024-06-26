var items9 = [
    { name: "콜라", price: 1000 },
    { name: "사이드", price: 1200 },
    { name: "물", price: 800 },
    { name: "주스", price: 1500 },
];
var kk = items9.reduce(function (obj, item) {
    obj[item.name] = item.price;
    return obj;
});
console.log(kk);
