import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/auth.service';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class CommonService {

	public API_ENDPOINT:any;
	constructor(private http:Http, private _auth:AuthenticationService) {
		this.API_ENDPOINT = environment.API_ENDPOINT;
	}

	/**
	 * [getDataObservable description]
	 * @param {string} url [description]
	 */
	getDataObservable(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	/**
	 * [findCourse description]
	 * @param {string} url [description]
	 */
	findCourse(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	postComment(contact:any){
		let urlSearchParams = new URLSearchParams();
	    urlSearchParams.append('email', contact.email);
	    urlSearchParams.append('phone', contact.phone);
	    urlSearchParams.append('name', contact.name);
	    urlSearchParams.append('comment', contact.comment);
	    let body = urlSearchParams.toString()

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');

	    return this.http.post(this.API_ENDPOINT+'contact' , body , {headers:headers})
		    .map(data => {
		      data.json();
		      return data.json();
	    });
	}


	/**
	 * [getCustomers description]
	 */
	getCustomers() {
		
	    var url = "https://api.unleashedsoftware.com/Customers?";

	    var urlParam = "pageSize=100";
	    var hash = CryptoJS.HmacSHA256(urlParam, 'v3ZjxcFpYzadXEIhXcjbaqpEX6eHh4d3Y9uYgtqqa2MQ4yJdUTmPI5pK7hZaTkQMmaFJMGTA0D0gZOdnkv6Q==');
	    var hash64 = CryptoJS.enc.Base64.stringify(hash);


		let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    headers.append('api-auth-id', '88d40b83-1e5c-4615-a7c2-b5c5abe80556');
	    headers.append('Accept', 'application/json');
	    headers.append('api-auth-signature', hash64);

	    
		return this.http.get(url+urlParam , {headers:headers})
		.map(data => {
			data.json();
			return data.json();
		});

	}


	getSignature(args:string , key:string){

	}

}
