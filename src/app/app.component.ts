import { Component, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog,  MatDialogConfig} from '@angular/material';


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
	    transition('initial=>final', animate('500ms')),
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

    console.log(444);
  }





	title = 'portmacbusinessassociations';

	events: string[] = [];
	opened: boolean;

	currentState = 'initial';

	stateOfFill: string = "pink";
	changeState() { this.currentState = this.currentState === 'initial' ? 'final' : 'initial'; }
	
	changeRedArrow(){
		this.stateOfFill="red";
		console.log(this.stateOfFill);
	}

	constructor(public dialog: MatDialog) {}

	/*openDialog() {
	        const dialogConfig = new MatDialogConfig();
	        dialogConfig.disableClose = true;
	        dialogConfig.autoFocus = true;
	        this.dialog.open(ExampleCaseStudyComponent, dialogConfig);
	    }
	*/

}