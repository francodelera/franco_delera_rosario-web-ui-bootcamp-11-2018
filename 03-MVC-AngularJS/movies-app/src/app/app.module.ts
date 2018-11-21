import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSummaryComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
