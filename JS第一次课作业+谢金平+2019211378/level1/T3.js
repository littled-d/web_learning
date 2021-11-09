//合并两个数组并进行排序
var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
    //code
    var result = [];
    while (arr1.length>0 && arr2.length>0) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }   
    while (arr1.length)
        result.push(arr1.shift());
    while (arr2.length)
        result.push(arr2.shift());
    return result;
}
console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]
