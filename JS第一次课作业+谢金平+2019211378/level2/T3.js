//使用sort函数，对对象数组按照对象的某个属性进行排序。
var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
         {name:'lisi',age:29},{name:'wangwu',age:24}];

function sortby(key , way = true){//way为true表示默认按照升序排列
    //code
    var ret = way ? 1: -1;
    return function(a,b){
        var value1 = a[key];
        var value2 = b[key];
        if(value1 >= value2){
            return 1*ret;
        }else{
            return -1*ret;
        }
    }   
}
console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name',false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响