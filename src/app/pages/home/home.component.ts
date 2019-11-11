import { Component, OnInit } from '@angular/core';
import {DefaultBase} from '../../../bases/default';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends DefaultBase {
  page = 0;
  items = [];
  pages = [];

  async ngOnInit(): Promise<any> {
    super.ngOnInit();
    this.search(1);
  }

  async search(page){
    const self = this;

    if(self.page == page){
      return false;
    }

    self.page = page;

    const api = self.api;
    const response = await api.get('catalogues', { perpage: 30, page: page, scheme_url: 'vesti'});

    self.items = response.data.response.data;
    self.pages = Array(response.data.response.last_page).fill(4);
    window.scrollTo(0, 0)
  }
}
