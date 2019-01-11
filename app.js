var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('static'));

后端解决跨域问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//主题获取轮播图数据
app.get('/home/getCursor', (req, res) => {
    data = {
        items: [
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            }
        ]
    }
    res.send(data);
})

app.listen(8080)