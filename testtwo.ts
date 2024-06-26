const f = [1, "콜라", true];
f[1] = "포카리";
const g = f;
console.log(g);
console.log(`확인${f[1]}`);
