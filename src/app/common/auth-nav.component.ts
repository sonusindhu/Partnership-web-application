import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/auth.service';
declare var $: any;

@Component({
	selector: 'app-auth-nav',
	templateUrl: './auth-nav.component.html'
})
export class AuthNavComponent {
	
	constructor(public _auth: AuthenticationService) {
		
	}

	ngAfterViewInit() {
		$.Sidemenu.init();
	}
}
