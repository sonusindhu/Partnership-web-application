import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/auth.service';

@Component({
	selector: 'app-auth-header',
	templateUrl: './auth-header.component.html'
})
export class AuthHeaderComponent {
	
	constructor(public _auth: AuthenticationService) {
		
	}
}
