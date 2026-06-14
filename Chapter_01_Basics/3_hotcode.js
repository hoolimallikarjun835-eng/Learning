console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);

//Repeated code which is to be optmized is called hot code and the process of optimizing it is called hot code
