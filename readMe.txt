https://cli.angular.io/  angular脚手架安装网址
https://github.com/angular/quickstart  angulargitub地址
1.安装angular脚手架
sudo cnpm install -g @angular/cli
2.如果安装过了要更新用
sudo cnpm install -g @angular/cli@latest
3.查看版本ng -v


4.(如果需要的话)npm i -g npm 更新npm

创建一个文件夹
cd 到文件夹

ng new ng-app


5.ng serve 
拷贝http://localhost:4200/在浏览器中打开

若在submit中app.component.ts 中没颜色安装  tools   -> command -> typesyntax


e2e 测试使用


.angular-cli.json  apps中
	outDir 把我的文件打包到哪个文件夹
	styles 全局的style 会影响全局


src中的styles.css 是全局的


main.us 主入口文件


组件都有的
css ts html 文件

跟组件多一个文件app.module.ts 用于配置其他组件
创建组件命令
ng g c components/User
ng g c components/home

创建服务 （services文件夹名）
 ng g s services/data
创建新组件
ng g c components/navbar



 
