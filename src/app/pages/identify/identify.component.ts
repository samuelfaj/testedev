import { Component, OnInit } from '@angular/core';
import {DefaultBase} from '../../../bases/default';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent extends DefaultBase{
  private field = '';

  private submit(){
    const self = this;
    if(self.field.indexOf('@') > -1){
      self.checkEmail();
    }else{
      self.checkCNPJ();
    }
  }

  private async checkEmail(){
    const self = this;
    const api = this.api.set('error', false).set('exception', false);
    const response = await api.get('validate/email/', {email: this.field});

    if(response.error){
      // Já tem login
      self.app.router.navigate(['/login'], { queryParams: { login: self.field} })
    }else{
      self.app.app.new.alert('Erro', 'Você não possui um login')
    }
  }

  private async checkCNPJ(){
    const self = this;
    const api = this.api.set('error', false).set('exception', false);
    const response = await api.get('validate/document/', {document: this.field});

    if(response.error){
      // Já tem login
      self.app.router.navigate(['/login'], { queryParams: { login: self.field} })
    }else{
      self.app.app.new.alert('Erro', 'Você não possui um login')
    }
  }
}
