import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './launch-detail.component';
import { LaunchesComponent } from './launches.component';
import { LaunchNewComponent } from './launch-new.component';
import { HttpService } from './http.service';
import { LaunchService }         from './launch.service';
import { DatepickerModule } from 'angular2-material-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    DatepickerModule,
  ],
  declarations: [
    AppComponent,
    LaunchDetailComponent,
    LaunchesComponent,
    LaunchNewComponent
  ],
  providers: [ LaunchService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
