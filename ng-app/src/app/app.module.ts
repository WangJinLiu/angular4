import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*用数据双向绑定要用*/
import {FormsModule} from '@angular/forms'
/*引入这个http模块*/
import {HttpModule} from '@angular/http';
/*引入路由模块*/
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
/*引入服务*/
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import {DataService} from './services/data.service';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserDetailComponent}
];

@NgModule({
	/*声明*/
  declarations: [
    AppComponent,
    UserDetailComponent, 
    NavbarComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  /*所有服务在此引入*/
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
	NgModule
	declarations声明:所有组件<Component>都要在这声明
	import：所有模块<Module>都要在此引入
	providers:所有服务<service>都要在此引入



*/