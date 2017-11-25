import { Component, OnInit } from '@angular/core';
/*想让这个文件和server连接就要 先import 然后定义一个DataService对象 然后就可以使用*/
import {UserService} from '../../services/user.service';
/*ActivatedRoute 想得到路由参数用 路由跳转需要的模块*/
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:object = {
  	name:'',
  	email:'',
  	phone:'',
  	balance:''
  }
  id:any;
  constructor(
  	public userService : UserService,
  	/*在js中实现路由跳转*/
  	private router:Router,
  	/*得到路由参数*/
  	private route:ActivatedRoute
  	) { 

	  	/*得到路由参数*/
	  	this.route.params.subscribe((params:Params) => {
			//拿到传过来的id
			console.log(params.id);
			this.id = params.id;
		}); 

	  	/*实现编辑页面*/
		this.userService.getUser(this.id).subscribe(res => {
	  		this.user = res;
	  	});
	}
  /*编辑方法*/
  edituser() {
  	this.userService.putUser(this.user).subscribe(res => { 
  		/*注意在请求完的这跳转*/
  		this.router.navigate(['/']);

	})
  }

  ngOnInit() {
  }

}
