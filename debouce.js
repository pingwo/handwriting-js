// function debounce(func, delay){
//     let timeout;
//     return function(){
//         const context = this;
//         const argus = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(context, argus), delay);
//         // timeout = setTimeout(func, delay);
//     }
// }

// function test1(){
//     console.log('我是打印函数1');
// }
// const deboucefn = debounce(test1, 2000);
// deboucefn();
// deboucefn();
// deboucefn();


// function throttle(func, delay){
//     let wait = false;
//     return (...argus) => {
//         if(wait) return;
//         func(...argus);
//         wait = true;
//         setTimeout(() => {
//             wait =  false;
//         }, delay);
//     }
// }
// function test2(){
//     console.log('我是打印函数2');
// }
// const throttlefn = throttle(test2, 2000);
// throttlefn();
// throttlefn();
// throttlefn();

// function once(func){
//     let ran = false;
//     let result;
//     return function() {
//         if(ran) return result;
//         result = func.apply(this, arguments);
//         ran = true;
//         return result;
//     }
// }
// function test3(){
//     console.log('我是打印函数3');
// }
// const oncefn = once(test3);
// oncefn();
// oncefn();
// oncefn();

// function memoize(func) {
//     const cache = new Map();
//     return function() {
//         const key = JSON.stringify(arguments);
//         if(cache.has(key)) {
//             return cache.get(key);
//         }
//         const result = func.apply(this, arguments);
//         cache.set(key, result);
//         return result;
//     }
// }
// function fibonacci(n) {
//     if (n < 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const memoizefn = memoize(fibonacci);
// console.log(memoizefn(20));
// console.log(memoizefn(30));
// console.log(memoizefn(20));