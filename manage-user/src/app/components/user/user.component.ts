import { Component, OnInit } from '@angular/core';
/*想让这个文件和server连接就要 先import 然后定义一个DataService对象 然后就可以使用*/
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any = [];
  sum:number = 0;
  constructor(
  	public userService:UserService
  	) {

    	this.userService.getUsers().subscribe(res => { 
    		this.users = res;
    		console.log(this.users);
    		for (var i = 0; i<this.users.length;i++) {
          if(this.users[i].balance != ''){
            this.sum+=parseInt(this.users[i].balance);
          }
    			

    		}
      });

  	}


  ngOnInit() {


  }

}
