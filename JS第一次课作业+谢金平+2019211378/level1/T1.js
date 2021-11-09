// 对数组中的元素去重。
var arr=[1,2,3,3,4,'a','a','b','c'];
function reduce(arr){
    var res=[];
    //code
    for(var item of arr) {
        if(res.every(equal)) res.push(item);
    }
    return res;
    function equal(item1, index, arr){ return item1 != item; }
}
console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]