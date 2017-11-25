import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	/*属性*/
  title = 'Henry';
}
/*
	ts的构成：
		1.引入需要用的模块<import>
		2.声明组建信息<@Component>
		3.创建或引入类 <属性 / 方法>

		@Component
		selector:指令 供其他地方使用
		template:模板，具体的html结构
		templateUrl:模板Url，需要执行的html文件
		styleUrls：样式模板，执行的css文件
*/
