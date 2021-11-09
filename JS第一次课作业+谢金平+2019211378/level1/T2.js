//写一个排序算法，对传入数组进行升序排序。
var arr=[1,5,4,8,2,6,3,9,7];
function mySort(arr){
  	//code
    //简单插入排序
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        for(var j = i-1; j > 0 && arr[j] > temp; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp;
    }
    return arr;
}
console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]
