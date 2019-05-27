import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';



import 'hammerjs';

import { FormsModule } from '@angular/forms';

import { ScrollEventModule } from 'ngx-scroll-event';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { GoalsComponent } from './goals/goals.component';
import { ExampleCaseStudyComponent } from './example-case-study/example-case-study.component';
import { JoinComponent } from './join/join.component';
import { RaisonComponent } from './raison/raison.component';
import { SkllsComponent } from './sklls/sklls.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    GoalsComponent,
    ExampleCaseStudyComponent,
    JoinComponent,
    RaisonComponent,
    SkllsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    ScrollEventModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule.withServerTransition({ appId: 'portmacbusinessassociations' }), // <-- here
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleCaseStudyComponent]
})
export class AppModule { }
