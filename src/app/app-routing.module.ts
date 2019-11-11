import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdentifyComponent} from './pages/identify/identify.component';
import {AuthGuardService, LoginGuardService} from '../bases/auth';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:  'identify', pathMatch:  'full' },
  { path: 'identify', component: IdentifyComponent, canActivate: [LoginGuardService]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
