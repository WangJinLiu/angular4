<!-- 伪造后台接口 -->
<!-- 安装全局json-server -->
npm install -g json-server
<!-- 写了这个你下载的东西才能用-->
npm init --yes
<!-- 安装一个本地的json-server -->
 cnpm install json-server --save
 改package.json中的
 "scripts": {
    "json:server":"json-server --watch db.json"
  },
 建db.json文件
 <!-- 终端执行命令 -->
 cnpm run json:server
 <!-- 浏览器里输入 -->
 http://localhost:3000
<!-- 在网页下载Postman工具调试接口 注册-->
增删改
改增要添加请求头
删不用
（patch改）
改，删要进入对应的id下
eg： http://localhost:3000/users/6（id为6）
  get 查询
  post添加
  delete删除


<!-- POST请求一定要给请求头 -->


pure（纯css框架）