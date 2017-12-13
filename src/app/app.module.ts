import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MasterPageComponent } from './master-page/master-page.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from './routing';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';



@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ApplicationRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
