import { Component, OnInit } from '@angular/core';
/*想要拿到路由参数*/
import {Router,ActivatedRoute,Params} from '@angular/router'
/*想让这个文件和server连接就要 先import 然后定义一个DataService对象 然后就可以使用*/
import {UserService} from '../../services/user.service'
/*组件中通信要用到 Component Input Output 三个 */
import {EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:any;
  obj:object = {

  }
  constructor(
	  	private router:Router,
		private route:ActivatedRoute,
		public userService:UserService
  	) {

  	/*返回观察者对象*/
  	this.route.params.subscribe((params:Params) => {
  		//拿到传过来的id
  		console.log(params.id);
  		this.id = params.id;
  		this.userService.getUser(this.id).subscribe(res => { 
  			this.obj = res;
  		});
  	 }); 
  	}
  /*删除方法*/
  deleteuser() {
  	this.userService.deleteUser(this.id).subscribe(res => {
  		this.router.navigate(['/']);
  	})
  }

  ngOnInit() {
  }

}
