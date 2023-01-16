//导入http.js
import http from "../utils/http";//@==>src
console.log('打印http', http);
//可以按需导出
//获取聊天列表  方法一  返回一个请求的方法
export const getChatList=(params)=>http.get("/chat/list",{params});
//获取商品详情
export const getProductDetail=(id)=>http.get(`/product/${id}`);
//方法二 在api文件里出来异步请求
// export const getCategory=async()=>{
// 	const res=await http.get(`/category/`);
// 	return res.data.results;
// 	};