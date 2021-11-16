var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
        { name: "Amber", sex: "woman" },
        { name: "Barbara", sex: "woman" },
        { name: "Venti", sex: "man" }],
    work: {
        time: "2021",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function () { console.log("玩滑板"); }
}

const clone = deepclone(data);
console.log(clone);

function deepclone(obj) {
    let newobj;
    if (obj instanceof Array) {
        newobj = obj.map(deepclone);
    } else if (obj && typeof obj == 'object') {
        newobj = {};
        for (const key in obj) {
            newobj[key] = deepclone(obj[key]);
        }
    } else {
        newobj = obj;
    }
    return newobj;
}