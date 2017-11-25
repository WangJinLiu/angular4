import { Injectable } from '@angular/core';
/*Http  类*/
import {Http} from '@angular/http';
/*引入 react 中的一个方法*/
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
  	public http:Http) { }
    /*获得所有数据*/
	getUsers(){
		/*访问服务器以后会返回一个observation对象*/
		/*map react 中的一个方法*/
		return this.http.get('http://localhost:3000/users').map(res => res.json())
	}
	/*获得一条数据*/
	getUser(id) {
		return this.http.get('http://localhost:3000/users/' + id).map(res => res.json())
	}
	/*添加*/
	postUser(obj) {
		return this.http.post('http://localhost:3000/users/',obj).map(res => res.json())
	}
	/*修改*/
	putUser(obj) {
		return this.http.put('http://localhost:3000/users/' + obj.id,obj).map(res => res.json())
	}
	/*删除*/
	deleteUser(id) {
		return this.http.delete('http://localhost:3000/users/' + id).map(res => res.json())
	}
	postLogin(obj) {
		return this.http.post('http://localhost:3000/login',obj).map(res => res.json())
	}
	getLogin() {
		return this.http.get('http://localhost:3000/login').map(res => res.json())
	}
	getJudge() {
		return this.http.get('http://localhost:3000/navjudge').map(res => res.json())
	}
	putJudge(obj) {
		return this.http.put('http://localhost:3000/navjudge',obj).map(res => res.json())
	}


}