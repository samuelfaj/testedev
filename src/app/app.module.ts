import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentifyComponent } from './pages/identify/identify.component';
import Base from '../helpers/Api/Api';
import App from '../helpers/App/App';
import Me from '../helpers/Me/Me';
import Loader from '../helpers/App/Loader';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthGuardService, LoginGuardService} from '../bases/auth';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentifyComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
      Base,
      App,
      Loader,
    Me,
      LoginGuardService,
      AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
