import { Component } from '@angular/core';
import Api from '../helpers/Api/Api';
import Me from '../helpers/Me/Me';
import {Router} from '@angular/router';
import App from '../helpers/App/App';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeDev';

  constructor(public api: Api, public router: Router, public me: Me, public app: App){

  }
}
