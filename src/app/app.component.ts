import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './mainMobile.scss']
})
export class AppComponent {
  title = 'portmacbusinessassociations';

  events: string[] = [];
  opened: boolean;


clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    alert();
  }
}