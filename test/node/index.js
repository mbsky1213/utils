const fs = require("fs");

// 1. 读取文件操作
let data = fs.readFile("./txt/1.txt", "utf8", (err, data) => {
    if (err) return console.log(err);
    console.log("异步读取=>", data);
});
data = fs.readFileSync("./txt/1.txt", "utf8");
console.log("同步读取=>", data);
// 2. 修改名称
// fs.rename("./txt/1.txt", "./txt/2.txt", (data) => {
//     console.log("修改结束");
// });
// 3. 复制操作
fs.copyFileSync("./txt/2.txt", "./txt/3.txt");
// 4. 删除操作
fs.unlink("./txt/2.txt", (err) => {
    if (err) return console.log(err);
    console.log("删除成功");
});
