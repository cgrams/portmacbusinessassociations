import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './mainMobile.scss'],

  animations: [
	  trigger('changeDivSize', [
	    state('initial', style({
 
	      zIndex: '5',
	      position: 'relative',
    	  backgroundColor: 'red',
    gridRowStart: '1',
    gridRowEnd: '7',
    gridColumnStart: '2',
    gridColumnEnd: '4',
    right: '2000px'



	    })),
	    state('final', style({
 
	      zIndex: '5',
	      position: 'relative',
    	  backgroundColor: '#f19764',
    gridRowStart: '1',
    gridRowEnd: '7',
    gridColumnStart: '2',
    gridColumnEnd: '4',
    right: '0px'




	    })),
	    transition('initial=>final', animate('1500ms')),
	    transition('final=>initial', animate('1000ms'))
	  ]),
  ]


})
export class AppComponent {
  title = 'portmacbusinessassociations';

  events: string[] = [];
  opened: boolean;


currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}


}