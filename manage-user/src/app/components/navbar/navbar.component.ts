import { Component, OnInit } from '@angular/core';
/*引入serve服务*/
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  objServer:boolean = false;
  objServerTwo:any = {
  	judge:false
  }
  constructor(
  	public userService:UserService,
  	private router:Router
  	) { 
		this.userService.getJudge().subscribe(res => {
			console.log(res);
	       this.objServer = res.judge;
	    })



  }
  change() {
  	this.userService.putJudge(this.objServerTwo).subscribe(res => {
  		location.href='http://localhost:4200/login'
	})
  }

  ngOnInit() {
  }

}
