import { Component, OnInit, HostListener } from '@angular/core';

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
	  trigger('title', [
	    state('initialTitle', style({
	      fontSize: '2em',
	      padding: '0',
	      margin: '0'
	    })),
	    state('finalTitle', style({
	      fontSize: '1.6em',
	      padding: '0',
	      margin: '0'
	    })),
	    transition('initialTitle=>finalTitle', animate('2500ms')),
	    transition('finalTitle=>initialTitle', animate('1100ms'))
	  ]),
	]

})
export class TopComponent implements OnInit {

	mainTitle = [
		{title: 'Port Mac'},
		{title: 'Business'}, 
		{title:'Associaitons'}
	]

	currentStateHeader = 'initialHeader';
	currentStateTitle = 'initialTitle';

	changeStateHeader() { this.currentStateHeader = this.currentStateHeader === 'initialHeader' ? 'finalHeader' : 'initialHeader'; }
	

	public handleScroll(event: ScrollEvent) { 
		event.isReachingTop ? ( this.currentStateHeader = 'initialHeader' ) : (this.currentStateHeader = 'finalHeader'); 
		 
	}


@HostListener("window:scroll", [])
onWindowScroll() {
 	if(window.pageYOffset>5){
 		if(this.currentStateTitle = 'initialTitle'){this.currentStateTitle = 'finalTitle'};
 	}else{
 		this.currentStateTitle = 'initialTitle';
 	}

}

  constructor() { }

  ngOnInit() { }

}