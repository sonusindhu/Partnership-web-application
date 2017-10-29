import { Component, OnInit } from '@angular/core';

//import * as $ from "jquery";
declare var $: any;

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  		/*$("#wizard-validation-form").steps({
	        headerTag: "h3",
	        bodyTag: "section",
	        transitionEffect: "slideLeft",
	        autoFocus: true,
	        enableAllSteps:true
	    });*/
  }

  ngAfterViewInit() {
    $("#wizard-validation-form").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        enableAllSteps:true
    });
  }

}
