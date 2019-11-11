import { Component, OnInit } from '@angular/core';
import {DefaultBase} from '../../../bases/default';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends DefaultBase {
  login = {
    login: '',
    password: '',
    scheme_url: "vesti"
  };

  async ngOnInit() {
    const self = this;
    if(!self.params.login){
      self.app.router.navigateByUrl('identify');
    }else{
      self.login.login = self.params.login;
    }
  }


  private async submit(){
    const self = this;
    const api = this.app.api.new();
    const response = await api.post('login/?v=1.1', this.login);

    if(response.success){
      await self.app.me.setData(response.data.user);
      await self.app.me.setToken(response.data.token);
      self.app.router.navigateByUrl('home');
    }
  }
}
