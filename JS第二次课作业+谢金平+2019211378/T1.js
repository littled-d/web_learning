const course = {
    name: "CSA",
    semester: 2
};
const {
    name,
    semester: year,  //不同名用 属性名:变量名
    isStudent = true
} = course;

console.log(name, year, isStudent);
