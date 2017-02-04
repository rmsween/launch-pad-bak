import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './launch-detail.component';
import { LaunchesComponent } from './launches.component';
import { LaunchService }         from './launch.service';
import { DatepickerModule } from 'angular2-material-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'launches',
        component: LaunchesComponent
      }
    ]),
    DatepickerModule,
  ],
  providers: [
    LaunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
