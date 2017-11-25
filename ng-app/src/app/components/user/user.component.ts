import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*想用server里的东西要先引入*/
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  /*属性*/
  title = "BJH170705";
  /*要求指定类型*/
  /*name:string = "Henry";*/
  name:string;
  age:number;
  email:string;
  hobbies:string[];
  users:string[];
  /*address:{
  	city:string,
  	state:string,
  	street:string

  }*/
  address:Address;
  isEdit:boolean;
  /* constructor 比 ngOnInit 快*/
  constructor(
    public dataService:DataService
    ) { 
    /*this.users = this.dataService.getUsers(); 
  	console.log("construtor1 run......");*/
  }

  ngOnInit() {
  	/*console.log("ngOnInit run......");*/
  	this.name = "Henry";
  	this.age = 30;
  	this.email = "ijfdgne @rgf";
  	this.hobbies = ["王者","cf","英雄联盟"];
   	this.address = {
   		city:"背景",
   		state:"昌平",
   		street:"定泗路"
   	};
    this.isEdit = false;
  }
  myClick(value){
  /*	this.name = value;
  	this.age = 333;*/
  	this.hobbies.push(value);
  }
  addHobby(value){
  	console.log(value);
  	/*unshift 第一位*/
  	this.hobbies.push(value);
  	return false;
  }
  Delete(i){
  	this.hobbies.splice(i,1);

  }

}
/*一个接口*/
interface Address{
	 city:string,
  	state:string,
  	street:string

  
}
