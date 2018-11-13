import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.css']
})
export class MovieSummaryComponent implements OnInit {

@Input() movieInformation;

  constructor() { }

  ngOnInit() {
  }

}
