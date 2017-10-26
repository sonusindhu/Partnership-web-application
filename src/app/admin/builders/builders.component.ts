import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
//import * as $ from 'jquery';

@Component({
	selector: 'app-builders',
	templateUrl: './builders.component.html',
	styleUrls: ['./builders.component.css']
})



export class BuildersComponent implements OnInit {

	public customers:any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getCustomers().subscribe(
			data => {
				this.customers = data;
			}
		);
	}



}

//$('#datatable-responsive').DataTable();