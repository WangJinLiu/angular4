import { Component, OnInit } from '@angular/core';
/*想让这个文件和server连接就要 先import 然后定义一个DataService对象 然后就可以使用*/
import {UserService} from '../../services/user.service';
/*引入路由模块*/
/*想要用到路由跳转*/
/*ActivatedRoute 想得到路由参数用*/
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	user:object = {
		name:'',
		email:'',
		phone:'',
		balance:''
	};
  constructor(
	  	public userService:UserService,
	  	private router:Router
  	) { 
  	
  	}

  	postuser(){
	  	this.userService.postUser(this.user).subscribe(res => { 
	  		console.log(res);
	  		/*注意在请求完的这跳转*/
	  		this.router.navigate(['/']);

	    })
    }	
  

  	ngOnInit() {
  	}

}
