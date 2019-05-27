import { Component, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog,  MatDialogConfig} from '@angular/material';

import { ExampleCaseStudyComponent } from './example-case-study/example-case-study.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './mainMobile.scss'],

  animations: [
	  trigger('changeDivSize', [
	    state('initial', style({
		    zIndex: '5',
		    position: 'relative',
	    	backgroundColor: 'white',
		    gridRowStart: '1',
		    gridRowEnd: '7',
		    gridColumnStart: '2',
		    gridColumnEnd: '4',
		    right: '2000px',
		    opacity: '0'
	    })),
	    state('final', style({
		    zIndex: '5',
		    position: 'relative',
	    	backgroundColor: '#f19764',
		    gridRowStart: '1',
		    gridRowEnd: '7',
		    gridColumnStart: '2',
		    gridColumnEnd: '4',
		    right: '0px',
		    opacity: '1'
	    })),
	    transition('initial=>final', animate('1500ms')),
	    transition('final=>initial', animate('500ms'))
	  ]),
  ]


})
export class AppComponent {

showStyle = false;
  getBackgroundColor() {
    if (this.showStyle) {
      return 'red';
    } else {
      return '';
    }
  }





	title = 'portmacbusinessassociations';

	events: string[] = [];
	opened: boolean;

	currentState = 'initial';

	stateOfFill: string = "pink";
	changeState() { this.currentState = this.currentState === 'initial' ? 'final' : 'initial'; }
	
 

	constructor(public dialog: MatDialog) {}



	receiveMessage($event){ this.currentState = this.currentState === 'initial' ? 'final' : 'final';}

	openCaseStudy(){
		this.dialog.open(ExampleCaseStudyComponent);
	}

}