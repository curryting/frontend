// 导入模块
const http = require('http')
// 创建httpserver服务
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type':'text/plain'})
    response.end("hello server")
}).listen(8888)
// 监听一个端口
// 启动运行服务
console.log("你启动的服务是：http://localhost:8888, 启动成功");
// 在浏览器访问