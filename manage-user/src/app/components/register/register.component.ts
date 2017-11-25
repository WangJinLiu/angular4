import { Component, OnInit } from '@angular/core';
/*引入serve服务*/
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any = {
  	email:'',
  	password:''
  }
  //控制弹出框的出现
  judge:boolean = false;
  alert:string;
  //判断数据库中是否有输入注册的email
  judgePost:boolean = true;
  constructor(
  	public userService:UserService,
  	private router:Router
  	) {

  	}
  //添加email
  postlogin(){
  	//判断用户名是否注册过
  	this.userService.getLogin().subscribe(res => {
  		for(var i=0;i<res.length;i++) {
  			if(this.user.email === res[i].email){
  				this.judgePost = false;
			}
		}
  		if(this.judgePost == true) {
  			this.userService.postLogin(this.user).subscribe(res => { 
		  		/*注意在请求完的这跳转*/
		  		this.router.navigate(['/login']);
			})
		}else{
  			this.judge = true;
			this.alert = '邮箱已注册过，请直接登录！';
			this.judgePost = true;
		}

    })
   

  }	
  

  ngOnInit() {
  }

}
