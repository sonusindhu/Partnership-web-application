import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/auth.service';

@Component({
	selector: 'app-auth-nav',
	templateUrl: './auth-nav.component.html'
})
export class AuthNavComponent {
	
	constructor(public _auth: AuthenticationService) {
		
	}
}
