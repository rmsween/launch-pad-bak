import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './launch-detail.component';
import { LaunchesComponent } from './launches.component';
import { LaunchService }         from './launch.service';
import { DatepickerModule } from 'angular2-material-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    DatepickerModule,
  ],
  declarations: [
    AppComponent,
    LaunchDetailComponent,
    LaunchesComponent,
  ],
  providers: [ LaunchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
