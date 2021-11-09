//警示框
var message = prompt("请输入要提示的信息！");
message -= 0;  //类型变换
while(isNaN(message)){
    message = prompt("你未输入正确的数字，请重新输入："); //这里将用户输入的信息存到message这个变量中
}
alert("你输入的数字平方后为：" + message*message);
