import { Component, OnInit } from '@angular/core';
/*引入serve服务*/
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:string;
  user:any = {
  	email:'',
  	password:''
  };
  judge:boolean = false;
  judgePost:boolean = true;
  obj:object = {
    judge:true
  }
  constructor(
  	public userService:UserService,
  	private router:Router
  	) {

  	}
  //添加email
  checklogin(){
  	//判断用户是否登录
  	this.userService.getLogin().subscribe(res => {
  		for(var i=0;i<res.length;i++) {
  			if(this.user.email === res[i].email && this.user.password === res[i].password){
    			this.judgePost = false;
  			}
  		}
  		if(this.judgePost == false) {
          this.userService.putJudge(this.obj).subscribe(res => {
            console.log(res)
            /*注意在请求完的这跳转*/
          /* this.router.navigate(['/']);*/
          location.href='http://localhost:4200';
          })
  			
      }else{
        this.judge = true;
        this.judgePost == true;
  			this.alert = '用户名或密码错误！';
  		}

    })
   

  }	
  

  ngOnInit() {
  }

}
