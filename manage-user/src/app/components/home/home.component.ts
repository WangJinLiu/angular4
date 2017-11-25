import { Component, OnInit } from '@angular/core';
/*组件中通信要用到 Component Input Output 三个 */
/*import {EventEmitter, Input, Output } from '@angular/core';*/
/*引入serve服务*/
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 /* obj:object = {
  	judge:false
  }*/
  constructor(
  	public userService:UserService,
  	private router:Router

  	) { 
	  	/*this.userService.putJudge(this.obj).subscribe(res => {
	      console.log(res)
	    })*/


  }

  ngOnInit() {
  }

}
