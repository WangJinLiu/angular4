import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*用数据双向绑定要用*/
import {FormsModule} from '@angular/forms'
/*引入这个http模块*/
import {HttpModule} from '@angular/http';
/*引入路由模块*/
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
/*下面是自己引入服务*/
import { UserService } from './services/user.service';
const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userDetail/:id',component:UserDetailComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'editUser/:id',component:EditUserComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  /*UserService 自己配置，所有组件就都可以使用这个server 了*/
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
