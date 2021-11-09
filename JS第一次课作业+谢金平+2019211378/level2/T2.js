//函数递归实现数组扁平化。
var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(item,index,arr) {
    //code
    if (Array.isArray(item)) {
        res.concat(item.map(fun1));
    } else {
        res.push(item);
    }
}
fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];
