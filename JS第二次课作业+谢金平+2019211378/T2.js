function course() {
    this.coursename = "CSA前端培训";
    this.semester = 2;
}
function student(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.course = new course();
    this.coursename =this.course.coursename;
    this.semester = this.course.semester;

    this.moreinfo = function () {
        var detail = function () {
            console.log(this.gender);
        }   
        //改变this的指向，传进去的this指向student构造函数
        detail.call(this);   //多个参数，自动调用
        detail.apply(this);   //两个参数，第二个为数组，装实参，自动调用
        detail.bind(this)();   //bind返回是一个新的函数，不会自动调用 detail.bind(this)返回新的函数，再加()调用
    }
}
var student1 = new student("小明",18,"男");
console.log(student1.coursename,student1.semester); //课程名字和第几期
student1.moreinfo();//你的性别
