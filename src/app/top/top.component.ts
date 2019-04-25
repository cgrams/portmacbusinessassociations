import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],

	animations: [
	  trigger('changeHeader', [
	    state('initialHeader', style({
	      borderBottom: '0px solid black',
	    })),
	    state('finalHeader', style({
	      borderBottom: '1px solid black',
	    })),
	    transition('initialHeader=>finalHeader', animate('1500ms')),
	    transition('finalHeader=>initialHeader', animate('100ms'))
	  ]),
	]

})
export class TopComponent implements OnInit {


currentStateHeader = 'initialHeader';

	changeStateHeader() {
	  this.currentStateHeader = this.currentStateHeader === 'initialHeader' ? 'finalHeader' : 'initialHeader';
	}


	public handleScroll(event: ScrollEvent) { 
		event.isReachingTop ? ( this.currentStateHeader = 'initialHeader' ) : (this.currentStateHeader = 'finalHeader'); 
	}


  constructor() { }

  ngOnInit() { }

}