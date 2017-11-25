import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*拿到路由参数*/
import {Router,ActivatedRoute,Params} from '@angular/router'
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  id:number;
  user:object = {};
  constructor(
  		private router:Router,
  		private route:ActivatedRoute,
  		public dataService:DataService
  	) {
  	/*返回观察者对象*/
  	this.route.params.subscribe((params:Params) => {
  		//拿到传过来的id
  		console.log(params.id);
  		this.id = params.id;


  	}); 


  	 }

  ngOnInit() {
  	this.dataService.getSingleUsers(this.id).subscribe(user => {
  		this.user = user;
  		console.log(this.user);
  	});

  }

}
