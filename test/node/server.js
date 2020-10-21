const http = require("http");
const fs = require("fs");

const server = http
    .createServer((req, res) => {
        let url = req.url;
        switch (url) {
            case "/":
                let html = fs.readFileSync("./html/index.html");
                res.write(html);
                break;
            case "/css/style.css":
                let css = fs.readFileSync("./css/style.css");
                res.write(css);
                break;
        }
        res.end();
    })
    .listen(3000, () => {
        console.log("你好");
    });
