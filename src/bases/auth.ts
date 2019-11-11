import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import Me from '../helpers/Me/Me';


@Injectable()
export class AuthGuardService implements CanActivate {

	constructor( public router: Router, public me: Me) { }

	async canActivate(): Promise<boolean> {
		if (await this.me.get() == null) {
			this.router.navigate(['/identify']);
			return false;
		}
		return true;
	}
}

@Injectable()
export class LoginGuardService implements CanActivate {

	constructor( public router: Router, public me: Me) { }

	async canActivate(): Promise<boolean> {
		if (await this.me.get() != null) {
			this.router.navigate(['/home']);
			return false;
		}
		return true;
	}
}
