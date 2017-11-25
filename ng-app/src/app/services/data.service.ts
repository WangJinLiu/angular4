import { Injectable } from '@angular/core';
/*Http  类*/
import {Http} from '@angular/http';
/*引入 react 中的一个方法*/
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
	/*any 任何类型*/
	/*users:any;*/

	constructor(
		public http:Http) { 

		/*this.users = ["张然",'王津柳','玥玥','小红'];*/


	}
	getUsers(){
		/*return this.users;*/
		/*访问服务器以后会返回一个observation对象*/
		/*map react 中的一个方法*/
		return this.http.get('http://localhost:3000/blog').map(res => res.json())
	}
	/*添加数据*/
	postUsers(value){
	    return this.http.post('http://localhost:3000/blog',value).map(res => res.json())
	}
	deleteUsers(value){
		 return this.http.delete('http://localhost:3000/blog/'+value).map(res => res.json())
	}
	//更新数据
	updataUser(user){
		return this.http.put('http://localhost:3000/blog/'+user.id,user).map(res => res.json())
	}
	getSingleUsers(id){
		return this.http.get('http://localhost:3000/blog/'+ id).map(res => res.json())
	}

}
