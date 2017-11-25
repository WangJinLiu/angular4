import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/*想让这个文件和server连接就要 先import 然后定义一个DataService对象 然后就可以使用*/
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  users:any[];
  judge:boolean;
/*  name:any;
  email:any;
  phone:any;*/
  /*定义属性一定要有类型*/
  obj:object = {
    name:'',
    email:'',
    phone:''
  };
  isEdit:boolean = false;
  /*construtor是在渲染之前运行最先运行的*/
  constructor(
  	/*创建对象*/
  	public dataService:DataService

  	) { 
  	/*console.log(this.dataService.users);
  	this.users = this.dataService.users;
  	this.users = this.dataService.getUsers();*/
  	/*得到观察者对象 es7里的*/
    console.log(this.dataService.getUsers());
  	this.dataService.getUsers().subscribe(res => this.users = res);



  }

  addUser(){
    this.judge = !this.judge;
    
  }
  /*编辑*/
  editUser(user) {
    this.obj = user;
    this.isEdit = true;

  }
  /*实现添加*/
  addYes(isEdit){
    /*console.log(this.obj);*/
    /*subscribe 方法 要想拿到map返回的数据*/
    if (isEdit) {
      //编辑
      console.log(123);
      this.dataService.updataUser(this.obj).subscribe(user => {
        console.log(user);
        //删除当前数据
        for(let i = 0;i<this.users.length;i++){
          if(this.users[i].id == user.id) {
            this.users.splice(i,1);

          }

        }
        //添加得到的user
        this.users.unshift(user);
      });
    }else{
      //添加
       this.dataService.postUsers(this.obj).subscribe(user => {
          this.users.unshift(user);
        });
        this.judge = !this.judge;
    /*    location.reload();*/ 
        return false;
    }
   


  }
  /*实现删除*/
  deleteUser(id){
    this.dataService.deleteUsers(id).subscribe(user => {
      for(let i = 0;i<this.users.length;i++){
        if(this.users[i].id == id) {
          this.users.splice(i,1);

        }

      }
    });
   /* location.reload(); */
  }
  /*初始化*/
  ngOnInit() {
    this.judge = true;
  }


}


